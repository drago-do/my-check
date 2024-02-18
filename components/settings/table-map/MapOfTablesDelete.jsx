import React, { useState } from "react";
import MaterialIcons from "../../general/MaterialIcon";
import Typography from "../../general/Typography";
import ButtonFunction from "../../general/ButtonFunction";
import ImageViewer from "../../general/ImageViewer";

export default function MapOfTablesDelete({ handleClose, tableMap }) {
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
        ¿Estas seguro que deseas eliminar a {tableMap.name}?
      </Typography>

      <ImageViewer
        fotoData={tableMap.image}
        className="rounded-lg my-3 max-w-64"
      />
      <div className="flex flex-nowrap max-w-80">
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
