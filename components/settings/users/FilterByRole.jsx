import React, { useState } from "react";
import Skeleton from "./../../general/Skeleton";

export default function FilterByRole({ userList, onFilterChange }) {
  const roles = userList.map((user) => user.role);
  const uniqueRoles = [...new Set(roles)];
  return (
    <div className="w-full">
      {userList && onFilterChange ? (
        <>
          <label htmlFor="roleFilter">Filtrar por rol:</label>
          <select
            id="roleFilter"
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => onFilterChange(e.target.value)}
          >
            <option value="all">Todos</option>
            {uniqueRoles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </>
      ) : (
        <Skeleton variant="subtitle" />
      )}
    </div>
  );
}
