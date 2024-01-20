"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./../components/general/Container";
import SelectFunction from "./../components/index/SelectFunction";
export default function Home() {
  const [linkTo, setLinkTo] = useState("order");
  return (
    <Container className="flex flex-col items-center pt-12">
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
  );
}
