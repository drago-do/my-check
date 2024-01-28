import React from "react";
import ButtonLink from "@/components/general/ButtonLink";
import MaterialIcon from "@/components/general/MaterialIcon";
import Typography from "@/components/general/Typography";
export default function page() {
  return (
    <div className="flex flex-col flex-nowrap w-full">
      <Typography variant={"title"}>
        Gestión de productos y categorías
      </Typography>
      <ButtonLink
        title="Gestión productos"
        subtitle="Agrega al inventario productos"
        icon={<MaterialIcon iconName="fastfood" />}
        href="/settings/products-and-categories/products"
      />
      <ButtonLink
        title="Gestión de categorías"
        subtitle="Agrega al inventario categorías"
        icon={<MaterialIcon iconName="category" />}
        href="/settings/products-and-categories/categories"
      />
      <ButtonLink
        title="Inventario"
        subtitle="Revisa números de inventario"
        icon={<MaterialIcon iconName="inventory" />}
        href="/settings/products-and-categories/inventory"
      />
    </div>
  );
}
