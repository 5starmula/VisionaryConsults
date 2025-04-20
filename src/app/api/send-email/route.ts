import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, companyName, message } = await request.json();

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill all required fields' },
        { status: 400 }
      );
    }

    // Create a transporter with your Zoho SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'info@visionaryconsults.org', // replace with your Zoho email
        pass: process.env.EMAIL_PASSWORD, // Add this to your .env file for security
      },
    });

    // Prepare email
    const mailOptions = {
      from: 'info@visionaryconsults.org',
      to: 'info@visionaryconsults.org', // You can also add additional recipients if needed
      subject: `Consultation Request from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Company: ${companyName || 'N/A'}
Email: ${email}
Phone: ${phone || 'N/A'}
Message: ${message}
      `,
      html: `
<h2>New Consultation Request</h2>
<p><strong>Name:</strong> ${firstName} ${lastName}</p>
<p><strong>Company:</strong> ${companyName || 'N/A'}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'N/A'}</p>
<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 