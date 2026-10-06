// POST /api/contact – kontaktskjemaet.
// Sender meldingen som e-post via Resend. Nøkkel og adresser settes som miljøvariabler på Vercel:
//   RESEND_API_KEY  API-nøkkel fra resend.com
//   CONTACT_FROM    avsender på et domene som er verifisert i Resend, f.eks. "Portefølje <kontakt@ditt-domene.no>"
//   CONTACT_TO      mottaker, f.eks. "deg@ditt-domene.no"

import { z } from "zod";
import { isRateLimited } from "./_rateLimit";

const bodySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1000),
  // Skjult felt som bare roboter fyller ut
  website: z.string().max(0).optional(),
});

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });

const escapeHtml = (text: string) =>
  text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  if (isRateLimited(request, 5, 60 * 60 * 1000)) {
    return json({ error: "For mange meldinger. Prøv igjen senere." }, 429);
  }

  const parsed = bodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return json({ error: "Sjekk at alle feltene er fylt ut riktig." }, 400);
  }
  const { name, email, message, website } = parsed.data;

  // Roboter som fyller ut det skjulte feltet får et vanlig svar, men ingen e-post sendes.
  if (website) return json({ ok: true });

  const { RESEND_API_KEY, CONTACT_FROM, CONTACT_TO } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM || !CONTACT_TO) {
    console.error("RESEND_API_KEY, CONTACT_FROM eller CONTACT_TO mangler");
    return json({ error: "Kontaktskjemaet er ikke satt opp." }, 500);
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: email,
      subject: `Melding fra porteføljen: ${name}`,
      text: `Navn: ${name}\nE-post: ${email}\n\n${message}`,
      html: `<p><strong>Navn:</strong> ${escapeHtml(name)}<br><strong>E-post:</strong> ${escapeHtml(email)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  });

  if (!response.ok) {
    console.error("Resend svarte", response.status, await response.text());
    return json({ error: "Meldingen ble ikke sendt." }, 502);
  }

  return json({ ok: true });
}
