import { defineConfig, type Plugin } from "vite";
import fs from "fs";
import { parseEnv } from "util";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Kjører funksjonene i api/ lokalt under `npm run dev`, slik Vercel gjør i produksjon.
// Hver fil eksporterer POST(request: Request): Promise<Response>.
const apiDevServer = (): Plugin => ({
  name: "api-dev-server",
  configureServer(server) {
    server.middlewares.use("/api", async (req, res, next) => {
      const name = req.url?.split("?")[0].replace(/^\//, "");
      if (!name || name.startsWith("_") || req.method !== "POST") return next();

      try {
        const mod = await server.ssrLoadModule(`/api/${name}.ts`);
        const chunks: Buffer[] = [];
        for await (const chunk of req) chunks.push(chunk as Buffer);

        const request = new Request(`http://localhost${req.originalUrl}`, {
          method: "POST",
          headers: req.headers as Record<string, string>,
          body: Buffer.concat(chunks),
        });
        const response: Response = await mod.POST(request);

        res.statusCode = response.status;
        response.headers.forEach((value, key) => res.setHeader(key, value));
        res.end(await response.text());
      } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "Feil i lokal API-server" }));
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(() => {
  // Gjør nøklene i .env og .env.local tilgjengelige for api/-funksjonene lokalt.
  // Filene leses direkte og overskriver gamle verdier, så endringer slår inn når serveren restarter.
  for (const file of [".env", ".env.local"]) {
    if (fs.existsSync(file)) Object.assign(process.env, parseEnv(fs.readFileSync(file, "utf8")));
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), apiDevServer()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
