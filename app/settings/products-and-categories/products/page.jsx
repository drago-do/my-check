"use client";
import React, { useState } from "react";
import SearchField from "../../../../components/general/SearchField";
import MaterialIcon from "@/components/general/MaterialIcon";
import Typography from "@/components/general/Typography";
import ProductsTable from "@/components/settings/products-and-categories/ProductsTable";
import Modal from "@/components/general/Modal";
import AddProductForm from "@/components/settings/products-and-categories/AddProductForm";
import DeleteProductForm from "@/components/settings/products-and-categories/DeleteProductForm";
//TODO realizar carga real caudno este el backend
import Products from "./../../../../utils/Products";

export default function ProductsPage() {
  const [addProductModal, setAddProductModal] = useState(false);
  const [deleteProductModal, setDeleteProductModal] = useState(false);
  const [productToAction, setProductToAction] = useState(null);

  const handleAddProduct = () => {
    setProductToAction(null);
    setAddProductModal(!addProductModal);
  };

  const handleDeleteProduct = () => {
    setDeleteProductModal(!deleteProductModal);
  };

  const handleEdit = (product) => {
    setProductToAction(product);
    setAddProductModal(true);
  };

  const handleDelete = (product) => {
    setProductToAction(product);
    handleDeleteProduct();
  };

  return (
    <div className="flex flex-col w-full">
      <SearchField />
      <Typography variant={"subtitle"}>Añade nuevos elementos</Typography>
      <section className="w-full flex justify-between flex-nowrap">
        <ButtonAdd
          onClick={handleAddProduct}
          text={"Producto"}
          icon={<MaterialIcon iconName="add" />}
        />
      </section>
      <ProductsTable
        products={Products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Modal
        title={"Agrega un producto"}
        isOpen={addProductModal}
        handleClose={handleAddProduct}
      >
        <AddProductForm
          handleClose={handleAddProduct}
          productInfo={productToAction}
        />
      </Modal>
      <Modal
        title={"Eliminar producto"}
        isOpen={deleteProductModal}
        handleClose={handleDeleteProduct}
      >
        <DeleteProductForm
          handleClose={handleDeleteProduct}
          productInfo={productToAction}
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
