import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "./schema";
import { Social } from "../social";
import {
  Button,
  ContainerContact,
  ErrorMessage,
  Form,
  Input,
  TextArea,
  Title,
} from "./style";

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FormData) => {
    console.log("Formulário enviado", data);
    reset();
  };

  return (
    <ContainerContact>
      <Title>Entre em Contato</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Seu Nome" {...register("name")} />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        <Input type="email" placeholder="Seu E-mail" {...register("email")} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <TextArea placeholder="Sua Mensagem" {...register("message")} />
        {errors.message && (
          <ErrorMessage>{errors.message.message}</ErrorMessage>
        )}
        <Button type="submit">Enviar</Button>
      </Form>

      <div>
        <Social />
      </div>
    </ContainerContact>
  );
}
