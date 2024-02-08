import Image from "next/image";
import React from "react";
import Skeleton from "./../../general/Skeleton";
import ImageViewer from "./../../general/ImageViewer";
import Badge from "./../../general/Badge";

export default function UserList({ userList }) {
  const colorRole = {
    admin: "green",
    mesero: "blue",
    chef: "yellow",
    cajero: "indigo",
  };

  return (
    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
      {userList ? (
        userList.length > 0 ? (
          userList.map((user, index) => (
            <li key={user._id} class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <ImageViewer
                    fotoData={user?.image}
                    className={"w-8 h-8 rounded-full"}
                  />
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {`${user.firstName} ${user.lastName}`}
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {user.email}
                  </p>
                  <Badge color={colorRole[user.role]}>{user.role}</Badge>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                  {/* //TODO change for a real user list price */}
                </div>
              </div>
            </li>
          ))
        ) : (
          <li class="py-3 sm:py-4">
            <div
              class="flex items
        -center justify-center"
            >
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                No hay usuarios
              </p>
            </div>
          </li>
        )
      ) : (
        <li class="py-3 sm:py-4">
          <div class="flex items-center justify-center">
            <Skeleton variant="list" />
          </div>
        </li>
      )}
    </ul>
  );
}
