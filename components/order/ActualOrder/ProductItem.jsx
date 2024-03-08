"use client";
import React, { useState } from "react";
import Typography from "../../general/Typography";
import ImageViewer from "../../general/ImageViewer";
import ButtonFunction from "../../general/ButtonFunction";
import MaterialIcon from "../../general/MaterialIcon";
import Badge from "../../general/Badge";
import obtenerHoraDesdeISO8601 from "../../../utils/ConvertDateTime";
import Modal from "./../../general/Modal";

export default function Product({ product }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openDeleteProduct, setOpenDeleteProduct] = useState(false);
  const addedAt = obtenerHoraDesdeISO8601(product?.addedAT);

  const handleInternalClick = (e) => {
    e.stopPropagation();
    console.log("Internal click");
  };

  const handleDeleteProduct = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setOpenDeleteProduct(!openDeleteProduct);
  };

  return (
    <>
      <div
        className={`place-self-center w-full rounded-lg shadow-lg overflow-hidden border p-2 bg-white  border-gray-200 ${
          isExpanded ? "dark:hover:bg-gray-900" : ""
        } dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-nowrap justify-between items-start">
          <ImageViewer
            fotoData={product?.product?.image}
            className={
              "max-w-16 max-h-16 min-h-16 min-w-16 rounded-xl object-cover object-center border-4 border-gray-200 dark:border-gray-700"
            }
          />
          <div className="flex flex-nowrap flex-col overflow-hidden px-3 flex-grow">
            <Typography variant="subtitle2">
              {product?.product?.name}
            </Typography>
            <Typography
              variant="caption"
              className={`${
                isExpanded
                  ? ""
                  : "overflow-hidden whitespace-nowrap overflow-ellipsis"
              }`}
            >
              {`Tamaño : ${product?.UnitMeasurementAndPrice?.size} ${product?.UnitMeasurementAndPrice?.UnitMeasurement} - $${product?.UnitMeasurementAndPrice?.price} `}
            </Typography>
            <div className="flex flex-nowrap justify-between overflow-hidden">
              <Badge color={product?.deliver ? "yellow" : "red"}>
                {product?.deliver ? "Entregado" : "Pendiente"}
              </Badge>
              <Badge color={product?.paid ? "green" : "red"}>
                {product?.paid ? "Pagado" : "Debe"}
              </Badge>
            </div>
          </div>
          <ButtonFunction
            animateButton
            variant="red"
            onClick={handleDeleteProduct}
          >
            <MaterialIcon iconName="delete" />
          </ButtonFunction>
        </div>
        <div className="z-20">
          {isExpanded ? (
            <MoreInformation
              addedAt={addedAt}
              addedBy={product?.addedBy?.username}
              comments={product?.comments}
            />
          ) : null}
        </div>
      </div>
      <Modal
        title={"Eliminar producto"}
        isOpen={openDeleteProduct}
        handleClose={handleDeleteProduct}
      ></Modal>
    </>
  );
}

const MoreInformation = ({ addedAt, comments, addedBy }) => {
  return (
    <div className="flex flex-col flex-nowrap justify-between items-start">
      <Typography variant="p" className="text-gray-500 dark:text-gray-400">
        Comentarios adicionales:
      </Typography>
      <Typography
        variant="caption"
        className="text-gray-600 dark:text-gray-300"
      >
        {comments ? comments : "Sin comentarios"}
      </Typography>
      <div className="flex flex-nowrap justify-between w-full">
        <Typography variant="p" className="text-gray-500 dark:text-gray-400">
          Agregado a las: {addedAt}
        </Typography>
        <div>
          <Badge color="blue"> {addedBy}</Badge>
        </div>
      </div>
    </div>
  );
};
