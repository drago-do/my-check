"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ButtonLink = ({ title, subtitle, icon, href }) => {
  const { push } = useRouter();
  const handlePushButton = (_) => push(href);
  return (
    <button
      type="button"
      onClick={handlePushButton}
      className="w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
    >
      {icon && (
        <span className="w-6 h-5 me-2 -ms-1" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="w-full flex flex-col justify-start text-start">
        <span className="block">{title}</span>
        {subtitle && (
          <span className="block text-xs text-gray-500">{subtitle}</span>
        )}
      </span>
    </button>
  );
};

export default ButtonLink;
