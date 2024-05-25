"use client";
import React, { useEffect, useState } from "react";
import ImageViewer from "@/components/general/ImageViewer";
import Typography from "@/components/general/Typography";
import Badge from "@/components/general/Badge";
import useUser from "@/hooks/useUser";
import Skeleton from "@/components/general/Skeleton";
import useActualBusiness from "@/hooks/useBusiness";
import useBusiness from "@/hooks/useBusiness";
import ValidateBusinessSelected from "@/components/businessAccess/ValidateBusinessSelected";

export default function Profile() {
  const { istABusinessSelected } = useBusiness();
  const { user, userError, userIsLoading } = useUser();

  if (!istABusinessSelected()) {
    return <ValidateBusinessSelected />;
  }

  if (userIsLoading) {
    return (
      <>
        <div className="w-full flex flex-nowrap">
          <div className="w-16 h-16 mr-6 md:mr-16 bg-cover">
            <Skeleton variant="image" className="rounded-lg" />
          </div>
          <div className="flex flex-col flex-nowrap justify-between">
            <Skeleton variant="subtitle" className="rounded-lg" />
            <Skeleton variant="caption" className="rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col flex-nowrap justify-between mt-6">
          <Skeleton variant="subtitle" />
          <Skeleton variant="caption" />
        </div>
      </>
    );
  }

  if (userError) {
    return (
      <div className="w-full flex flex-nowrap">
        <Typography variant={"p"}>
          Error al cargar la información del usuario
        </Typography>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <ProfileHeader userInfo={user} />
      <DetailedInfo userInfo={user} />
    </div>
  );
}

const ProfileHeader = ({ userInfo }) => (
  <>
    <div className="w-full flex flex-nowrap">
      <div className="w-16 h-16 mr-6 md:mr-16 bg-cover">
        <ImageViewer
          fotoData={userInfo.image}
          className="rounded-lg"
          alt="user image"
        />
      </div>
      <div className="flex flex-col flex-nowrap justify-between">
        <Typography variant={"p"}>
          {userInfo.firstName} {userInfo.lastName}
        </Typography>
        <Typography variant={"caption"}>{userInfo.email}</Typography>
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
      {userInfo && role && (
        <div className="flex flex-col flex-nowrap justify-between mt-6">
          <Typography variant={"subtitle"}>Rol</Typography>
          <div className="w-full">
            <Badge color={"yellow"}>{role}</Badge>
          </div>
        </div>
      )}
    </>
  );
};
