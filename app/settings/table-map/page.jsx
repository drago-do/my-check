"use client";
import React, { useState } from "react";
import Typography from "@/components/general/Typography";
import MapOfTablesInsert from "@/components/settings/table-map/MapOfTablesForm";
import MapOfTablesList from "@/components/settings/table-map/MapOfTablesList";
import Modal from "@/components/general/Modal";
import MaterialIcon from "@/components/general/MaterialIcon";
import MapOfTablesJSON from "@/utils/MapOfTablesJSON";


export default function TableMap() {
  const [isOpenMapOfTables, setIsOpenMapOfTables] = useState(false);
  const [mapOfTables, setMapOfTables] = useState(MapOfTablesJSON);

  const handleCloseMapOfTables = () => {
    setIsOpenMapOfTables(!isOpenMapOfTables);
  };
  return (
    <div className="flex flex-col flex-nowrap w-full">
      <Typography variant={"title"}>Mapa de mesas</Typography>
      <section className="w-full my-3 flex justify-between flex-nowrap">
        <ButtonAdd
          onClick={handleCloseMapOfTables}
          text={"Agregar Mapa de mesas"}
          icon={<MaterialIcon iconName="add" />}
        />
      </section>
      <MapOfTablesList mapOfTablesList={mapOfTables} />
      <Modal
        title={"Nuevo mapa de mesas"}
        isOpen={isOpenMapOfTables}
        handleClose={handleCloseMapOfTables}
      >
        <MapOfTablesInsert handleClose={handleCloseMapOfTables} />
      </Modal>
    </div>
  );
}

const ButtonAdd = ({ onClick, text, icon }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white grow justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {icon} {text}
    </button>
  );
};
