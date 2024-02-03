import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Typography from "../../general/Typography";
import InputForm from "./../../general/formsElements/InputForm";
import SelectForm from "./../../general/formsElements/SelectForm";
import UploadPicture from "./../../general/formsElements/UploadPicture";
import UnitMeasure from "../../../utils/UnitsMeasure";
import ButtonFunction from "../../general/ButtonFunction";
import MaterialIcon from "@/components/general/MaterialIcon";

//TODO delete this example list and replace with real data.
const categoryOptions = [
  {
    value: "63acbba13bd411f44a60d04f",
    label: "Cerveza",
  },
  {
    value: "63acbba13bd411f44a60d04g",
    label: "Vodka",
    description: "Pitufo, Anticongelante",
  },
  {
    value: "63acbba13bd411f44a60d04h",
    label: "Tequila",
  },
];

export default function ProductForm({ handleClose, productInfo }) {
  const methods = useForm({ mode: "all" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      setLoading(false);
      handleClose();
    }, 3000);
  };

  //!UploadPicture
  const [pictureData, setPictureData] = React.useState(() => {
    const image = methods.getValues("image") || productInfo?.image;
    return image && Object.keys(image).length > 0 ? image : null;
  });

  const handlePictureData = (data) => {
    methods.setValue("image", { ...data });
  };

  useEffect(() => {
    if (productInfo) {
      methods.reset(productInfo);
    } else {
      methods.reset();
    }
  }, [productInfo, methods]);

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <InputForm
        name="name"
        formName="Nombre del producto"
        placeholder="Introduce el nombre del producto."
        required
        errors={methods.formState.errors}
        useFormMethods={methods}
        validators={{
          minLength: {
            value: 3,
            message: "El nombre del producto debe tener al menos 3 caracteres.",
          },
        }}
      />
      <InputForm
        name="description"
        formName="Descripcion del producto"
        placeholder="Introduce una descripcion corta."
        required
        errors={methods.formState.errors}
        useFormMethods={methods}
        validators={{
          minLength: {
            value: 3,
            message:
              "La descripcion del producto debe tener al menos 3 caracteres.",
          },
        }}
      />

      <InputForm
        name="units"
        formName="Unidades"
        placeholder="Introduce el número de unidades."
        required
        number
        errors={methods.formState.errors}
        useFormMethods={methods}
        validators={{
          minLength: {
            value: 1,
            message: "El número de unidades es requerido.",
          },
        }}
      />

      <div className="flex flex-col flex-nowrap md:col-span-3">
        <Typography variant={"subtitle"}>Tamaño de producto</Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-stretch items-center">
          <InputForm
            name="UnitMeasurementAndPrice.size"
            formName="Cantidad"
            placeholder="Introduce la cantidad en la que vendes el producto."
            required
            number
            errors={methods.formState.errors}
            useFormMethods={methods}
            validators={{
              minLength: {
                value: 1,
                message: "El número de unidades es requerido.",
              },
            }}
          />
          <SelectForm
            name="UnitMeasurementAndPrice.UnitMeasurement"
            formName="Unidad de medida"
            placeholder="Selecciona la unidad de medida."
            required
            errors={methods.formState.errors}
            useFormMethods={methods}
            options={UnitMeasure}
          />
          <InputForm
            name="UnitMeasurementAndPrice.price"
            formName="Precio del producto"
            placeholder="Introduce el precio en formato numérico."
            required
            number
            errors={methods.formState.errors}
            useFormMethods={methods}
            validators={{
              minLength: {
                value: 1,
                message: "El precio del producto es requerido.",
              },
            }}
          />
        </div>
      </div>
      <div className="flex flex-col-reverse m-2">
        <SelectForm
          name="category"
          formName="Categoría"
          placeholder="Selecciona una categoría."
          required
          errors={methods.formState.errors}
          useFormMethods={methods}
          options={categoryOptions}
        />
      </div>
      <div className="flex flex-col flex-nowrap items-center md:col-span-3 lg:col-span-4">
        <Typography variant={"subtitle"}>Imagen de producto</Typography>
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
          <MaterialIcon iconName="fastfood" />
          Crear nuevo producto
        </ButtonFunction>
      </div>
    </form>
  );
}
