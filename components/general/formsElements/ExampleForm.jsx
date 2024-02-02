import React from "react";
import { useForm } from "react-hook-form";

import InputForm from "./InputForm";
import UploadPicture from "./UploadPicture";

export default function ExampleForm() {
  const methods = useForm({ mode: "all" });

  //!UploadPicture
  const [pictureData, setPictureData] = React.useState(() => {
    const foto = methods.getValues("foto");
    return foto && Object.keys(foto).length > 0 ? foto : null;
  });

  const handlePictureData = (data) => {
    methods.setValue("foto", { ...data });
  };

  const onSubmit = (data) => {
    // Aquí ocurre la recompilacion de los datos del formulario
    console.log(data);
  };
  return (
    <div>
      <p>Esto es un formulario</p>
      {/* Formulario */}
      <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
        <InputForm
          name="nombre"
          formName="Texto"
          placeholder="Introduce tu nombre"
          required
          useFormMethods={methods}
          errors={methods.formState.errors}
        />
        <InputForm
          name="number"
          formName="Numero"
          placeholder="Introduce tu number"
          required
          number={true}
          useFormMethods={methods}
          errors={methods.formState.errors}
        />
        <InputForm
          name="email"
          formName="Correo"
          placeholder="Introduce tu correo"
          required
          useFormMethods={methods}
          errors={methods.formState.errors}
          validators={{
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "El correo no es valido.",
            },
          }}
        />
        <UploadPicture
          handlePictureData={handlePictureData}
          pictureData={pictureData}
        />
        <button type="submit">Listo</button>
      </form>
    </div>
  );
}
