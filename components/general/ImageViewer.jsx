import Image from "next/image";
import React from "react";

const ImageViewer = ({ fotoData, className, alt, priority = false }) => {
  return (
    <Image
      className={className}
      src={
        fotoData
          ? fotoData.contentType === "online"
            ? fotoData.data
            : `data:${fotoData.contentType};base64, ${fotoData.data}`
          : "/404.png"
      }
      alt={alt}
      width={500}
      height={500}
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
      priority={priority}
    />
  );
};

export default ImageViewer;
