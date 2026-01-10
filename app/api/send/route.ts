// app/api/send/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    try {
        const { name, email, subject, message } = await req.json();

        // Validation pour éviter l'erreur "Invalid reply_to"
        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
        }

        // resend.emails.send renvoie un objet { data, error }
        const { data, error } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['aurelien.valat.pro@gmail.com'],
            subject: `Contact Portfolio: ${subject}`,
            replyTo: email.trim(),
            text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
            // Si Resend renvoie une erreur, on la transmet avec un code d'erreur
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json(data);
    } catch (error) {
        // En cas de crash serveur, on renvoie un statut 500
        return NextResponse.json({ error }, { status: 500 });
    }
}