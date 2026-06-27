import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { naam, email, nummer, bedrijf, bericht } = await req.json();

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
