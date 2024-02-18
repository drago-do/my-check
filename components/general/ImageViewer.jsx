import Image from "next/image";
import React from "react";

const ImageViewer = ({ fotoData, className }) => {
  return (
    <Image
      className={className}
      src={
        fotoData.url
          ? fotoData.link
          : `data:${fotoData.contentType};base64, ${fotoData.data}`
      }
      alt="Selected image"
      width={200}
      height={200}
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
    />
  );
};

export default ImageViewer;
