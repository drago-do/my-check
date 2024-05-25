import React from "react";
import Typography from "./../general/Typography";
import ButtonLink from "./../general/ButtonLink";
import MaterialIcon from "./../general/MaterialIcon";

export default function ValidateBusinessSelected() {
  return (
    <div className="flex flex-col flex-nowrap items-center justify-center">
      <Typography variant={"title"}>Selecciona un negocio</Typography>
      <Typography variant={"body"}>
        Para poder acceder a esta pantalla debes seleccionar un negocio.
      </Typography>
      <section className="flex justify-center w-1/3 my-8">
        <ButtonLink
          title="Seleccionar negocio"
          href="/businessAccess"
          icon={<MaterialIcon iconName="domain" />}
          subtitle="Selecciona un negocio para acceder a las configuraciones"
        />
      </section>
    </div>
  );
}
