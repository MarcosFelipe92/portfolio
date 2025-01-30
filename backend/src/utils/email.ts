import { Resend } from "resend";

export const getResendInstance = () => {
  const key = process.env.RESEND_API_KEY!;
  return new Resend(key);
};
