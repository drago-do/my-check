import React, { useState, useEffect } from "react";
import ImageViewer from "../general/ImageViewer";
import Badge from "../general/Badge";
import ButtonFunction from "../general/ButtonFunction";
import MaterialIcon from "../general/MaterialIcon";
import { useRouter } from "next/navigation";
import useBusiness from "../../hooks/useBusiness";

const BusinessCardAccess = ({ data, userId }) => {
  const { push } = useRouter();
  const { actualBusiness, choseActualBusiness } = useBusiness();
  const { role, entity } = data;
  const { name, description, logo, category } = entity;
  const [loading, setLoading] = useState(false);
  const [actualChoseBusiness, setActualChoseBusiness] = useState(false);

  const handleChoseBusiness = () => {
    setLoading(true);
    choseActualBusiness(entity._id)
      .then((_) => {
        push("/main");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (actualBusiness?._id === entity?._id) {
      setActualChoseBusiness(true);
    }
  }, [actualBusiness, entity]);

  return (
    <div
      className={`
     bg-white border-2 border-solid ${
       actualChoseBusiness ? "dark:border-blue-400	 border-blue-500	" : ""
     }  rounded-lg shadow dark:bg-gray-800 `}
    >
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
          <p>Rol de negocio:</p>
          <Badge color={"blue"}>{role}</Badge>
        </div>
        <div className="flex w-full flex-nowrap justify-between">
          {actualChoseBusiness ? (
            <p className="text-blue-500 dark:text-blue-400">
              Negocio actualmente seleccionado
            </p>
          ) : (
            <ButtonFunction
              className="py-2"
              variant="green"
              onLoading={loading}
              onClick={handleChoseBusiness}
            >
              <MaterialIcon iconName="done" /> Seleccionar
            </ButtonFunction>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessCardAccess;

// Usage example:
// <Card data={yourObject} />
