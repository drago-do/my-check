"use client";
import React, { useState } from "react";
import Category from "@/components/order/Category";
import Categories from "@/utils/Categories";

export default function Order() {
  const [categories, setCategories] = useState(Categories);

  useState
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-content-stretch w-full">
        <Category
          title="Cocktails"
          content="A mix of spirits and other ingredients, such as fruit juice or cream."
          actions={[{ label: "Order" }, { label: "View" }]}
        />
        <Category
          title="Beers"
          content="A variety of local and imported beers."
          actions={[{ label: "Order" }, { label: "View" }]}
        />
        <Category
          title="Beers"
          content="A variety of local and imported beers."
          actions={[{ label: "Order" }, { label: "View" }]}
        />
        <Category
          title="Beers"
          content="A variety of local and imported beers."
          actions={[{ label: "Order" }, { label: "View" }]}
        />
        <Category
          title="Beers"
          content="A variety of local and imported beers."
          actions={[{ label: "Order" }, { label: "View" }]}
        />
        <Category
          title="Beers"
          content="A variety of local and imported beers."
          actions={[{ label: "Order" }, { label: "View" }]}
        />
      </div>
    </>
  );
}
