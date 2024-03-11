import React, { useState } from "react";
import MaterialIcons from "../../general/MaterialIcon";
import Typography from "../../general/Typography";
import ButtonFunction from "../../general/ButtonFunction";
import ImageViewer from "../../general/ImageViewer";
import { toast } from "sonner";
import useActualOrder from "./../../../hooks/useActualOrder";

export default function DeleteItem({ handleClose, product }) {
  const [loading, setLoading] = useState(false);
  const { deleteProduct } = useActualOrder();

  const handleDelete = () => {
    setLoading(true);
    //Verifica si el producto no fue entregado ni pagado
    if (!product?.deliver && !product?.paid) {
      toast.error("Producto eliminado", {
        description: `${product?.product?.name} fue eliminado de la orden actual`,
      });
      deleteProduct(product?.addedAT);
      setLoading(false);
    } else {
      toast.error("Producto no eliminado", {
        description: `El producto ${product?.product?.name} no puede ser eliminado, ya que fue entregado o pagado`,
      });
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-nowrap items-center">
      <MaterialIcons iconName="delete" />
      <Typography>
        ¿Estas seguro que deseas eliminar {product?.product?.name}?
      </Typography>
      <ImageViewer
        fotoData={product?.product?.image}
        className="rounded-lg my-3"
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
