"use client";
import React from "react";
import Typography from "../general/Typography";
import MaterialIcon from "../general/MaterialIcon";
import ItemTicketComponent from "./ItemTicketComponent";
import Skeleton from "./../general/Skeleton";
import { useEffect, useState } from "react";

export default function PendentTickets({ listOfTickets }) {
  const [tickets, setTickets] = useState(listOfTickets);
  const [showOnlyMyTickets, setShowOnlyMyTickets] = useState(true);

  const handleChangeFilter = () => {
    setShowOnlyMyTickets(!showOnlyMyTickets);
  };

  useEffect(() => {
    //Solo muestra los tickets de este usuario
    //TODO hook de consulta de id de usuario
    const thisUserID = "63ac790c21eadc689bf24a5b";
    if (listOfTickets && showOnlyMyTickets) {
      setTickets(
        listOfTickets.filter((ticket) => ticket.userId === thisUserID)
      );
    } else {
      setTickets(listOfTickets);
    }
  }, [showOnlyMyTickets, listOfTickets]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-nowrap justify-between items-center px-3">
        <Typography variant="subtitle">Tickets pendientes</Typography>
        <button
          onClick={handleChangeFilter}
          type="button"
          className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        >
          <MaterialIcon iconName={showOnlyMyTickets ? "person" : "group"} />
        </button>
      </div>
      <div className="flex flex-col">
        {tickets ? (
          tickets.map((ticket, index) => {
            return <ItemTicketComponent ticket={ticket} key={index} />;
          })
        ) : (
          <Skeleton variant={"list"} />
        )}
      </div>
    </div>
  );
}
