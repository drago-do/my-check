import React, { useState, useEffect } from "react";
import Typography from "../general/Typography";
import ImageViewer from "../general/ImageViewer";
import ButtonFunction from "../general/ButtonFunction";
import MaterialIcon from "../general/MaterialIcon";
import Badge from "../general/Badge";
import { toast } from "sonner";

import useActualOrder from "./../../hooks/useActualOrder";

export default function Product({ product }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  const { addProduct } = useActualOrder();

  const handleClickAddProduct = (e, product, unit = null) => {
    e.stopPropagation();
    addProduct({
      product: {
        id: product?.id,
        name: product?.name,
        image: product?.image,
      },
      addedAT: new Date().toISOString(),
      deliver: false,
      paid: false,
      comments: "",
      addedBy: { _id: "3", username: "carlosmartinez" },
      UnitMeasurementAndPrice: unit
        ? unit
        : product?.UnitMeasurementAndPrice[0],
    });
    toast.success("Producto agregado", {
      description: `${product?.name} fue agregado de la orden actual`,
    });
  };

  useEffect(() => {
    setIsAvailable(parseInt(product?.units) >= 1);
  }, [product]);

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
            "max-w-16 max-h-16 min-h-16 min-w-16 rounded-xl object-cover object-center border-4 border-gray-200 dark:border-gray-700"
          }
          alt="Product Image"
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
            <Badge color={isAvailable ? "green" : "red"}>
              {isAvailable ? "Disponible" : "Terminado"}
            </Badge>
          </div>
        </div>
        {isAvailable &&
        product &&
        product?.UnitMeasurementAndPrice.length === 1 ? (
          <ButtonFunction
            animateButton
            variant="alternative"
            onClick={(e) => handleClickAddProduct(e, product)}
          >
            <MaterialIcon iconName="playlist_add" />
          </ButtonFunction>
        ) : null}
      </div>
      <div>
        {isExpanded && product?.UnitMeasurementAndPrice.length !== 1 ? (
          <ListOfSizeOfProducts
            product={product}
            onClick={handleClickAddProduct}
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
            onClick={(e) => onClick(e, product, unit)}
            icon={<MaterialIcon iconName="playlist_add" />}
          >
            {unit?.size} {unit?.UnitMeasurement} ${unit?.price}
          </Badge>
        ))}
      </div>
    </div>
  );
};
