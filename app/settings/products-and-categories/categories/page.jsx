"use client";
import React from "react";
import SearchField from "../../../../components/general/SearchField";
import MaterialIcon from "@/components/general/MaterialIcon";
import Typography from "@/components/general/Typography";
import CategoriesTable from "@/components/settings/products-and-categories/CategoriesTable";
//TODO realizar carga real caudno este el backend
import Categories from "@/utils/categories";

export default function page() {
  console.log(Categories);
  // const [categoriesTable, setCategoriesTable] = useState(null)
  const handleAddCategories = () => {
    console.log("he");
  };

  return (
    <div className="flex flex-col w-full">
      <SearchField />
      <Typography variant={"subtitle"}>Añade nuevos elementos</Typography>
      <section className="w-full flex justify-between flex-nowrap">
        <ButtonAdd
          onClick={handleAddCategories}
          text={"Categoría"}
          icon={<MaterialIcon iconName="add" />}
        />
      </section>
      <CategoriesTable categories={Categories} />
    </div>
  );
}

const ButtonAdd = ({ onClick, text, icon }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white grow justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {icon} {text}
    </button>
  );
};
