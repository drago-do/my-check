"use client";
import React, { useState } from "react";
import Typography from "@/components/general/Typography";
import FilterByRole from "@/components/settings/users/FilterByRole";

import UserJSON from "@/utils/UserJSON";
export default function UsersPage() {
  //TODO change for a real user list
  const [userList, setUserList] = useState(UserJSON);

  const handleFilterChange = (role) => {
    if (role === "all") {
      setUserList(UserJSON);
    } else {
      const filteredList = UserJSON.filter((user) => user.role === role);
      setUserList(filteredList);
    }
  };
  return (
    <div className="flex flex-col flex-nowrap">
      <Typography variant={"title"}>Gestión de usuarios</Typography>
      <FilterByRole userList={userList} onFilterChange={handleFilterChange} />
    </div>
  );
}
