"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MaterialIcon from "./MaterialIcon";
import ListGroupMenu from "./ListGroupMenu";
import Link from "next/link";

import useActualUser from "@/hooks/useActualUser";

const negativeMenuXPosition = 220;

export default function NavBarIndex() {
  const { actualUser } = useActualUser();
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const pathname = usePathname();
  //Get page name with pathname
  const pageName = (pathname?.split("/")[1] || "My Check")
    .replace(/-/g, " ") // Reemplaza los guiones por espacios
    .split(" ") // Divide la cadena en palabras
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza cada palabra
    .join(" "); // Une las palabras en una cadena

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(); // Referencia al menú desplegable

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isUserMenuOpen) {
      const { x, y, height } = userMenuRef.current.getBoundingClientRect();
      setMenuPosition({ x: x - negativeMenuXPosition, y: y + height });
    }
  }, [isUserMenuOpen]);

  // Evento para cerrar el menú cuando se hace clic fuera de él
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false); // Cierra el menú si el clic fue fuera
      }
    }

    // Agrega el listener al documento
    document.addEventListener("mousedown", handleClickOutside);

    // Elimina el listener al limpiar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuRef]); // Solo vuelve a suscribir si la ref cambia

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 absolute top-0 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo y enlace aquí */}
        <div className="flex items-center space-x-4 lg:order-1">
          <Link
            href="/main"
            className="flex items-center space-x-2 text-xl font-bold tracking-wide text-gray-800 dark:text-gray-50"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span>{pageName}</span>
          </Link>
        </div>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded={isUserMenuOpen}
            onClick={toggleUserMenu}
          >
            {/* Imagen del usuario */}
            <span className="sr-only">Abrir menú de usuario</span>
            <Image
              className="w-8 h-8 rounded-full"
              src="https://avatars.githubusercontent.com/u/18103336?v=4"
              width={40}
              height={40}
              alt="Usuario"
            />
          </button>
          {/* Menú desplegable del usuario */}
          {isUserMenuOpen && (
            <div
              className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
              ref={userMenuRef}
            >
              {/* Contenido del menú desplegable */}
              <ListGroupMenu
                menuItems={[
                  {
                    href: "/profile",
                    icon: <MaterialIcon iconName="person" />,
                    name: "Perfil",
                  },
                  {
                    href: "/settings",
                    icon: <MaterialIcon iconName="settings" />,
                    name: "Configuración",
                  },
                  {
                    href: "/logout",
                    icon: <MaterialIcon iconName="logout" />,
                    name: "Cerrar sesión",
                  },
                ]}
                menuPosition={menuPosition}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

const MenuButton = () => {
  return (
    <>
      <button
        data-collapse-toggle="navbar-user"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-user"
        aria-expanded={isMobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        {/* Ícono del menú */}
        <MaterialIcon iconName="menu" />
      </button>
      {isMobileMenuOpen && (
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          {/* Elementos del menú aquí */}
        </div>
      )}
    </>
  );
};
