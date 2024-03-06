import React, { useState, useEffect } from "react";
import Category from "./../../components/order/Category";
import Product from "./../../components/order/Product";
import Skeleton from "../general/Skeleton";
import { usePathname, useRouter } from "next/navigation";

export default function ListScreen({ categories, products }) {
  const { push } = useRouter();

  const [loading, setLoading] = useState(true);
  const [categoriesToShow, setCategoriesToShow] = useState(categories);
  const [productsToShow, setProductsToShow] = useState(products);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/order") {
      setCategoriesToShow(getCategoriesWithoutParent(categories));
      setProductsToShow(getProductsWithoutCategory(products));
    } else {
      const category = categories.find(
        (category) => category.name === pathname.split("/").pop()
      );
      console.log(category);
      if (category) {
        const getCategoryID = category._id;
        setCategoriesToShow(getCategoriesOfParent(categories, getCategoryID));
        setProductsToShow(getProductsOfCategory(products, getCategoryID));
      } else {
        //Redirect To 404
        push("/404");
      }
    }
    setLoading(false);
  }, [pathname, push, categories, products]);

  return (
    <>
      {loading ? (
        <Skeleton variant={"list"} />
      ) : (
        <div className="mb-24 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 place-content-around w-full">
          {categoriesToShow.map((category) => (
            <Category key={category._id} category={category} />
          ))}
          {productsToShow.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

const getCategoriesWithoutParent = (categories) => {
  return categories.filter((category) => !category?.parent);
};

const getProductsWithoutCategory = (products) => {
  return products.filter((product) => product?.category === null);
};

const getCategoriesOfParent = (categories, parent) => {
  return categories.filter((category) => category?.parent === parent);
};

const getProductsOfCategory = (products, category) => {
  return products.filter((product) => product?.category === category);
};
