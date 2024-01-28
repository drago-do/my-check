import React from "react";
import { useForm } from "react-hook-form";

import InputForm from "./InputForm";

export default function ExampleForm() {
  const methods = useForm({ mode: "all" });

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
          formName="Nombre"
          placeholder="Introduce tu nombre"
          required
          useFormMethods={methods}
          errors={methods.formState.errors}
        />
        <InputForm />
        <button type="submit">Listo</button>
      </form>
    </div>
  );
}
