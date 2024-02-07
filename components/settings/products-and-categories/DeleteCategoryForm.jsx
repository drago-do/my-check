import React, { useState } from "react";
import MaterialIcons from "../../general/MaterialIcon";
import Typography from "../../general/Typography";
import ButtonFunction from "../../general/ButtonFunction";
import ImageViewer from "../../general/ImageViewer";
export default function DeleteCategoryForm({ handleClose, categoriesInfo }) {
  const [loading, setLoading] = useState(false);
  const handleDelete = () => {
    //TODO realizar eliminado
    setLoading(true);
    setTimeout(() => {
      console.log("Eliminado");
      setLoading(false);
      handleClose();
    }, 2000);
  };

  return (
    <div className="flex flex-col flex-nowrap items-center">
      <MaterialIcons iconName="delete" />
      <Typography>
        ¿Estas seguro que deseas eliminar {categoriesInfo.name}?
      </Typography>
      <ImageViewer
        fotoData={categoriesInfo.image}
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
