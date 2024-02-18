"use client";
import React, { useState, useEffect } from "react";
import Typography from "../../general/Typography";
import { useForm } from "react-hook-form";
import InputForm from "../../general/formsElements/InputForm";
import UploadPicture from "../../general/formsElements/UploadPicture";
import ButtonFunction from "../../general/ButtonFunction";
import MaterialIcon from "@/components/general/MaterialIcon";

export default function MapOfTablesForm({ handleClose, tableMap }) {
  const methods = useForm({ mode: "all" });
  const [loading, setLoading] = useState(false);

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
    const image = methods.getValues("image") || tableMap?.image;
    return image && Object.keys(image).length > 0 ? image : null;
  });

  const handlePictureData = (data) => {
    methods.setValue("image", { ...data });
  };

  useEffect(() => {
    if (tableMap) {
      methods.reset(tableMap);
    } else {
      methods.reset();
    }
  }, [tableMap, methods]);

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <InputForm
        name="name"
        formName="Nombre del mapa de mesas"
        placeholder="Introduce el nombre que tendrá el lugar."
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
        formName="Descripcion del mapa de mesas"
        placeholder="Puedes incluir mas detalles aquí."
        errors={methods.formState.errors}
        useFormMethods={methods}
        validators={{
          minLength: {
            value: 3,
            message: "La descripcion debe tener al menos 3 caracteres.",
          },
        }}
      />
      <InputForm
        name="totalTables"
        formName="Mesas totales en el mapa"
        placeholder="Introduce el numero de mesas disponibles en este mapa."
        required
        number={true}
        useFormMethods={methods}
        errors={methods.formState.errors}
        validators={{
          min: {
            value: 1,
            message: "El número de mesas debe ser mayor a 0.",
          },
        }}
      />

      <div className="flex flex-col flex-nowrap items-center md:col-span-3 lg:col-span-4">
        <Typography variant={"subtitle"}>Imagen del mapa de mesas</Typography>
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
          <MaterialIcon iconName="table_bar" />
          {`${tableMap ? "Crear nuevo" : "Actualizar"} mapa de mesas`}
        </ButtonFunction>
      </div>
    </form>
  );
}
