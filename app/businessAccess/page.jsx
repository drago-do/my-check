"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useActualUser from "./../../hooks/useActualUser";
import Typography from "@/components/general/Typography";
import Skeleton from "@/components/general/Skeleton";

//!Todo Fix this page
export default function Page() {
  //Get session auth from next-auth
  const { data: session } = useSession();
  const { getUserInfoOnLogIn, actualUser } = useActualUser();
  const [actualUserState, setActualUserState] = useState(null);
  const [userPermissions, setUserPermissions] = useState([]);
  const [userInvitations, setUserInvitations] = useState([]);

  useEffect(() => {
    if (!actualUser && session) {
      //Check if user has business access
      getUserInfoOnLogIn(session.user.email).catch((error) => {
        console.error(error);
      });
    }
  }, [session, actualUser]);

  useEffect(() => {
    if (actualUser) {
      setActualUserState(actualUser);
    }
  }, [actualUser]);

  return (
    <div>
      {actualUserState?.firstName ? (
        <>
          <Typography variant="title">
            Hola {actualUserState?.firstName}
          </Typography>
          <Typography variant="p">Bienvenido de nuevo.</Typography>
        </>
      ) : (
        <>
          <Skeleton variant="title" />
          <Skeleton variant={"caption"} />
        </>
      )}
    </div>
  );
}
