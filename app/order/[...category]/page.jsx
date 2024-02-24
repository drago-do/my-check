"use client";
import React, { useState } from "react";
import ListScreen from "@/components/order/ListScreen";

//TODO Delete this mockups examples
import Categories from "@/utils/Categories";
import Products from "@/utils/Products";

export default function Order() {
  const [categories, setCategories] = useState(Categories);
  const [products, setProducts] = useState(Products);

  useState;
  return (
    <>
      <ListScreen categories={categories} products={products} />
    </>
  );
}
