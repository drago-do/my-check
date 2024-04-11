"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useActualUser from "./../../hooks/useActualUser";
import useBusiness from "./../../hooks/useBusiness";
import Typography from "@/components/general/Typography";
import Skeleton from "@/components/general/Skeleton";

//!Todo Fix this page
export default function Page() {
  //Get session auth from next-auth
  const { data: session } = useSession();
  const { getUserBusinessInvitations } = useBusiness();
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
      //Get user business invitations
      getUserBusinessInvitations(actualUser?.email).then((response) => {
        console.log(response);
        setUserInvitations(response);
      });
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
