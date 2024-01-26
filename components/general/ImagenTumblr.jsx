import React from "react";
import Image from "next/image";

export default function ImagenTumblr({ src = "/404.png" }) {
  return (
    <Image
      src={src}
      width={200}
      height={200}
      alt="Tumblr image"
      className="w-2/12 mr-4 rounded-2xl border-2 border-black	dark:border-white"
    />
  );
}
