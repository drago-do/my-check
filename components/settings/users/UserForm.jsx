import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Typography from "../../general/Typography";
import InputForm from "../../general/formsElements/InputForm";
import SelectForm from "../../general/formsElements/SelectForm";
import UploadPicture from "../../general/formsElements/UploadPicture";
import ButtonFunction from "../../general/ButtonFunction";
import MaterialIcon from "@/components/general/MaterialIcon";

//TODO delete this example list and replace with real data.
import RoleJSON from "../../../utils/RoleJSON";

export default function UserForm({ handleClose, userInfo }) {
  const methods = useForm({ mode: "all" });
  const [loading, setLoading] = useState(false);
  const [rolesOptions, _] = useState(
    RoleJSON.map((role) => {
      return { value: role.value, label: role.label };
    })
  );
  const onSubmit = (data) => {
    console.log("Se activo el submit");
    //TODO replace with real data transaction.
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      setLoading(false);
      // handleClose();
    }, 3000);
  };

  //!UploadPicture
  const [pictureData, setPictureData] = React.useState(() => {
    const image = methods.getValues("image") || userInfo?.image;
    return image && Object.keys(image).length > 0 ? image : null;
  });

  const handlePictureData = (data) => {
    methods.setValue("image", { ...data });
  };

  useEffect(() => {
    if (userInfo) {
      methods.reset(userInfo);
    } else {
      methods.reset();
    }
  }, [userInfo, methods]);

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <InputForm
        name="firstName"
        formName="Nombre del usuario"
        placeholder="Introduce el o los nombres del usuario."
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
        formName="Apellido del usuario"
        placeholder="Introduce el o los apellidos del usuario."
        required
        errors={methods.formState.errors}
        useFormMethods={methods}
        validators={{
          minLength: {
            value: 3,
            message: "El apellido debe tener al menos 3 caracteres.",
          },
        }}
      />
      <InputForm
        name="email"
        formName="Correo del usuario"
        placeholder="Introduce su correo"
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
      <SelectForm
        name="role"
        formName="Rol de usuario"
        placeholder="Selecciona un rol para el usuario"
        errors={methods.formState.errors}
        useFormMethods={methods}
        options={rolesOptions}
        required
      />

      <div className="flex flex-col flex-nowrap items-center md:col-span-3 lg:col-span-4">
        <Typography variant={"subtitle"}>Imagen de usuario</Typography>
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
          <MaterialIcon iconName="admin_panel_settings" />
          {`${userInfo ? "Actualizar" : "Crear nuevo"}  usuario`}
        </ButtonFunction>
      </div>
    </form>
  );
}
