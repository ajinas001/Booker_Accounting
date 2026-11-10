import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, companyName, service } = body;

    // Basic validation
    if (!fullName || !phone || !email || !companyName || !service) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Clean phone number for WhatsApp link
    const cleanPhone = phone.replace(/[^0-9]/g, "");

    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "md@bookeraccounting.com";
      
    // Use your fully verified Resend subdomain address here
    const senderEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Booker Accounting Leads <leads@send.bookeraccounting.com>";

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f6f7; margin: 0; padding: 20px; color: #1e293b; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
            .header { background-color: #0E2F36; color: #ffffff; padding: 32px 28px; text-align: center; }
            .header h1 { margin: 0 0 8px 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em; color: #ffffff; }
            .header p { margin: 0; font-size: 14px; color: #5CB9CA; font-weight: 500; }
            .badge { display: inline-block; background-color: #185561; color: #ffffff; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 10px; }
            .content { padding: 32px 28px; }
            .lead-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
            .footer { background: #f8fafc; padding: 20px 28px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Tax Consultation Request</h1>
              <p>Google Ads Campaign: Corporate Tax & VAT Services</p>
              <div class="badge">${service}</div>
            </div>
            <div class="content">
              <div class="lead-box">
                <table width="100%" cellpadding="8" cellspacing="0" style="font-size: 14px;">
                  <tr>
                    <td style="color: #64748b; font-weight: 600; width: 35%;">FULL NAME</td>
                    <td style="color: #0f172a; font-weight: 700;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600;">COMPANY NAME</td>
                    <td style="color: #0f172a; font-weight: 700;">${companyName}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600;">SERVICE NEEDED</td>
                    <td style="color: #185561; font-weight: 700;">${service}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600;">PHONE NUMBER</td>
                    <td style="color: #0f172a; font-weight: 700;"><a href="tel:${phone}" style="color: #185561; text-decoration: none;">${phone}</a></td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600;">EMAIL ADDRESS</td>
                    <td style="color: #0f172a; font-weight: 700;"><a href="mailto:${email}" style="color: #185561; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600;">SUBMISSION TIME</td>
                    <td style="color: #64748b;">${new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })} (UAE Time)</td>
                  </tr>
                </table>
              </div>

              <div style="margin-top: 24px; text-align: center;">
                <a href="tel:${phone}" style="display: inline-block; background-color: #185561; color: #ffffff; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; margin-right: 8px;">Call Lead</a>
                <a href="https://wa.me/${cleanPhone}" style="display: inline-block; background-color: #1F8F4E; color: #ffffff; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; margin-right: 8px;">WhatsApp Lead</a>
                <a href="mailto:${email}" style="display: inline-block; background-color: #0E2F36; color: #ffffff; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply by Email</a>
              </div>
            </div>
            <div class="footer">
              <p>This lead was received from the Booker Accounting & Consulting Google Ads Landing Page.</p>
              <p>&copy; ${new Date().getFullYear()} Booker Accounting and Consulting LLC.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [receiverEmail],
      replyTo: email,
      subject: `🚨 [New Tax Lead] ${fullName} - ${companyName} (${service})`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: "Lead received and email sent successfully.",
    });
  } catch (err) {
    console.error("Submission API Error:", err);
    return NextResponse.json(
      { error: err.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}