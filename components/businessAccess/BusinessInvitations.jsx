import React, { useState, useEffect } from "react";
import useBusiness from "./../../hooks/useBusiness";
import useActualUser from "./../../hooks/useActualUser";
import BusinessCardInvitation from "./BusinessCardInvitation";
import Typography from "../general/Typography";
import MaterialIcon from "../general/MaterialIcon";

export default function BusinessInvitations() {
  const { getUserBusinessInvitations } = useBusiness();
  const { getUserInfoOnLogIn, actualUser } = useActualUser();
  const [loading, setLoading] = useState(true);
  const [userInvitations, setUserInvitations] = useState([]);
  useEffect(() => {
    if (actualUser) {
      getUserBusinessInvitations(actualUser?.email)
        .then((invitations) => {
          setUserInvitations(invitations);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
        });
    }
  }, []);

  const handleAccept = (invitation) => {
    console.log("Aceptar", invitation);
  };

  const handleDecline = (invitation) => {
    console.log("Declinar", invitation);
  };

  if (loading) {
    return (
      <>
        <Typography variant="subtitle"> Invitaciones de negocio</Typography>
        <SkeletonCard />
      </>
    );
  }

  return (
    <div>
      <Typography variant="subtitle"> Invitaciones de negocio</Typography>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-content-evenly ">
        {userInvitations && userInvitations.length > 0 ? (
          userInvitations.map((invitation) => (
            <BusinessCardInvitation
              data={invitation}
              key={invitation._id}
              userEmail={actualUser?.email}
              handleAccept={handleAccept}
              handleDecline={handleDecline}
            />
          ))
        ) : (
          <div className="w-full flex flex-col flex-nowrap justify-center dark:bg-gray-700 rounded-md">
            <MaterialIcon
              iconName="unsubscribe"
              className="text-8xl text-center"
              fontSize={55}
            />
            <Typography variant="p" className="text-center">
              No tienes invitaciones de negocio
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

const SkeletonCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-pulse">
      <div className="aspect-video h-48 w-full bg-gray-300 dark:bg-gray-700">
        {/* Simulación de ImageViewer como esqueleto */}
        <div className="rounded-t-lg"></div>
      </div>
      <div className="p-5 space-y-3">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        <div className="flex justify-between w-full">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
          {/* Simulación de Badge como esqueleto */}
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
        </div>
        <div className="flex justify-between space-x-4">
          {/* Botones como esqueletos */}
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};
