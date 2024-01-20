"use client";
import React, { useState } from "react";

export default function DrawerDownContainer({ icon, title, children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div
        id="drawer-swipe"
        className={`fixed z-40 w-full overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform bottom-0 left-0 right-0 ${
          isDrawerOpen ? "translate-y-0" : "translate-y-full"
        } bottom-[60px]`}
        tabIndex="-1"
        aria-labelledby="drawer-swipe-label"
      >
        <div
          className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
          onClick={toggleDrawer}
        >
          <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
          <h5
            id="drawer-swipe-label"
            className="inline-flex items-center text-base text-gray-500 dark:text-gray-400 font-medium"
          >
            {/* Icono y texto aquí */}
            {icon}
            {title}
          </h5>
        </div>
        {children}
      </div>
    </>
  );
}
