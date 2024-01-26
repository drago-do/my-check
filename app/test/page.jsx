"use client";
import React, { useState, useEffect } from "react";
import Typography from "../../components/general/Typography";
import Skeleton from "./../../components/general/Skeleton";
import Container from "@/components/general/Container";
import MaterialIcon from "@/components/general/MaterialIcon";
import Image from "next/image";
import Badge from "./../../components/general/Badge";
import { useRouter } from "next/navigation";
import PendentTickets from "./../../components/index/PendentTickets";

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
];

export default function Test() {
  return (
    <div>
      Pagina de pruebas
      <section>
        <PendentTickets listOfTickets={listOfTickets} />
      </section>
    </div>
  );
}
