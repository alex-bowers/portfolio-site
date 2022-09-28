require('dotenv').config()

const client = require('@sendgrid/mail')
const {
  SENDGRID_API_KEY,
  SENDGRID_FROM_EMAIL,
  SENDGRID_TO_EMAIL
} = process.env

exports.handler = async function (event) {
    const formData = JSON.parse(event.body)

    if (!formData.message || !formData.name || !formData.email) {
        return { statusCode: 422, body: 'Name, email, and message are required.' }
    }

    client.setApiKey(SENDGRID_API_KEY);

    const data = {
        to: SENDGRID_TO_EMAIL,
        from: SENDGRID_FROM_EMAIL,
        subject: `New mail from ${formData.name}`,
        html: `
            <h4>Email from ${formData.name} ${formData.email}</h4>
            <p>${formData.message}</p>
        `
    }

    try {
        await client.send(data);
        return {
            statusCode: 200,
            body: 'Your message was sent successfully!'
        }
    } catch (error) {
        return {
            statusCode: 422,
            body: `Error: ${error}`
        }
    }
}
