import { getResendInstance } from "../utils/email";

class EmailService {
  public async sendEmail(name: string, email: string, message: string) {
    const resend = getResendInstance();
    try {
      resend.emails.send({
        from: "Portfólio <onboarding@resend.dev>",
        to: "marcosfelipe.amorim.dev@gmail.com",
        subject: name,
        html: `<h3>${email}</h3><p>${message}</p>`,
      });

      return { message: "Email enviado com sucesso" };
    } catch (err) {
      console.log(err);

      return { error: "Erro ao enviar email" };
    }
  }
}

export default new EmailService();
