"use client";
import React, { useState } from "react";
import SearchField from "../../../../components/general/SearchField";
import MaterialIcon from "@/components/general/MaterialIcon";
import Typography from "@/components/general/Typography";
import CategoriesTable from "@/components/settings/products-and-categories/CategoriesTable";
import Modal from "@/components/general/Modal";
import AddCategoryForm from "@/components/settings/products-and-categories/AddCategoryForm";
import DeleteCategoryForm from "@/components/settings/products-and-categories/DeleteCategoryForm";

import useCategories from "@/hooks/useCategories";

export default function CategoriesPage() {
  const { categories } = useCategories();
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);
  const [categoryToAction, setCategoryToAction] = useState(null);

  const handleAddCategories = () => {
    setCategoryToAction(null);
    setAddCategoryModal(!addCategoryModal);
  };

  const handleDeleteCategories = () => {
    setDeleteCategoryModal(!deleteCategoryModal);
  };
  const handleEdit = (category) => {
    setCategoryToAction(category);
    setAddCategoryModal(true);
  };

  const handleDelete = (category) => {
    setCategoryToAction(category);
    handleDeleteCategories();
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
      <CategoriesTable
        categories={categories}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Modal
        title={"Agrega una categoría"}
        isOpen={addCategoryModal}
        handleClose={handleAddCategories}
      >
        <AddCategoryForm
          handleClose={handleAddCategories}
          categoriesInfo={categoryToAction}
        />
      </Modal>
      <Modal
        title={"Eliminar categoría"}
        isOpen={deleteCategoryModal}
        handleClose={handleDeleteCategories}
      >
        <DeleteCategoryForm
          handleClose={handleDeleteCategories}
          categoriesInfo={categoryToAction}
        />
      </Modal>
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
