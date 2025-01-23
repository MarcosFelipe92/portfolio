import nodemailer from "nodemailer";

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "seuemail@gmail.com",
        pass: "suasenha",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "seurecebedor@gmail.com",
      subject: `Mensagem de ${name}`,
      text: message,
    });
  } catch (err) {}
};
