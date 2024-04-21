import Link from "next/link";
import React from "react";

export default function ListGroupMenu({
  menuItems,
  menuPosition,
  idForOnClick,
  handleCloseListGroupMenu,
}) {
  return (
    <div
      className="w-48 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white fixed z-10"
      style={{ top: menuPosition.y, left: menuPosition.x }}
    >
      {menuItems.map((item, index) =>
        item.href ? (
          <Link
            key={index}
            href={item.href}
            onClick={() => {
              handleCloseListGroupMenu();
            }}
            className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            {item.icon}
            {item.name}
          </Link>
        ) : (
          <button
            key={index}
            type="button"
            onClick={() => {
              item.onClick(idForOnClick || null);
              handleCloseListGroupMenu();
            }}
            className={`${
              item.name === "Eliminar"
                ? "relative inline-flex items-center w-full px-4 py-2 text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                : "relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            }`}
          >
            {item.icon}
            {item.name}
          </button>
        )
      )}
    </div>
  );
}
