import React from "react";
import Image from "next/image";
import Typography from "@/components/general/Typography";

export default function InventoryPage() {
  return (
    <div className="flex flex-col w-full items-center">
      <Typography variant={"title"}>
        Característica en desarrollo, no disponible actualmente.
      </Typography>
      <Image src={"/onDev.webp"} width={400} height={400} alt="on dev" />
    </div>
  );
}
