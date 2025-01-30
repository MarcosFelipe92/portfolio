import { Router } from "express";
import { EmailController } from "./controllers/email-controller";

const router = Router();

router.post("/send-email", async (req, res) => {
  new EmailController().sendEmail(req, res);
});

export default router;
