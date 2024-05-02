import React, { useState, useEffect } from "react";
import ImageViewer from "../general/ImageViewer";
import Badge from "../general/Badge";
import ButtonFunction from "../general/ButtonFunction";
import MaterialIcon from "../general/MaterialIcon";
import useBusiness from "../../hooks/useBusiness";

const BusinessCardInvitation = ({ data }) => {
  const { acceptBusinessInvitation } = useBusiness();
  const { name, description, logo, invitedUser, _id: _idBusiness } = data;
  const { role, email, _id: _idInvitation } = invitedUser;
  const [loading, setLoading] = useState(false);

  const handleAccept = () => {
    setLoading(true);
    acceptBusinessInvitation({ _id: _idBusiness, email: email, role: role })
      .then((_) => {
        //Recargar la página
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleDecline = (invitation) => {
    //TODO implement decline invitation logic
    console.log("Declinar", invitation);
  };

  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="aspect-video  h-48 w-full object-cover">
        {/* Conditionally render image if logo.link is available */}
        <ImageViewer
          className="rounded-t-lg "
          fotoData={logo}
          alt={`Logo de ${name}`}
        />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
            {name}
          </h5>
        </a>
        <p className="line-clamp-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-between w-full mb-3">
          <p>Invitado como:</p>
          <Badge color={"blue"}>{role}</Badge>
        </div>
        <div className="flex w-full flex-nowrap justify-between">
          <ButtonFunction
            className="py-2"
            variant="green"
            onLoading={loading}
            onClick={handleAccept}
          >
            <MaterialIcon iconName="done" /> Aceptar
          </ButtonFunction>
          <ButtonFunction
            className="py-2"
            variant="red"
            onLoading={loading}
            onClick={handleDecline}
          >
            <MaterialIcon iconName="cancel" />
            Declinar
          </ButtonFunction>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardInvitation;

// Usage example:
// <Card data={yourObject} />
