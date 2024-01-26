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
import CompleteTickets from "./../../components/index/CompleteTickets";



export default function Test() {
  return (
    <div>
      Pagina de pruebas
      <section>
        <PendentTickets listOfTickets={listOfTickets} />
        <CompleteTickets listOfTickets={listOfTickets} />
      </section>
    </div>
  );
}
