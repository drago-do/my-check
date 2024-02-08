import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Typography from "../../general/Typography";
import InputForm from "../../general/formsElements/InputForm";
import SelectForm from "../../general/formsElements/SelectForm";
import UploadPicture from "../../general/formsElements/UploadPicture";
import UnitMeasure from "../../../utils/UnitsMeasure";
import ButtonFunction from "../../general/ButtonFunction";
import MaterialIcon from "@/components/general/MaterialIcon";

//TODO delete this example list and replace with real data.
import Categories from "../../../utils/Categories";

export default function CategoriesForm({ handleClose, categoriesInfo }) {
  const methods = useForm({ mode: "all" });
  const [loading, setLoading] = useState(false);
  const [categoriesOptions, _] = useState(
    Categories.map((category) => {
      return { value: category._id, label: category.name };
    })
  );
  const onSubmit = (data) => {
    //TODO replace with real data transaction.
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      setLoading(false);
      handleClose();
    }, 3000);
  };

  //!UploadPicture
  const [pictureData, setPictureData] = React.useState(() => {
    const image = methods.getValues("image") || categoriesInfo?.image;
    return image && Object.keys(image).length > 0 ? image : null;
  });

  const handlePictureData = (data) => {
    methods.setValue("image", { ...data });
  };

  useEffect(() => {
    if (categoriesInfo) {
      methods.reset(categoriesInfo);
    } else {
      methods.reset();
    }
  }, [categoriesInfo, methods]);

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <InputForm
        name="name"
        formName="Nombre de la categoría"
        placeholder="Introduce el nombre que tendrá tu categoría."
        required
        errors={methods.formState.errors}
        useFormMethods={methods}
        validators={{
          minLength: {
            value: 3,
            message: "El nombre debe tener al menos 3 caracteres.",
          },
        }}
      />
      <InputForm
        name="description"
        formName="Descripcion de la categoría"
        placeholder="Introduce una lista o descripcion de los productos a encontrar."
        required
        errors={methods.formState.errors}
        useFormMethods={methods}
        validators={{
          minLength: {
            value: 3,
            message: "La descripcion debe tener al menos 3 caracteres.",
          },
        }}
      />

      <div className="flex flex-col-reverse m-2">
        <SelectForm
          name="parent"
          formName="Categoría padre"
          placeholder="Selecciona una categoría padre si aplica."
          errors={methods.formState.errors}
          useFormMethods={methods}
          options={categoriesOptions}
        />
      </div>
      <div className="flex flex-col flex-nowrap items-center md:col-span-3 lg:col-span-4">
        <Typography variant={"subtitle"}>Imagen de la categoría</Typography>
        <UploadPicture
          handlePictureData={handlePictureData}
          pictureData={pictureData}
        />
      </div>
      <div className="w-full flex justify-end lg:col-span-4 md:col-span-3 ">
        <ButtonFunction type="button" variant="red" onClick={handleClose}>
          <MaterialIcon iconName="close" />
          Cancelar
        </ButtonFunction>
        <ButtonFunction type="submit" onLoading={loading}>
          <MaterialIcon iconName="category" />
          Crear nueva categoría
        </ButtonFunction>
      </div>
    </form>
  );
}
