import React, { useState } from "react";
import Typography from "../general/Typography";
import ImageViewer from "../general/ImageViewer";
import ButtonFunction from "../general/ButtonFunction";
import MaterialIcon from "../general/MaterialIcon";
import Badge from "../general/Badge";

export default function Product({ product }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInternalClick = (e) => {
    e.stopPropagation();
    console.log("Internal click");
  };

  return (
    <div
      className={`place-self-center w-full rounded-lg shadow-lg overflow-hidden border p-2 bg-white  border-gray-200 ${
        isExpanded ? "dark:hover:bg-gray-900" : ""
      } dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-nowrap justify-between items-start">
        <ImageViewer
          fotoData={product.image}
          className={
            "max-w-16 max-h-16 rounded-xl object-cover object-center border-4 border-gray-200 dark:border-gray-700"
          }
        />
        <div className="flex flex-nowrap flex-col overflow-hidden px-3 flex-grow">
          <Typography variant="subtitle2">{product?.name}</Typography>
          <Typography
            variant="caption"
            className={`${
              isExpanded
                ? ""
                : "overflow-hidden whitespace-nowrap overflow-ellipsis"
            }`}
          >
            {product?.description}
          </Typography>
          <div className="flex flex-nowrap justify-between overflow-hidden">
            <Badge color={parseInt(product?.units) >= 1 ? "green" : "red"}>
              {parseInt(product?.units) >= 1 ? "Disponible" : "Terminado"}
            </Badge>
          </div>
        </div>
        {product && product?.UnitMeasurementAndPrice.length === 1 ? (
          <ButtonFunction variant="alternative" onClick={handleInternalClick}>
            <MaterialIcon iconName="playlist_add" />
          </ButtonFunction>
        ) : null}
      </div>
      <div className="z-20">
        {isExpanded && product?.UnitMeasurementAndPrice.length !== 1 ? (
          <ListOfSizeOfProducts
            product={product}
            onClick={handleInternalClick}
          />
        ) : null}
      </div>
    </div>
  );
}

const ListOfSizeOfProducts = ({ product, onClick }) => {
  return (
    <div className="flex flex-col flex-nowrap justify-between items-start">
      <Typography variant="p" className="text-gray-500 dark:text-gray-400">
        {product?.UnitMeasurementAndPrice?.length} Presentaciones
      </Typography>
      <div className="flex flex-wrap justify-around p-1">
        {product?.UnitMeasurementAndPrice.map((unit, index) => (
          <Badge
            className={"my-2"}
            color="blue"
            key={index}
            onClick={onClick}
            icon={<MaterialIcon iconName="playlist_add" />}
          >
            {unit?.size} {unit?.UnitMeasurement} ${unit?.price}
          </Badge>
        ))}
      </div>
    </div>
  );
};
