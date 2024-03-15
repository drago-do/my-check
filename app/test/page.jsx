"use client";
import React, { useEffect } from "react";

import useActualOrder from "@/hooks/useActualOrder";

import useCategories from "@/hooks/useCategories";

import useProducts from "@/hooks/useProducts";

import useOrderList from "@/hooks/useOrderList";

import useActualUser from "@/hooks/useActualUser";

export default function Test() {
  const { actualOrder } = useActualOrder();
  const { categories } = useCategories();
  const { products } = useProducts();
  const { orderList } = useOrderList();
  const { actualUser } = useActualUser();

  useEffect(() => {
    // console.log(actualOrder);
    // console.log(categories);
    // console.log(products);
    // console.log(orderList);
    console.log(actualUser);
  }, [products]);

  return (
    <>
      <p>Test</p>
    </>
  );
}
