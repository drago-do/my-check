// UserMenu.js
import React, { useEffect, useState, useRef } from "react";
import ListGroupMenu from "./../../general/ListGroupMenu";

const negativeMenuXPosition = 220;

const UserOptionsMenu = ({ isMenuOpen, setIsMenuOpen, menuItems }) => {
  const menuRef = useRef();
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsMenuOpen, setMenuPosition]);

  useEffect(() => {
    if (isMenuOpen) {
      const { x, y, height } = menuRef.current.getBoundingClientRect();
      setMenuPosition({ x: x - negativeMenuXPosition, y: y + height });
    }
  }, [isMenuOpen]);

  return isMenuOpen ? (
    <div
      className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      ref={menuRef}
    >
      <ListGroupMenu menuItems={menuItems} menuPosition={menuPosition} />
    </div>
  ) : null;
};

export default UserOptionsMenu;
