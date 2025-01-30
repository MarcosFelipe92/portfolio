import { Request, Response } from "express";
import emailService from "../services/email-service";

class EmailController {
  public async sendEmail(req: Request, res: Response) {
    try {
      const { name, email, message } = req.body;
      const response = await emailService.sendEmail(name, email, message);
      return res.status(200).json({ message: "Email enviado com sucesso!" });
    } catch (err) {
      console.error("Erro ao enviar email:", err);
      return res.status(500).json({ error: "Erro ao enviar email" });
    }
  }
}

export { EmailController };
