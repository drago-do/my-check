"use client";
import React from "react";
import ImagenTumblr from "@/components/general/ImagenTumblr";
import Typography from "@/components/general/Typography";
import Badge from "@/components/general/Badge";

export default function Profile() {
  return (
    <div className="flex flex-col w-full">
      <ProfileHeader />
      <DetailedInfo />
    </div>
  );
}

const ProfileHeader = ({ userInfo }) => {
  return (
    <div className="w-full flex flex-nowrap">
      <ImagenTumblr />
      <div className="flex flex-col flex-nowrap justify-between">
        <Typography variant={"p"}>
          {userInfo
            ? `${userInfo.firstName || "desco"} ${
                userInfo.lastName || "nocido"
              }`
            : `desconocido`}
        </Typography>
        <Typography variant={"caption"}>
          {userInfo
            ? `${userInfo.firstName || "Nombre desconocido"} ${
                userInfo.lastName || "Apellido desconocido"
              }`
            : `desconocido@gmail.com`}
        </Typography>
      </div>
    </div>
  );
};

const DetailedInfo = ({ userInfo }) => {
  return (
    <div className="flex flex-col flex-nowrap justify-between mt-6">
      <Typography variant={"subtitle"}>Rol</Typography>
      <div className="w-full">
        <Badge color={"yellow"}>
          {userInfo?.role || "No se pudo obtener"}{" "}
        </Badge>
      </div>
    </div>
  );
};
