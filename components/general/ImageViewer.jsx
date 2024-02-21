import Image from "next/image";
import React from "react";

const ImageViewer = ({ fotoData, className }) => {
  return (
    <Image
      className={className}
      src={
        fotoData
          ? fotoData.url
            ? fotoData.link
            : `data:${fotoData.contentType};base64, ${fotoData.data}`
          : "/404.png"
      }
      alt="Selected image"
      width={500}
      height={500}
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
    />
  );
};

export default ImageViewer;
