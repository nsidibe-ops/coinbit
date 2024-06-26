// pages/api/signup.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName,lastName,email, password,confirmPassword } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: 'coinbitinvestments@gmail.com', // Your Gmail email address mail: 
        pass: 'coinbitInvestment_2468', // Your Gmail email password
      },
    });

    // Email content
    const mailOptions = {
      from: 'coinbitinvestments@gmail.com',
      to: email,
      subject: 'New User Alert',
      text: `Hi ${firstName,lastName}, has registered to our company.`,
    };

    // Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Email sending failed.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
