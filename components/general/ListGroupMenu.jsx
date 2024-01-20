import Link from "next/link";
import React from "react";

export default function ListGroupMenu({ menuItems }) {
  return (
    <div className="w-48 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white fixed right-16 top-16 z-10">
      {menuItems.map((item, index) =>
        item.href ? (
          <Link
            key={index}
            href={item.href}
            className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            {item.icon}
            {item.name}
          </Link>
        ) : (
          <button
            key={index}
            type="button"
            onClick={item.onClick}
            className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            {item.icon}
            {item.name}
          </button>
        )
      )}
    </div>
  );
}
