"use client";
import React, { useState, useEffect } from "react";
import ModalCRUD from "@/components/general/Modal";
import { useForm } from "react-hook-form";

import InputForm from "@/components/general/formsElements/InputForm";
import UploadPicture from "../../components/general/formsElements/UploadPicture";
import SelectForm from "@/components/general/formsElements/SelectForm";
import ButtonFunction from "@/components/general/ButtonFunction";

import UserList from "@/components/settings/users/UserList";
import UserJSON from "./../../utils/UserJSON";
import UserForm from "@/components/settings/users/UserForm";

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
        <UserList userList={UserJSON} />
      </section>
      <ModalCRUD title={"Test"} isOpen={showModal} handleClose={handleModal}>
        <UserForm handleClose={handleModal} />
      </ModalCRUD>
    </div>
  );
}
