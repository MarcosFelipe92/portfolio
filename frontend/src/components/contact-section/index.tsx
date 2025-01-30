import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Social } from "../social";
import { FormData, formSchema } from "./schema";
import {
  Button,
  ContainerContact,
  ErrorMessage,
  Form,
  Input,
  InputErrorMessage,
  SuccessMessage,
  TextArea,
  Title,
} from "./style";
import { sendEmail } from "../../services/send-email";
import { useState } from "react";

export function ContactSection() {
  const [sucess, setSucess] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: FormData) => {
    setError("");
    setSucess("");
    const result = await sendEmail(data);

    if (result.error) {
      setError(result.message);
    } else {
      setSucess(result.message);
      reset();
    }
  };

  return (
    <ContainerContact>
      <Title>Entre em Contato</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Seu Nome" {...register("name")} />
        {errors.name && (
          <InputErrorMessage>{errors.name.message}</InputErrorMessage>
        )}
        <Input type="email" placeholder="Seu E-mail" {...register("email")} />
        {errors.email && (
          <InputErrorMessage>{errors.email.message}</InputErrorMessage>
        )}
        <TextArea placeholder="Sua Mensagem" {...register("message")} />
        {errors.message && (
          <InputErrorMessage>{errors.message.message}</InputErrorMessage>
        )}
        {sucess && <SuccessMessage>{sucess}</SuccessMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Enviar</Button>
      </Form>

      <div>
        <Social />
      </div>
    </ContainerContact>
  );
}
