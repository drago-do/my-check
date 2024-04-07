import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Typography from "./../general/Typography";
import InputForm from "./../general/formsElements/InputForm";
import UploadPicture from "./../general/formsElements/UploadPicture";
import ButtonFunction from "./../general/ButtonFunction";
import MaterialIcon from "@/components/general/MaterialIcon";

import { useRouter } from "next/navigation";

import useActualUser from "./../../hooks/useActualUser";

export default function RegisterForm({
  email,
  firstName,
  lastName,
  imageUser,
}) {
  const { createNewUser } = useActualUser();
  const { push } = useRouter();
  const methods = useForm({ mode: "all" });
  methods.register("email", { value: email, required: true });
  methods.register("firstName", { value: firstName, required: true });
  methods.register("lastName", { value: lastName, required: true });
  methods.register("image", { value: imageUser, required: true });
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    createNewUser(data)
      .then(() => {
        push("/");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  //!UploadPicture
  const [pictureData, setPictureData] = React.useState(() => {
    const image = methods.getValues("image") || imageUser;
    return image && Object.keys(image).length > 0 ? image : null;
  });

  const handlePictureData = (data) => {
    methods.setValue("image", { ...data });
  };

  return (
    <form
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <InputForm
        name="firstName"
        formName="Nombre o nombres"
        placeholder="Introduce tu nombre o nombres"
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
        name="lastName"
        formName="Apellidos"
        placeholder="Introduce tus apellidos."
        required
        errors={methods.formState.errors}
        useFormMethods={methods}
        validators={{
          minLength: {
            value: 3,
            message: "Este campo debe tener al menos 3 caracteres.",
          },
        }}
      />
      <div className="flex flex-col flex-nowrap">
        <InputForm
          name="email"
          formName="Correo electrónico"
          placeholder="Introduce su correo"
          required
          useFormMethods={methods}
          extraProperties={{ readOnly: true, disabled: true }}
          errors={methods.formState.errors}
          validators={{
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "El correo no es valido.",
            },
          }}
        />
        <Typography variant={"caption"} className={"px-5 w-auto"}>
          {`El correo electrónico no se puede modificar. Si esta no es la cuenta con la que deseas registrarte, por favor inicia sesión con la cuenta correcta.`}
        </Typography>
      </div>
      <div className="flex flex-col flex-nowrap">
        <InputForm
          name="username"
          formName="Nombre corto para el usuario"
          placeholder="Este nombre se vera en el sistema."
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
        <Typography variant={"caption"} className={"px-5"}>
          Este nombre se usuaria para autenticar en sesiones compartidas.
        </Typography>
      </div>
      <div className="flex flex-col flex-nowrap">
        <InputForm
          name="password"
          formName="Pin de acceso"
          placeholder="Introduce un pin de acceso de 4 dígitos."
          required
          number={true}
          useFormMethods={methods}
          errors={methods.formState.errors}
          validators={{
            minLength: {
              value: 4,
              message: "El pin debe tener al menos 4 dígitos.",
            },
            maxLength: {
              value: 4,
              message: "El pin debe tener máximo 4 dígitos.",
            },
          }}
        />
        <Typography variant={"caption"} className={"px-5"}>
          Este pin se usuaria para autenticar en sesiones compartidas.
        </Typography>
      </div>
      <div className="flex flex-col flex-nowrap items-center md:col-span-3 lg:col-span-4">
        <Typography variant={"subtitle"}>Imagen de usuario</Typography>
        <UploadPicture
          handlePictureData={handlePictureData}
          pictureData={pictureData}
        />
      </div>

      <div className="w-full flex justify-end lg:col-span-4 md:col-span-3 mb-8">
        <ButtonFunction type="submit" onLoading={loading} className="py-3">
          <MaterialIcon iconName="person_add" />
          Registrarme
        </ButtonFunction>
      </div>
    </form>
  );
}
