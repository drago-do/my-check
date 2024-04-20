"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useActualUser from "./../../hooks/useActualUser";
import useBusiness from "./../../hooks/useBusiness";
import Typography from "@/components/general/Typography";
import Skeleton from "@/components/general/Skeleton";

//Components
import BusinessInvitations from "@/components/businessAccess/BusinessInvitations";
import BusinessAccess from "@/components/businessAccess/BusinessAccess";

export default function Page() {
  const { data: session } = useSession();
  const { actualUser } = useActualUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (actualUser || !session) {
      setLoading(false);
    }
  }, [actualUser, session]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div>
      <>
        <Typography variant="title">Hola {actualUser?.firstName}</Typography>
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
