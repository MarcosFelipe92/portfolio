import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  email: z
    .string()
    .email({ message: "Por favor, insira um e-mail válido" })
    .min(1, { message: "O e-mail é obrigatório" }),
  message: z
    .string()
    .min(10, { message: "A mensagem deve ter no mínimo 10 caracteres" }),
});

export type FormData = z.infer<typeof formSchema>;
