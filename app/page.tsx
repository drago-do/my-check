"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./../components/general/Container";
import NavBarIndex from "../components/general/NavBar";
import SelectFunction from "./../components/index/SelectFunction";
import PendentTickets from "@/components/index/PendentTickets";
import CompleteTickets from "@/components/index/CompleteTickets";
import SwipeDrawer from "@/components/general/SwipeDrawer";
import MaterialIcon from "@/components/general/MaterialIcon";

//TODO delete this template
const listOfTickets = [
  {
    _id: "65b2a2f60adeabcc1ed58c59",
    id: "1705605117997",
    userId: "63ac790c21eadc689bf24a5b",
    fullDeliver: false,
    paid: "false",
    tableName: "13:11:57",
    location: ["x", "y"],
    creationDate: "18/1/2024, 13:11:57",
    products: [
      {
        creationDate: 1705605117994,
        id_mongo: "63acc1a5d344f1e651a22935",
        price: 70,
        deliver: false,
      },
      {
        creationDate: "1705605119481.0",
        id_mongo: "63acc1dcd344f1e651a22937",
        price: 30,
        deliver: false,
      },
    ],
    total: "100",
  },
  {
    _id: "65b2a2f60adeabcc1ed58c59",
    id: "1705605117997",
    userId: "63ac790c21eadc689bf24a54",
    fullDeliver: false,
    fullPaid: "false",
    tableName: "13:11:57",
    location: ["x", "y"],
    creationDate: "18/1/2024, 13:11:57",
    products: [
      {
        creationDate: 1705605117994,
        id_mongo: "63acc1a5d344f1e651a22935",
        price: 70,
        deliver: false,
      },
      {
        creationDate: "1705605119481.0",
        id_mongo: "63acc1dcd344f1e651a22937",
        price: 30,
        deliver: false,
      },
      {
        creationDate: 1705605117994,
        id_mongo: "63acc1a5d344f1e651a22935",
        price: 70,
        deliver: false,
      },
      {
        creationDate: "1705605119481.0",
        id_mongo: "63acc1dcd344f1e651a22937",
        price: 30,
        deliver: false,
      },
    ],
    total: "100",
  },
  {
    _id: "65b2a2f60adeabcc1ed58c59",
    id: "1705605117997",
    userId: "63ac790c21eadc689bf24a54",
    fullDeliver: false,
    fullPaid: "false",
    tableName: "13:11:57",
    location: ["x", "y"],
    creationDate: "18/1/2024, 13:11:57",
    products: [
      {
        creationDate: 1705605117994,
        id_mongo: "63acc1a5d344f1e651a22935",
        price: 70,
        deliver: false,
      },
      {
        creationDate: "1705605119481.0",
        id_mongo: "63acc1dcd344f1e651a22937",
        price: 30,
        deliver: false,
      },
      {
        creationDate: 1705605117994,
        id_mongo: "63acc1a5d344f1e651a22935",
        price: 70,
        deliver: false,
      },
      {
        creationDate: "1705605119481.0",
        id_mongo: "63acc1dcd344f1e651a22937",
        price: 30,
        deliver: false,
      },
    ],
    total: "100",
  },
  {
    _id: "65b2a2f60adeabcc1ed58c59",
    id: "1705605117997",
    userId: "63ac790c21eadc689bf24a54",
    fullDeliver: false,
    fullPaid: "false",
    tableName: "13:11:57",
    location: ["x", "y"],
    creationDate: "18/1/2024, 13:11:57",
    products: [
      {
        creationDate: 1705605117994,
        id_mongo: "63acc1a5d344f1e651a22935",
        price: 70,
        deliver: false,
      },
      {
        creationDate: "1705605119481.0",
        id_mongo: "63acc1dcd344f1e651a22937",
        price: 30,
        deliver: false,
      },
      {
        creationDate: 1705605117994,
        id_mongo: "63acc1a5d344f1e651a22935",
        price: 70,
        deliver: false,
      },
      {
        creationDate: "1705605119481.0",
        id_mongo: "63acc1dcd344f1e651a22937",
        price: 30,
        deliver: false,
      },
    ],
    total: "100",
  },
];

export default function Home() {
  const [linkTo, setLinkTo] = useState("order");

  //TODO logic for get pendent and complete tickets

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
