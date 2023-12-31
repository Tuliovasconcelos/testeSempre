import * as nodemailer from 'nodemailer';

export async function enviarEmail(destinatario: string, assunto: string, corpo: string): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: '',
    },
  });

  const mailOptions = {
    from: 'tuliorad4@gmail.com',
    to: destinatario,
    subject: assunto,
    text: corpo,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
}
