"use client";
import React, { useEffect, useState } from "react";
import ImageViewer from "@/components/general/ImageViewer";
import Typography from "@/components/general/Typography";
import Badge from "@/components/general/Badge";
import useActualUser from "@/hooks/useActualUser";
import Skeleton from "@/components/general/Skeleton";
import useActualBusiness from "@/hooks/useBusiness";

export default function Profile() {
  const { actualUser } = useActualUser();
  const [actualUserState, setActualUserState] = useState(null);
  useEffect(() => {
    setActualUserState(actualUser);
  }, [actualUser]);

  return (
    <div className="flex flex-col w-full">
      <ProfileHeader userInfo={actualUserState} />
      <DetailedInfo userInfo={actualUserState} />
    </div>
  );
}

const ProfileHeader = ({ userInfo }) => (
  <>
    <div className="w-full flex flex-nowrap">
      <div className="w-16 h-16 mr-6 md:mr-16 bg-cover">
        {userInfo?.image ? (
          <ImageViewer
            fotoData={userInfo.image}
            className="rounded-lg"
            alt="user image"
          />
        ) : (
          <Skeleton variant="image" className="rounded-lg" />
        )}
      </div>
      <div className="flex flex-col flex-nowrap justify-between">
        {userInfo ? (
          <>
            <Typography variant={"p"}>
              {userInfo.firstName} {userInfo.lastName}
            </Typography>
            <Typography variant={"caption"}>{userInfo.email}</Typography>
          </>
        ) : (
          <>
            <Skeleton variant="subtitle" className="rounded-lg" />
            <Skeleton variant="caption" className="rounded-lg" />
          </>
        )}
      </div>
    </div>
  </>
);

const DetailedInfo = ({ userInfo }) => {
  const { actualBusiness } = useActualBusiness();
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (userInfo && actualBusiness._id) {
      const business = userInfo.permissions.find(
        (permission) => permission.entity === actualBusiness._id
      );
      setRole(business ? business.role : "No tiene permisos en este negocio");
    }
  }, [userInfo, actualBusiness]);

  return (
    <>
      {userInfo && role ? (
        <div className="flex flex-col flex-nowrap justify-between mt-6">
          <Typography variant={"subtitle"}>Rol</Typography>
          <div className="w-full">
            <Badge color={"yellow"}>{role}</Badge>
          </div>
        </div>
      ) : (
        <div className="flex flex-col flex-nowrap justify-between mt-6">
          <Skeleton variant="subtitle" />
          <Skeleton variant="caption" />
        </div>
      )}
    </>
  );
};
