"use client";
import React, { useState } from "react";
import Category from "@/components/order/Category";
import Product from "@/components/order/Product";

//TODO Delete this mockups examples
import Categories from "@/utils/Categories";
import Products from "@/utils/Products";

export default function Order() {
  const [categories, setCategories] = useState(Categories);
  const [products, setProducts] = useState(Products);

  useState;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 place-content-around w-full">
        {categories &&
          categories.map((category) => (
            <Category key={category._id} category={category} />
          ))}
        {products &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
    </>
  );
}
