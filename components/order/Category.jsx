import React from "react";
import ImageViewer from "../general/ImageViewer";
import Typography from "../general/Typography";
import Link from "next/link";

const Category = ({ title, content, image, actions }) => {
  return (
    <Link
      href={actions?.link || "/order#"}
      className="rounded-lg shadow-lg overflow-hidden border p-6 bg-white  border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer"
    >
      <div>
        <ImageViewer
          fotoData={image}
          className={"max-h-44 object-cover object-center"}
        />
        <Typography variant="subtitle">{title}</Typography>
        <Typography variant={"p"}>{content}</Typography>
      </div>
    </Link>
  );
};

export default Category;
