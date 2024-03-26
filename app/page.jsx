"use client";
import React from "react";
import Image from "next/image";
import Typography from "@/components/general/Typography";
import { signIn, useSession, signOut } from "next-auth/react";
import GoogleSingIn from "@/components/login/GoogleSignIn";

export default function Page() {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <div className="flex flex-col flex-nowrap items-center justify-center">
      <div className="flex flex-col flex-nowrap items-center justify-center w-full sm:w-3/4">
        <Image
          src={"/logo.png"}
          width={200}
          height={200}
          alt="Logo Mi Comanda"
        />
        <Typography variant={"title"}>Bienvenidos a mi comanda</Typography>
        <Typography variant={"subtitle"}>
          Tu comanda en la palma de tu mano
        </Typography>
        <Typography variant={"body"}>
          Mi comanda es una aplicación revolucionaria diseñada para orquestar
          con maestría el flujo de operaciones de restaurantes y bares. Esta
          plataforma multifunctional se erige como el núcleo digital de tu
          establecimiento, ofreciendo una interconexión fluida entre las
          distintas áreas clave: pedidos, barra, cocina y caja.
        </Typography>
        <div className="my-8"></div>
        <GoogleSingIn signIn={signIn} />
      </div>
    </div>
  );
}
