"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ImageViewer from "@/components/general/ImageViewer";
import Link from "next/link";
import Container from "@/components/general/Container";
import SelectFunction from "@/components/index/SelectFunction";
import PendentTickets from "@/components/index/PendentTickets";
import CompleteTickets from "@/components/index/CompleteTickets";
import SwipeDrawer from "@/components/general/SwipeDrawer";
import MaterialIcon from "@/components/general/MaterialIcon";

import useOrderList from "@/hooks/useOrderList";
import useActualBusiness from "@/hooks/useBusiness";
export default function Home() {
  const { actualBusiness } = useActualBusiness();
  const [businessPicture, setBusinessPicture] = useState({
    url: true,
    link: "/restaurant-logo.png",
  });
  const [linkTo, setLinkTo] = useState("order");
  const { getPendentOrders, getCompletedOrders, orderList } = useOrderList();
  const [listOfTickets, _] = useState(orderList);

  useEffect(() => {
    actualBusiness?.logo && setBusinessPicture(actualBusiness?.logo);
  }, [actualBusiness]);

  return (
    <>
      <Container className="flex flex-col items-center">
        <SelectFunction handleSelect={setLinkTo} />
        <Link href={`/${linkTo}`}>
          <ImageViewer
            fotoData={businessPicture}
            alt="Logo restaurant-bar"
            className="rounded-xl w-full h-34 object-cover"
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
