"use client";
import React, { useEffect } from "react";
import Typography from "@/components/general/Typography";
import UploadPicture from "@/components/general/formsElements/UploadPicture";
import { useForm } from "react-hook-form";

export default function Test() {
  const methods = useForm({ mode: "all" });
  //!UploadPicture
  const [pictureData, setPictureData] = React.useState(() => {
    const image = methods.getValues("image");
    return image && Object.keys(image).length > 0 ? image : null;
  });

  const handlePictureData = (data) => {
    console.log(data);
    methods.setValue("image", { ...data });
  };

  return (
    <>
      <p>Test</p>
      <div className="flex flex-col flex-nowrap items-center md:col-span-3 lg:col-span-4">
        <Typography variant={"subtitle"}>Imagen de usuario</Typography>
        <UploadPicture
          handlePictureData={handlePictureData}
          pictureData={pictureData}
        />
      </div>
    </>
  );
}
