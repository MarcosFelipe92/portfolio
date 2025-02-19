/* eslint-disable @typescript-eslint/no-unused-vars */
export type InputEmail = {
  name: string;
  email: string;
  message: string;
};

export type OutputEmail = {
  message: string;
  error?: boolean;
};

export async function sendEmail({
  name,
  email,
  message,
}: InputEmail): Promise<OutputEmail> {
  try {
    const response = await fetch("https://protifolio.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      return {
        error: true,
        message:
          "Erro ao enviar email, tente novamente depois de alguns minutos!",
      };
    }

    return await response.json();
  } catch (error) {
    return {
      error: true,
      message:
        "Erro ao enviar email, tente novamente depois de alguns minutos!",
    };
  }
}
