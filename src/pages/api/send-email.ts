import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, locationType, message } = req.body;

  if (!name || !email || !phone || !locationType || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">Thank You for Reaching Out!</h2>
        <p>Hi <strong>${name}</strong>,</p>
        <p>We've received your inquiry and will get back to you shortly at <strong>${phone}</strong>.</p>
        <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Location Type:</strong> ${locationType}</p>
          <p><strong>Your Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
        <p>Best regards,<br><strong>Snapvend Team</strong></p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
        <p style="font-size: 12px; color: #6b7280;">
          Contact: +91-9154256438 | helloSnapvend@gmail.com
        </p>
      </div>
    `;

    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">New Inquiry Received</h2>
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Location Type:</strong> ${locationType}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
        <p style="font-size: 12px; color: #6b7280; margin-top: 20px;">
          Sent at: ${new Date().toLocaleString()}
        </p>
      </div>
    `;

    // Send email to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Snapvend - We Received Your Inquiry",
      html: userEmailHtml
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Inquiry from ${name}`,
      html: adminEmailHtml,
      replyTo: email
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
}
