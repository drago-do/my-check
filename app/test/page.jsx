"use client";
import React, { useState, useEffect } from "react";
import ModalCRUD from "@/components/general/ModalCRUD";
import { useForm } from "react-hook-form";

import InputForm from "@/components/general/formsElements/InputForm";
import UploadPicture from "../../components/general/formsElements/UploadPicture";
import SelectForm from "@/components/general/formsElements/SelectForm";
import ButtonFunction from "@/components/general/ButtonFunction";

import UserList from "@/components/settings/users/UserList";

export default function Test() {
  const methods = useForm({ mode: "all" });

  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);

  const onSubmit = (data) => {
    console.log(data);
  };

  //!UploadPicture
  const [pictureData, setPictureData] = React.useState(() => {
    const foto = methods.getValues("foto");
    return foto && Object.keys(foto).length > 0 ? foto : null;
  });

  const handlePictureData = (data) => {
    methods.setValue("foto", { ...data });
  };

  const countries = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "FR", label: "France" },
    { value: "DE", label: "Germany" },
  ];

  return (
    <div>
      Pagina de pruebas
      <section>
        <button onClick={handleModal}>hola dmaskfda</button>
        <UserList />
      </section>
      <ModalCRUD title={"Test"} isOpen={showModal} handleClose={handleModal}>
        Esto es un modal
        <div className=" flex justify-between">
          <form
            noValidate
            onSubmit={methods.handleSubmit(onSubmit)}
            className="w-full"
          >
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
              name="number"
              formName="Numero"
              placeholder="Introduce tu number"
              number={true}
              useFormMethods={methods}
              errors={methods.formState.errors}
            />
            <InputForm
              name="number"
              formName="Numero"
              placeholder="Introduce tu number"
              number={true}
              useFormMethods={methods}
              errors={methods.formState.errors}
            />
            <InputForm
              name="number"
              formName="Numero"
              placeholder="Introduce tu number"
              number={true}
              useFormMethods={methods}
              errors={methods.formState.errors}
            />
            <InputForm
              name="number"
              formName="Numero"
              placeholder="Introduce tu number"
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
            <SelectForm
              name="Países"
              formName="countries"
              placeholder="Selecciona un país"
              required
              options={countries}
              errors={methods.formState.errors}
              useFormMethods={methods}
            />
            <ButtonFunction type="submit" variant="green">
              Subir
            </ButtonFunction>
          </form>
        </div>
      </ModalCRUD>
    </div>
  );
}
