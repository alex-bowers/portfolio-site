import fetch from 'node-fetch';

export async function handler(event) {
    const {
        name,
        email,
        message
    } = JSON.parse(event.body)

    const {
        VITE_DOMAIN,
        NETLIFY_EMAILS_SECRET,
        SENDGRID_FROM_EMAIL,
        SENDGRID_TO_EMAIL
    } = process.env

    await fetch(
        `${VITE_DOMAIN}/.netlify/functions/emails/contact`,
        {
            headers: {
                "netlify-emails-secret": NETLIFY_EMAILS_SECRET,
            },
            method: "POST",
            body: JSON.stringify({
            from: SENDGRID_FROM_EMAIL,
            to: SENDGRID_TO_EMAIL,
            subject: `New mail from ${name}`,
            parameters: {
                name,
                email,
                message
            },
            }),
        }
    );

    return {
        statusCode: 200,
        body: JSON.stringify({ data: 'Email confirmation sent successfully!' }),
    };
}
