import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validasyon
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Lütfen tüm zorunlu alanları doldurun." },
        { status: 400 }
      );
    }

    // Konu başlıkları mapping
    const subjectLabels: Record<string, string> = {
      konut: "Konut Projesi",
      ticari: "Ticari Proje",
      renovasyon: "Renovasyon",
      danismanlik: "Danışmanlık",
      diger: "Diğer",
    };

    const subjectLabel = subjectLabels[subject] || subject;

    // SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // E-posta içeriği
    const mailOptions = {
      from: `"Yavuzoğlu Mimarlık Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "kerem@yavuzoglumimarlik.com",
      replyTo: email,
      subject: `Yeni İletişim Formu: ${subjectLabel} — ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #2d5a7b; padding: 32px 24px;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 500;">
              Yeni İletişim Formu Mesajı
            </h1>
          </div>
          <div style="padding: 32px 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; width: 120px; vertical-align: top;">
                  Ad Soyad
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a1a; font-size: 15px;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">
                  E-posta
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a1a; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #2d5a7b; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${
                phone
                  ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">
                  Telefon
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a1a; font-size: 15px;">
                  <a href="tel:${phone.replace(/\s/g, "")}" style="color: #2d5a7b; text-decoration: none;">${phone}</a>
                </td>
              </tr>`
                  : ""
              }
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">
                  Konu
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a1a; font-size: 15px;">
                  ${subjectLabel}
                </td>
              </tr>
              <tr>
                <td style="padding: 16px 0 0; color: #999; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">
                  Mesaj
                </td>
                <td style="padding: 16px 0 0; color: #1a1a1a; font-size: 15px; line-height: 1.7;">
                  ${message.replace(/\n/g, "<br>")}
                </td>
              </tr>
            </table>
          </div>
          <div style="padding: 20px 24px; background: #fafafa; border-top: 1px solid #f0f0f0;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              Bu mesaj yavuzoglumimarlik.com iletişim formu üzerinden gönderilmiştir.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Mesajınız başarıyla gönderildi." },
      { status: 200 }
    );
  } catch (error) {
    console.error("E-posta gönderim hatası:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}
