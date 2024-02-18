import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Typography from "../../general/Typography";
import SelectForm from "../../general/formsElements/SelectForm";
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
      handleClose();
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
      className="flex flex-col flex-nowrap "
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <Typography variant={"subtitle"}>Selecciona el nuevo rol</Typography>
      <SelectForm
        name="role"
        formName="Rol de usuario"
        placeholder="Selecciona un rol para el usuario"
        errors={methods.formState.errors}
        useFormMethods={methods}
        options={rolesOptions}
        required
      />

      <div className="w-full flex justify-end lg:col-span-4 md:col-span-3 ">
        <ButtonFunction type="button" variant="red" onClick={handleClose}>
          <MaterialIcon iconName="close" />
          Cancelar
        </ButtonFunction>
        <ButtonFunction type="submit" onLoading={loading}>
          <MaterialIcon iconName="admin_panel_settings" />
          Actualizar rol
        </ButtonFunction>
      </div>
    </form>
  );
}
