import React, { useState } from "react";
import MaterialIcons from "./../../general/MaterialIcon";
import Typography from "./../../general/Typography";
import ButtonFunction from "./../../general/ButtonFunction";
import ImageViewer from "./../../general/ImageViewer";
import useProducts from "@/hooks/useProducts";
export default function DeleteProductForm({ handleClose, productInfo }) {
  const { deleteProduct } = useProducts();
  const [loading, setLoading] = useState(false);
  const handleDelete = () => {
    setLoading(true);
    deleteProduct(productInfo._id)
      .then(() => {
        setLoading(false);
        handleClose();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col flex-nowrap items-center">
      <MaterialIcons iconName="delete" />
      <Typography>
        ¿Estas seguro que deseas eliminar {productInfo.name}?
      </Typography>
      <ImageViewer
        fotoData={productInfo.image}
        className="rounded-lg my-3"
        alt={productInfo.name}
      />
      <div className="flex flex-nowrap">
        <ButtonFunction type="button" variant="light" onClick={handleClose}>
          No, cancelar
        </ButtonFunction>
        <ButtonFunction
          onLoading={loading}
          type="button"
          variant="red"
          onClick={handleDelete}
        >
          <MaterialIcons iconName="delete" /> Si, eliminar
        </ButtonFunction>
      </div>
    </div>
  );
}
