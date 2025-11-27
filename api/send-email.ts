import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { name, email, message } = req.body;

  // Create a transporter object using SMTP transport
  // IMPORTANT: We will replace these details with Environment Variables
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // e.g., 'smtp.hostinger.com'
    port: Number(process.env.EMAIL_PORT), // e.g., 465
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your full email address
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: `"Your Website" <${process.env.EMAIL_USER}>`, // sender address
      to: 'info@pflanzen-verstehen.de', // list of receivers
      subject: 'Neue Anmeldung über das Kontaktformular', // Subject line
      text: `Name: ${name}\nEmail: ${email}\n\nNachricht:\n${message}`, // plain text body
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Nachricht:</b></p><p>${message}</p>`, // html body
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
}