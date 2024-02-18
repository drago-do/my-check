"use client";
import React, { useState } from "react";

const SwipeableDrawer = ({ children, title, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const drawerBaseStyles =
    "fixed inset-x-0 bottom-0 z-40 w-full bg-white border-t border-gray-200 rounded-t-lg shadow-lg dark:border-gray-700 dark:bg-gray-800 transition-all duration-300 ease-in-out";
  const drawerOpenStyles = "h-[85vh] overflow-y-auto";
  const drawerClosedStyles = "h-[4rem] overflow-hidden";

  const drawerStyles = `${drawerBaseStyles} ${
    isOpen ? drawerOpenStyles : drawerClosedStyles
  }`;

  const headerStyles =
    "p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 flex justify-center items-center sticky top-0 bg-white dark:bg-gray-800 ";

  return (
    <div className={drawerStyles}>
      <div
        className={headerStyles}
        onClick={toggleDrawer}
        aria-expanded={isOpen}
      >
        <span className=" absolute w-8 h-1 bg-gray-300 rounded-lg top-2 left-1/2 transform -translate-x-1/2 dark:bg-gray-600"></span>
        {icon}
        <h5
          id="drawer-swipe-label"
          className="w-full text-base text-gray-500 dark:text-gray-400 font-medium"
        >
          {title}
        </h5>
      </div>
      <div className="overflow-y-auto">{children}</div>
    </div>
  );
};

export default SwipeableDrawer;
