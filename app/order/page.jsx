"use client";
import React, { useState } from "react";
import ListScreen from "@/components/order/ListScreen";

import useCategories from "@/hooks/useCategories";
import useProducts from "@/hooks/useProducts";

export default function Order() {
  const { categories } = useCategories();
  const { products } = useProducts();

  console.log(categories, products);

  useState;
  return (
    <>
      <ListScreen categories={categories} products={products} />
    </>
  );
}
