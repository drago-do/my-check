import React, { useState } from "react";
import MaterialIcons from "../../general/MaterialIcon";
import Typography from "../../general/Typography";
import ButtonFunction from "../../general/ButtonFunction";
import ImageViewer from "../../general/ImageViewer";
import useCategories from "../../../hooks/useCategories";
export default function DeleteCategoryForm({ handleClose, categoriesInfo }) {
  const { deleteCategory } = useCategories();
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    deleteCategory(categoriesInfo._id)
      .then(() => {
        setLoading(false);
        handleClose();
      })
      .catch(() => {
        setLoading(false);
        handleClose();
      });
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
