"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./../components/general/Container";
import NavBarIndex from "./../components/index/NavBarIndex";
import DrawerDownContainer from "./../components/general/DrawerDownContainer";
import SelectFunction from "./../components/index/SelectFunction";
export default function Home() {
  const [linkTo, setLinkTo] = useState("order");
  return (
    <>
      <NavBarIndex />
      <Container className="flex flex-col items-center">
        <SelectFunction handleSelect={setLinkTo} />
        <Link href={`/${linkTo}`}>
          <Image
            src={"/restaurant-logo.png"}
            width={400}
            height={400}
            alt="Logo restaurant-bar"
          />
        </Link>
      </Container>
      <DrawerDownContainer
        title={"Comandas activas"}
        icon={
          <span className="material-symbols-outlined font-semibold mr-3">
            receipt_long
          </span>
        }
      >
        Soy el hijow
      </DrawerDownContainer>
    </>
  );
}
