"use client";
import React, { useState, useEffect } from "react";
import Typography from "@/components/general/Typography";
import FilterByRole from "@/components/settings/users/FilterByRole";
import UserList from "@/components/settings/users/UserList";
import MaterialIcon from "@/components/general/MaterialIcon";
import UserForm from "@/components/settings/users/UserForm";
import Modal from "@/components/general/Modal";
import useUsersList from "@/hooks/useUsersList";

export default function UsersPage() {
  const { usersList, getUserPerRole } = useUsersList();
  const [userListState, setUserListState] = useState(usersList);
  const [addUserModal, setAddUserModal] = useState(false);

  const handleFilterChange = (role) => {
    if (role === "all") {
      setUserListState(usersList);
    } else {
      setUserListState(getUserPerRole(role));
    }
  };

  const handleAddUser = () => {
    setAddUserModal(!addUserModal);
  };

  return (
    <div className="flex flex-col flex-nowrap w-full">
      <Typography variant={"title"}>Gestión de usuarios</Typography>
      <section className="w-full my-3 flex justify-between flex-nowrap">
        <ButtonAdd
          onClick={handleAddUser}
          text={"Usuario"}
          icon={<MaterialIcon iconName="add" />}
        />
      </section>
      <FilterByRole
        userList={userListState}
        onFilterChange={handleFilterChange}
      />
      <UserList userList={userListState} />
      <Modal
        title={"Añadir nuevo usuario"}
        handleClose={handleAddUser}
        isOpen={addUserModal}
      >
        <UserForm handleClose={handleAddUser} />
      </Modal>
    </div>
  );
}

const ButtonAdd = ({ onClick, text, icon }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white grow justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {icon} {text}
    </button>
  );
};
