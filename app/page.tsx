"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/general/Container";
import NavBarIndex from "@/components/general/NavBar";
import SelectFunction from "@/components/index/SelectFunction";
import PendentTickets from "@/components/index/PendentTickets";
import CompleteTickets from "@/components/index/CompleteTickets";
import SwipeDrawer from "@/components/general/SwipeDrawer";
import MaterialIcon from "@/components/general/MaterialIcon";

import useOrderList from "@/hooks/useOrderList";

export default function Home() {
  const [linkTo, setLinkTo] = useState("order");
  const { getPendentOrders, getCompletedOrders, orderList } = useOrderList();
  const [listOfTickets, _] = useState(orderList);

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

      <SwipeDrawer
        title={
          <>
            <MaterialIcon iconName="receipt_long" /> Lista de comandas
          </>
        }
      >
        <PendentTickets listOfTickets={listOfTickets} />
        <CompleteTickets listOfTickets={listOfTickets} />
      </SwipeDrawer>
    </>
  );
}
