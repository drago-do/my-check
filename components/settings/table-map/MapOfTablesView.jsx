import React from "react";
import MaterialIcons from "../../general/MaterialIcon";
import ButtonFunction from "../../general/ButtonFunction";
import ImageViewer from "../../general/ImageViewer";
export default function DeleteCategoryForm({ handleClose, tableMap }) {
  return (
    <div className="flex flex-col flex-nowrap items-center">
      <MaterialIcons iconName="delete" />

      <ImageViewer
        fotoData={tableMap.image}
        className="rounded-lg my-3 max-w-64"
      />
      <div className="flex flex-nowrap max-w-96">
        <ButtonFunction type="button" variant="light" onClick={handleClose}>
          Salir
        </ButtonFunction>
      </div>
    </div>
  );
}
