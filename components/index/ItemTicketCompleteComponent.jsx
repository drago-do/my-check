"use client";
import React from "react";
import ImagenTumblr from "../general/ImagenTumblr";
import Typography from "../general/Typography";
import MaterialIcon from "../general/MaterialIcon";
import Badge from "../general/Badge";

export default function ItemTicketCompleteComponent({ ticket }) {
  const getUserNameById = (id) => {
    //TODO, lógica hook lista usuarios (si no existe consulta nuevamente)
    return "usuario desconocido";
  };

  return (
    <div className="my-3 border-solid	rounded-3xl border-2 border-black	dark:border-white">
      <div className="w-full flex flex-row justify-between items-center flex-nowrap px-5 py-3">
        <ImagenTumblr src={"/404.png"} />

        <div className="flex flex-col items-start grow">
          <Typography variant="p">
            {ticket?.tableName || "Sin nombre"}
          </Typography>
          <Typography variant="caption">
            {getUserNameById(ticket?.userId)}
          </Typography>
        </div>
        <Badge color={"green"} icon={<MaterialIcon iconName="attach_money" />}>
          {ticket?.total || "0"}
        </Badge>
      </div>
    </div>
  );
}
