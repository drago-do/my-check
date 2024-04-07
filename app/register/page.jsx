"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Typography from "@/components/general/Typography";
import RegisterForm from "@/components/register/RegisterForm";

export default function Page() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  const image = searchParams.get("image");

  const newUser = firstName?.split(" ")[0];

  return (
    <div>
      <Typography variant="title">Hola {newUser}!</Typography>
      <Typography variant="p">
        Parece que aun no tienes una cuenta, por favor completa tus datos para
        poder continuar.
      </Typography>
      <RegisterForm
        email={email}
        firstName={firstName}
        lastName={lastName}
        imageUser={{ link: image, url: true, data: "", contentType: "" }}
      />
    </div>
  );
}
