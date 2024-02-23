import React from "react";
import ImageViewer from "../general/ImageViewer";
import Typography from "../general/Typography";
import Link from "next/link";

const Category = ({ category }) => {
  return (
    <Link
      href={`/order/${category._id}` || "/order#"}
      className="rounded-lg shadow-lg overflow-hidden border p-6 bg-white  border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer"
    >
      <div>
        <ImageViewer
          fotoData={category.image}
          className={"max-h-44 object-cover object-center"}
        />
        <Typography variant="subtitle">{category?.name}</Typography>
        <Typography variant={"p"}>{category?.description}</Typography>
      </div>
    </Link>
  );
};

export default Category;
