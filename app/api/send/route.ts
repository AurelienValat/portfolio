import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error("La clé API Resend est manquante !");
        return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

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