"use client";
import React from "react";
import SearchField from "../../../../components/general/SearchField";
import MaterialIcon from "@/components/general/MaterialIcon";
import Typography from "@/components/general/Typography";
import ProductsTable from "@/components/settings/products-and-categories/ProductsTable";

//TODO delete this example list
const listOfprod = [
  {
    _id: "63acc1a5d344f1e651a22935",
    name: "Caguama",
    description: "Cerveza de 1.2l",
    price: "70",
    image:
      "https://www.grupoelvalor.com/wp-content/uploads/2018/12/corona-caguama-familiar.png",
    units: "5",
    category: "63acbba13bd411f44a60d04f",
    size: "1.2 L",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
  {
    _id: "63acc1dcd344f1e651a22937",
    name: "Cerveza",
    description: "Cerveza de 250 ml",
    price: "30",
    image: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    units: "50",
    category: "63acbba13bd411f44a60d04f",
    size: "250 ml",
  },
];

export default function page() {
  const handleAddProduct = () => {
    console.log("he");
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
      <ProductsTable products={listOfprod} />
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
