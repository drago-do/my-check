import Image from "next/image";
import React, { useState } from "react";
import Skeleton from "./../../general/Skeleton";
import ImageViewer from "./../../general/ImageViewer";
import Badge from "./../../general/Badge";
import MaterialIcon from "./../../general/MaterialIcon";
import UserOptionsMenu from "./UserOptionsMenu";
import Modal from "./../../general/Modal";

//ModalForms
import UserForm from "./UserForm";
import UserRoleChangeForm from "./UserRoleChangeForm";
import DeleteUserForm from "./DeleteUserForm";

const colorRole = {
  admin: "green",
  mesero: "blue",
  chef: "yellow",
  cajero: "indigo",
};

export default function UserList({ userList }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "Default",
    body: "default modal body text.",
    isOpen: false,
  });

  const getUserFromId = (id) => {
    return userList.find((user) => user._id === id);
  };

  const handleDelete = (id) => {
    const user = getUserFromId(id);
    setModalInfo({
      ...modalInfo,
      title: `Eliminar a ${user.firstName}`,
      body: <DeleteUserForm handleClose={handleClose} userInfo={user} />,
      isOpen: true,
    });
  };

  const handleEdit = (id) => {
    const user = getUserFromId(id);
    setModalInfo({
      ...modalInfo,
      title: `Editar a ${user.firstName}`,
      body: <UserForm user={user} handleClose={handleClose} userInfo={user} />,
      isOpen: true,
    });
  };

  const handleChangeRole = (id) => {
    const user = getUserFromId(id);
    setModalInfo({
      ...modalInfo,
      title: `Cambiar rol`,
      body: <UserRoleChangeForm handleClose={handleClose} userInfo={user} />,
      isOpen: true,
    });
  };

  const handleClose = () => {
    setModalInfo((prevModalInfo) => ({ ...prevModalInfo, isOpen: false }));
  };

  return (
    <ul
      role="list"
      className="divide-y divide-gray-200 dark:divide-gray-700 max-w-2xl p-2 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Modal
        title={modalInfo.title}
        handleClose={handleClose}
        isOpen={modalInfo.isOpen}
      >
        {modalInfo.body}
      </Modal>
      {userList ? (
        userList.length > 0 ? (
          userList.map((user, index) => (
            <li key={user._id} className="py-3 px-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0 w-2/12 h-2/12 overflow-hidden">
                  <ImageViewer
                    fotoData={user?.image}
                    className={"rounded-full"}
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {`${user.firstName} ${user.lastName}`}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {user.email}
                  </p>
                  <Badge color={colorRole[user.role]}>{user.role}</Badge>
                </div>
                <button
                  onClick={() =>
                    setIsUserMenuOpen(isUserMenuOpen ? null : user._id)
                  }
                  type="button"
                  className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                >
                  <MaterialIcon iconName="more_vert" />
                  <span className="sr-only">Mas opciones</span>
                </button>
                <UserOptionsMenu
                  menuItems={[
                    {
                      onClick: handleChangeRole,
                      icon: <MaterialIcon iconName="admin_panel_settings" />,
                      name: "Cambiar rol",
                    },
                    {
                      onClick: handleEdit,
                      icon: <MaterialIcon iconName="person" />,
                      name: "Editar usuario",
                    },
                    {
                      onClick: handleDelete,
                      icon: <MaterialIcon iconName="delete" />,
                      name: "Eliminar",
                    },
                  ]}
                  idForOnClick={user._id}
                  setIsMenuOpen={setIsUserMenuOpen}
                  isMenuOpen={isUserMenuOpen === user._id}
                />
              </div>
            </li>
          ))
        ) : (
          <li className="py-3 sm:py-4">
            <div
              className="flex items
        -center justify-center"
            >
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                No hay usuarios
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
  );
}
