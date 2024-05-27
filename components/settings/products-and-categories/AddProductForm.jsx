import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Typography from "../../general/Typography";
import InputForm from "./../../general/formsElements/InputForm";
import SelectForm from "./../../general/formsElements/SelectForm";
import UploadPicture from "./../../general/formsElements/UploadPicture";
import UnitMeasure from "../../../utils/UnitsMeasure";
import ButtonFunction from "../../general/ButtonFunction";
import MaterialIcon from "@/components/general/MaterialIcon";
import useCategories from "./../../../hooks/useCategories";
import FullScreenLoader from "../../general/FullScreenLoader";
import { DevTool } from "@hookform/devtools";
import Badge from "../../general/Badge";
import { toast } from "sonner";
import useProducts from "@/hooks/useProducts";

export default function ProductForm({ handleClose, productInfo }) {
  const methods = useForm({ mode: "all" });
  const { categories, categoriesError, categoriesIsLoading } = useCategories();
  const { createProduct, updateProduct } = useProducts();
  const [loading, setLoading] = useState(false);
  const [unitMeasureArray, setUnitMeasureArray] = useState([]);

  const onSubmit = (data) => {
    setLoading(true);
    if (!unitMeasureArray.length > 0) {
      toast.error("Todos los campos son requeridos", {
        description: "Por favor llena todos los campos para agregar un tamaño.",
      });
      setLoading(false);
      return;
    } else {
      data.UnitMeasurementAndPrice = unitMeasureArray;
    }
    if (productInfo) {
      updateProduct(productInfo._id, data)
        .then(() => {
          setLoading(false);
          handleClose();
        })
        .catch(() => setLoading(false));
    } else {
      createProduct(data)
        .then(() => {
          setLoading(false);
          handleClose();
        })
        .catch(() => setLoading(false));
    }
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
      setUnitMeasureArray(productInfo.UnitMeasurementAndPrice);
    } else {
      methods.reset();
    }
  }, [productInfo, methods]);

  const addUnitMeasure = () => {
    //Obtener los valores de los inputs de cantidad y unidad de medida
    const size = methods.getValues("size");
    const UnitMeasurement = methods.getValues("UnitMeasurement");
    const price = methods.getValues("price");
    //Verificar que los valores no estén vacíos
    if (size > 0 && UnitMeasurement !== "" && price > 0) {
      //Verifica que los valores no existan ya en el array
      const exist = unitMeasureArray.find(
        (unitMeasure) =>
          unitMeasure.size === size &&
          unitMeasure.UnitMeasurement === UnitMeasurement &&
          unitMeasure.price === price
      );
      if (exist) {
        toast.error("El tamaño ya existe", {
          description:
            "El tamaño que intentas agregar ya existe en la lista de tamaños.",
        });
        return;
      }
      const newUnitMeasure = {
        size,
        UnitMeasurement,
        price,
      };
      //Agregar los valores al array de medidas
      setUnitMeasureArray([...unitMeasureArray, newUnitMeasure]);
    } else {
      toast.error("Todos los campos son requeridos", {
        description: "Por favor llena todos los campos para agregar un tamaño.",
      });
    }
  };

  const deleteUnitMeasure = (index) => {
    const newArray = unitMeasureArray.filter((_, i) => i !== index);
    setUnitMeasureArray(newArray);
  };

  if (categoriesIsLoading) {
    return <FullScreenLoader />;
  }

  if (categoriesError) {
    return (
      <div className="w-full flex flex-col flex-nowrap justify-center dark:bg-gray-700 rounded-md">
        <MaterialIcon
          iconName="error"
          className="text-8xl text-center"
          fontSize={55}
        />
        <Typography variant="p" className="text-center">
          Error al cargar las categorías
        </Typography>
      </div>
    );
  }

  return (
    <>
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
              message:
                "El nombre del producto debe tener al menos 3 caracteres.",
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

        {/* <InputForm
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
      /> */}

        <div className="flex flex-col flex-nowrap md:col-span-4">
          <Typography variant={"subtitle"}>Tamaño de producto</Typography>
          {
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-stretch items-center">
              {(unitMeasureArray &&
                unitMeasureArray.length > 0 &&
                unitMeasureArray.map((unitMeasure, index) => (
                  <Badge
                    className="my-2 w-full justify-between px-3"
                    icon={<MaterialIcon iconName="fastfood" />}
                    color="green"
                    large
                    key={index}
                    onDelete={() => deleteUnitMeasure(index)}
                  >
                    <div className="w-full text-center">
                      {`Cantidad: ${unitMeasure.size} ${unitMeasure.UnitMeasurement} por,  Precio: $${unitMeasure.price}`}
                    </div>
                  </Badge>
                ))) || <Typography variant={"p"}>No hay tamaños</Typography>}
            </ul>
          }
          <Typography variant={"subtitle"}>Agregar nuevo tamaño</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-stretch items-center">
            <InputForm
              name="size"
              formName="Cantidad"
              placeholder="Introduce la cantidad en la que vendes el producto."
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
              name="UnitMeasurement"
              formName="Unidad de medida"
              placeholder="Selecciona la unidad de medida."
              errors={methods.formState.errors}
              useFormMethods={methods}
              options={UnitMeasure}
            />
            <InputForm
              name="price"
              formName="Precio del producto"
              placeholder="Introduce el precio en formato numérico."
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
            <ButtonFunction
              type="button"
              variant="blue"
              onClick={addUnitMeasure}
            >
              <MaterialIcon iconName="add" />
              Agregar tamaño
            </ButtonFunction>
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
            options={
              categories &&
              categories?.map((category) => ({
                value: category._id,
                label: category.name,
              }))
            }
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
      <DevTool control={methods.control} /> {/* set up the dev tool */}
    </>
  );
}
