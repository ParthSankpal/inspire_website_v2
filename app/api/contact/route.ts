import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { email, phone } = await req.json();

        if (!email || !phone) {
            return NextResponse.json(
                { message: "Email and phone are required" },
                { status: 400 }
            );
        }

        // Setup your transporter (Gmail example)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER, // your email
                pass: process.env.SMTP_PASS, // app password
            },
        });

        // Email content
        const mailOptions = {
            from: `"Inspire Academy" <${process.env.SMTP_USER}>`,
            to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
            subject: "New Contact Form Submission",
            text: `📩 New Inquiry from website:
                    Email: ${email}
                    Phone: ${phone}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json(
            { message: "Failed to send email", error },
            { status: 500 }
        );
    }
}
