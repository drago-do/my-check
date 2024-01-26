import React from "react";
import ButtonLink from "@/components/general/ButtonLink";
import MaterialIcon from "@/components/general/MaterialIcon";
import Typography from "@/components/general/Typography";
export default function page() {
  return (
    <div className="flex flex-col flex-nowrap w-full">
      <Typography variant={"title"}>Configuraciones</Typography>
      <ButtonLink
        title="Añadir a inventario"
        subtitle="Agrega al inventario productos o categorías"
        icon={<MaterialIcon iconName="box_add" />}
        href="/settings/products-and-categories"
      />
      <ButtonLink
        title="Gestión de usuarios"
        subtitle="Crea, elimina o cambia cuentas de usuario"
        icon={<MaterialIcon iconName="account_circle" />}
        href="/settings/accounts"
      />
      <ButtonLink
        title="Mapa de mesas"
        subtitle="Visualiza o modifica el mapa de mesas"
        icon={<MaterialIcon iconName="distance" />}
        href="/settings/table-map"
      />
      <ButtonLink
        title="Estadísticas"
        subtitle="Revisa ventas, producto mas vendido etc."
        icon={<MaterialIcon iconName="bar_chart_4_bars" />}
        href="/settings/statistics"
      />
    </div>
  );
}
