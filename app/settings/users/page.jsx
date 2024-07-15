"use client";
import React, { useState, useEffect } from "react";
import Typography from "@/components/general/Typography";
import FilterByRole from "@/components/settings/users/FilterByRole";
import UserList from "@/components/settings/users/UserList";
import MaterialIcon from "@/components/general/MaterialIcon";
import UserForm from "@/components/settings/users/UserForm";
import Modal from "@/components/general/Modal";
import useUser from "@/hooks/useUser";
import useBusiness from "@/hooks/useBusiness";
import { thisUserIsAdmin } from "@/utils/userUtils";
import FullScreenLoader from "@/components/general/FullScreenLoader";
import ButtonLink from "@/components/general/ButtonLink";
import UserInviteForm from "@/components/settings/users/UserInviteForm";

export default function UsersPage() {
  const { getUserPermissions } = useUser();
  const { actualBusiness, getAllUsersWithAccesToBussines } = useBusiness();
  const [userWithAccess, setUserWithAccess] = useState(null);
  const [addUserModal, setAddUserModal] = useState(false);
  const [inviteUserModal, setInviteUserModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const handleFilterChange = (role) => {
    if (role === "all") {
      // setUserListState(usersList);
    } else {
      // setUserListState(getUserPerRole(role));
    }
  };

  const handleAddUser = () => {
    setAddUserModal(!addUserModal);
  };

  const handleInviteUser = () => {
    setInviteUserModal(!inviteUserModal);
  };

  //Check if user can access to this page
  useEffect(() => {
    const fetchInfo = async () => {
      const permissions = getUserPermissions();
      const businessId = actualBusiness?._id;
      if (!permissions || !businessId) {
        window.location.href = "/";
      }
      if (!thisUserIsAdmin(permissions, businessId)) {
        setIsError("No tienes permisos para acceder a esta página");
        setIsLoading(false);
      } else {
        if (businessId) {
          const userList = await getAllUsersWithAccesToBussines();
          if (!userList) {
            return;
          }
          setUserWithAccess(userList);
          setIsLoading(false);
        }
      }
    };
    fetchInfo();
  }, [getUserPermissions(), actualBusiness]);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (isError) {
    return (
      <>
        <Typography variant={"title"}>Error</Typography>
        <Typography variant={"p"}>{isError}</Typography>
        <div className="w-full sm:w-1/2 ">
          <ButtonLink
            title="Regresar"
            subtitle="Regresar a la pagina principal"
            href="/main"
            icon={<MaterialIcon iconName="home" />}
          />
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col flex-nowrap w-full">
      <Typography variant={"title"}>Gestión de usuarios</Typography>
      <section className="w-full my-3 flex justify-between flex-nowrap">
        <ButtonAdd
          onClick={handleInviteUser}
          text={"Usuario"}
          icon={<MaterialIcon iconName="add" />}
        />
      </section>
      <FilterByRole
        userList={userWithAccess}
        onFilterChange={handleFilterChange}
      />
      <UserList userList={userWithAccess} />
      <Modal
        title={"Añadir nuevo usuario"}
        handleClose={handleAddUser}
        isOpen={addUserModal}
      >
        <UserForm handleClose={handleAddUser} />
      </Modal>
      <Modal
        title={"Invitar usuario"}
        handleClose={handleInviteUser}
        isOpen={inviteUserModal}
      >
        <UserInviteForm handleClose={handleInviteUser} />
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
