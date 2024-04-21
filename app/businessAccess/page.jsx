"use client";
import React from "react";
import useUser from "../../hooks/useUser";
import Typography from "@/components/general/Typography";
import Skeleton from "@/components/general/Skeleton";

//Components
import BusinessInvitations from "@/components/businessAccess/BusinessInvitations";
import BusinessAccess from "@/components/businessAccess/BusinessAccess";

export default function Page() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div>
      <>
        <Typography variant="title">Hola {user?.firstName}</Typography>
        <Typography variant="p">Bienvenido de nuevo.</Typography>
      </>
      <BusinessInvitations />
      <BusinessAccess />
    </div>
  );
}

const LoadingSkeleton = () => {
  return (
    <>
      <Skeleton variant="title" />
      <Skeleton variant={"caption"} />
    </>
  );
};
