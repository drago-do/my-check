import Image from "next/image";
import React, { useState } from "react";
import Skeleton from "../../general/Skeleton";
import ImageViewer from "../../general/ImageViewer";
import Badge from "../../general/Badge";
import MaterialIcon from "../../general/MaterialIcon";
import ButtonFunction from "./../../general/ButtonFunction";
import useActualBusiness from "@/hooks/useBusiness";

const colorRole = {
  admin: "green",
  mesero: "blue",
  chef: "yellow",
  cajero: "indigo",
};

export default function UserInvitedList({ userList }) {
  const [loading, setLoading] = useState(false);
  const { deleteUserInvitedToBusiness } = useActualBusiness();

  const handleDeleteInvitation = async (email) => {
    setLoading(true);
    try {
      await deleteUserInvitedToBusiness(email);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <ul
        role="list"
        className="divide-y divide-gray-200 dark:divide-gray-700 p-2 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        {userList ? (
          userList.length > 0 ? (
            userList.map((user, index) => {
              return (
                <li key={user._id} className="py-3 px-3 sm:py-4">
                  <div className="flex items-center max-h-12">
                    <div className="flex-shrink-0 max-h-24 overflow-hidden">
                      <ImageViewer
                        fotoData={{
                          contentType: "online",
                          data: "/defaultProfile.jpg",
                        }}
                        className={"rounded-full max-h-12"}
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {user.email}
                      </p>
                      <Badge color={colorRole[user.role]}>{user.role}</Badge>
                    </div>

                    <ButtonFunction
                      onLoading={loading}
                      className="h-full py-2"
                      type="button"
                      variant="red"
                      onClick={() => handleDeleteInvitation(user.email)}
                    >
                      <MaterialIcon iconName="delete" />
                    </ButtonFunction>
                  </div>
                </li>
              );
            })
          ) : (
            <li className="py-3 sm:py-4">
              <div
                className="flex items
        -center justify-center"
              >
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  No hay invitaciones de usuarios
                </p>
              </div>
            </li>
          )
        ) : (
          <li className="py-3 sm:py-4">
            <div className="flex items-center justify-center">
              <Skeleton variant="list" />
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
