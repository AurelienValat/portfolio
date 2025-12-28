import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['auval05@gmail.com'],
            subject: `Contact Portfolio: ${subject}`,
            replyTo: email,
            text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}