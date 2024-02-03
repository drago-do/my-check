"use client";
import React, { useState } from "react";
import SearchField from "../../../../components/general/SearchField";
import MaterialIcon from "@/components/general/MaterialIcon";
import Typography from "@/components/general/Typography";
import ProductsTable from "@/components/settings/products-and-categories/ProductsTable";
import Modal from "@/components/general/ModalCRUD";
import AddProductForm from "@/components/settings/products-and-categories/AddProductForm";
import DeleteProductForm from "@/components/settings/products-and-categories/DeleteProductForm";

//TODO delete this example list
const listOfprod = [
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    UnitMeasurementAndPrice: {
      size: "500",
      price: "30",
      UnitMeasurement: "ml",
    },
    image: {
      url: true,
      link: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    },
    units: "50",
    category: "63acbba13bd411f44a60d04f",
  },
];

export default function Products() {
  const [addProductModal, setAddProductModal] = useState(false);
  const [deleteProductModal, setDeleteProductModal] = useState(false);
  const [productToAction, setProductToAction] = useState(null);

  const handleAddProduct = () => {
    setAddProductModal(!addProductModal);
  };
  const handleDeleteProduct = () => {
    setDeleteProductModal(!deleteProductModal);
  };

  const handleEdit = (product) => {
    setProductToAction(product);
    handleAddProduct();
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
        products={listOfprod}
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
