// POST /api/chat – AI-assistenten på porteføljesiden.
// Tar imot samtalen fra nettleseren, sender den til Claude sammen med faktaene i _knowledge.ts,
// og returnerer svaret. API-nøkkelen (ANTHROPIC_API_KEY) finnes bare på serveren.

import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { systemPrompt } from "./_knowledge";
import { isRateLimited } from "./_rateLimit";

const MODEL = "claude-sonnet-5-5";
const MAX_HISTORY = 10;

const bodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(1000),
      }),
    )
    .min(1)
    .max(50),
});

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });

export async function POST(request: Request) {
  if (isRateLimited(request, 20, 10 * 60 * 1000)) {
    return json({ error: "For mange spørsmål på kort tid. Prøv igjen om litt." }, 429);
  }

  const parsed = bodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return json({ error: "Ugyldig forespørsel." }, 400);
  }

  // Bare de siste meldingene sendes, og samtalen må starte med brukeren
  // (velkomstmeldingen i chatten er fra assistenten og hoppes over).
  let messages: Anthropic.MessageParam[] = parsed.data.messages
    .slice(-MAX_HISTORY)
    .map(({ role, content }) => ({ role, content }) as Anthropic.MessageParam);
  while (messages.length > 0 && messages[0].role !== "user") messages = messages.slice(1);
  if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
    return json({ error: "Ugyldig forespørsel." }, 400);
  }

  try {
    const client = new Anthropic(); // leser ANTHROPIC_API_KEY fra miljøet
    const response = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 1500, // svarene er korte, men modellen tenker litt før den svarer
      output_config: { effort: "low" }, // korte faktasvar trenger lite resonnering
      // Hvis modellen avslår av sikkerhetsgrunner, prøver API-et automatisk en annen modell
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      system: [{ type: "text", text: systemPrompt, cache_control: { type: "ephemeral" } }],
      messages,
    });

    if (response.stop_reason === "refusal") {
      return json({ reply: "Det kan jeg dessverre ikke svare på. Spør gjerne om prosjektene eller erfaringen til Benjamin." });
    }

    const reply = response.content
      .filter((block): block is Anthropic.Beta.BetaTextBlock => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    return json({ reply: reply || "Beklager, jeg fikk ikke til å svare på det." });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return json({ error: "Assistenten er opptatt akkurat nå. Prøv igjen om litt." }, 503);
    }
    if (error instanceof Anthropic.AuthenticationError) {
      console.error("ANTHROPIC_API_KEY mangler eller er ugyldig");
    } else if (error instanceof Anthropic.APIError) {
      console.error(`Anthropic API-feil ${error.status}:`, error.message);
    } else {
      console.error("Feil i /api/chat (mangler ANTHROPIC_API_KEY?):", error);
    }
    return json({ error: "Assistenten er ikke tilgjengelig akkurat nå." }, 500);
  }
}
