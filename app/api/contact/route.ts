import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TURNSTILE_SECRET = "0x4AAAAAAEHAQghYTXCdtzxmDusYKWQp-y0";

export async function POST(req: NextRequest) {
  const { naam, email, nummer, bedrijf, bericht, turnstileToken } = await req.json();

  // Verificeer Turnstile token bij Cloudflare
  const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: TURNSTILE_SECRET,
      response: turnstileToken ?? "",
      remoteip: req.headers.get("x-forwarded-for") ?? "",
    }),
  });

  const result = await verification.json();
  if (!result.success) {
    return NextResponse.json({ error: "Bot verificatie mislukt" }, { status: 403 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Concess Website <noreply@concess.nl>",
    to: "info@concess.nl",
    subject: `Nieuw bericht van ${naam}`,
    html: `
      <p><strong>Naam:</strong> ${naam}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Nummer:</strong> ${nummer}</p>
      ${bedrijf ? `<p><strong>Bedrijf:</strong> ${bedrijf}</p>` : ""}
      <p><strong>Bericht:</strong><br>${bericht.replace(/\n/g, "<br>")}</p>
    `,
    replyTo: email,
  });

  return NextResponse.json({ ok: true });
}
