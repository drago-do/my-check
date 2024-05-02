"use client";
import React, { useState, useEffect } from "react";
import useBusiness from "./../../hooks/useBusiness";
import useUser from "../../hooks/useUser";
import BusinessCardInvitation from "./BusinessCardInvitation";
import Typography from "../general/Typography";
import MaterialIcon from "../general/MaterialIcon";

export default function BusinessInvitations() {
  const { businessInvitations, errorInvitations, isLoadingInvitations } =
    useBusiness();

  useEffect(() => {
    console.log(businessInvitations?.businesses?.length);
  }, [businessInvitations]);

  if (isLoadingInvitations) {
    return (
      <>
        <Typography variant="subtitle"> Invitaciones de negocio</Typography>
        <SkeletonCard />
      </>
    );
  }
  if (errorInvitations) {
    return (
      <div className="w-full flex flex-col flex-nowrap justify-center dark:bg-gray-700 rounded-md">
        <MaterialIcon
          iconName="error"
          className="text-8xl text-center"
          fontSize={55}
        />
        <Typography variant="p" className="text-center">
          Error al cargar las invitaciones de negocio
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="subtitle"> Invitaciones de negocio</Typography>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-content-evenly ">
        {businessInvitations?.businesses?.length !== 0 ? (
          businessInvitations?.businesses?.map((invitation) => (
            <BusinessCardInvitation data={invitation} key={invitation._id} />
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
