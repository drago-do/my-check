// UserMenu.js
import React, { useEffect, useState, useRef } from "react";
import ListGroupMenu from "./ListGroupMenu";

const negativeMenuXPosition = 220;

const ContextualContainer = ({
  isContextualOpen,
  setIsContextualOpen,
  menuItems,
  idForOnClick,
}) => {
  const menuRef = useRef();
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsContextualOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsContextualOpen, setMenuPosition]);

  const handleCloseListGroupMenu = () => {
    setIsContextualOpen(false);
  };

  useEffect(() => {
    if (isContextualOpen) {
      const { x, y, height } = menuRef.current.getBoundingClientRect();
      setMenuPosition({ x: x - negativeMenuXPosition, y: y + height });
    }
  }, [isContextualOpen]);

  return isContextualOpen ? (
    <div
      className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      ref={menuRef}
    >
      <ListGroupMenu
        menuItems={menuItems}
        idForOnClick={idForOnClick}
        menuPosition={menuPosition}
        handleCloseListGroupMenu={handleCloseListGroupMenu}
      />
    </div>
  ) : null;
};

export default ContextualContainer;
