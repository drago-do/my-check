"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MaterialIcon from "./MaterialIcon";
import Link from "next/link";
import ImageViewer from "./ImageViewer";
import SimpleSpinLoader from "./SimpleSpinLoader";
import ContextualContainer from "./ContextualContainer";

import useUser from "@/hooks/useUser";

export default function NavBarIndex() {
  const { user, isLoading, signOutUser } = useUser();
  const [contextualMenu, setContextualMenu] = useState(false);

  const pathname = usePathname();
  //Get page name with pathname
  const pageName = (pathname?.split("/")[1] || "My Check")
    .replace(/-/g, " ") // Reemplaza los guiones por espacios
    .split(" ") // Divide la cadena en palabras
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza cada palabra
    .join(" "); // Une las palabras en una cadena

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
            onClick={() => setContextualMenu(true)}
          >
            {/* Imagen del usuario */}
            <span className="sr-only">Abrir menú de usuario</span>
            <div className="w-10 h-10">
              {!isLoading ? (
                <ImageViewer
                  className="w-8 h-8 rounded-full"
                  fotoData={user?.image}
                  alt={`${user?.firstName} ${user?.lastName} profile picture`}
                />
              ) : (
                <div className="flex justify-center items-center w-full h-full">
                  <SimpleSpinLoader />
                </div>
              )}
            </div>
          </button>
          <ContextualContainer
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
                href: "/businessAccess",
                icon: <MaterialIcon iconName="domain" />,
                name: "Negocios",
              },
              {
                onClick: signOutUser,
                icon: <MaterialIcon iconName="logout" />,
                name: "Cerrar sesión",
              },
            ]}
            setIsContextualOpen={setContextualMenu}
            isContextualOpen={contextualMenu}
          />
        </div>
      </div>
    </nav>
  );
}

//TODO fix this stupid component.
