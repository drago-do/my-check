import Image from "next/image";
import React from "react";

const ImageViewer = ({ fotoData, className }) => {
  return (
    <div
      className={className}
      style={{ width: "200px", height: "200px", overflow: "hidden" }}
    >
      <Image
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
    </div>
  );
};

export default ImageViewer;
