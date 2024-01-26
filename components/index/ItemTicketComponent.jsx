"use client";
import React from "react";
import ImagenTumblr from "./../general/ImagenTumblr";
import Typography from "./../general/Typography";
import MaterialIcon from "./../general/MaterialIcon";
import Badge from "./../general/Badge";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ItemTicketComponent({ ticket }) {
  const { push } = useRouter();
  const [deliverState, setDeliverState] = useState({
    value: ticket?.fullDeliver,
    loading: false,
  });

  const [paidState, setPaidState] = useState({
    value: ticket?.fullPaid,
    loading: false,
  });

  const handleDeliver = () => {
    setDeliverState({ ...deliverState, loading: true });
    //TODO, promesa hook mod estado
    setTimeout(() => {
      if (true) {
        setDeliverState({ value: true, loading: false });
      } else {
        setDeliverState({ value: false, loading: false });
      }
    }, 3000);
  };

  const handlePaid = () => {
    setPaidState({ ...paidState, loading: true });
    //TODO, promesa hook mod estado
    setTimeout(() => {
      if (true) {
        setPaidState({ value: true, loading: false });
      } else {
        setPaidState({ value: false, loading: false });
      }
    }, 3000);
  };

  const goToEdit = () => {
    //TODO, lógica para agregar el ticket a modo edición.
    push("/order");
  };

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
        <button
          onClick={goToEdit}
          type="button"
          className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        >
          <MaterialIcon iconName="border_color" />
        </button>
      </div>
      <div className="md:hidden flex flex-nowrap justify-center pb-2 ">
        <Badge
          color={deliverState.value ? "green" : "red"}
          icon={<MaterialIcon iconName="concierge" />}
          onClick={handleDeliver}
          loading={deliverState.loading}
        >
          {deliverState.value ? "Entregado" : "Pendiente"}
        </Badge>
        <Badge
          color={paidState.value ? "green" : "red"}
          icon={<MaterialIcon iconName="attach_money" />}
          onClick={handlePaid}
          loading={paidState.loading}
        >
          {paidState.value ? "Pagado" : "Pendiente"}
        </Badge>
        <Badge color={"green"} icon={<MaterialIcon iconName="attach_money" />}>
          {ticket?.total || "0"}
        </Badge>
      </div>
    </div>
  );
}
