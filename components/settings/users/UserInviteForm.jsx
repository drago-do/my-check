import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Typography from "../../general/Typography";
import InputForm from "../../general/formsElements/InputForm";
import SelectForm from "../../general/formsElements/SelectForm";
import UploadPicture from "../../general/formsElements/UploadPicture";
import ButtonFunction from "../../general/ButtonFunction";
import MaterialIcon from "@/components/general/MaterialIcon";
import useActualBusiness from "@/hooks/useBusiness";
//TODO delete this example list and replace with real data.
import RoleJSON from "../../../utils/RoleJSON";

export default function UserInviteForm({ handleClose }) {
  const { sendInvitationToActualBusiness } = useActualBusiness();
  const methods = useForm({ mode: "all" });
  const [loading, setLoading] = useState(false);
  const [rolesOptions, _] = useState(
    RoleJSON.map((role) => {
      return { value: role.value, label: role.label };
    })
  );
  const onSubmit = (data) => {
    setLoading(true);
    sendInvitationToActualBusiness(data.invitedUser)
      .then(() => {
        setLoading(false);
        handleClose();
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        handleClose();
      });
  };

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <InputForm
        name="invitedUser.email"
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

      <SelectForm
        name="invitedUser.role"
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
          Invitar usuario
        </ButtonFunction>
      </div>
    </form>
  );
}
