"use client";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import axios from "axios";
import { toast } from "sonner";

export const useActualUser = () => {
  const { data: session } = useSession();
  const [actualUser, setActualUser] = useState(() => {
    // Intentar recuperar los datos del usuario de sessionStorage al inicializar
    try {
      const savedUserData = sessionStorage?.getItem("userInfo");
      return savedUserData ? JSON.parse(savedUserData) : null;
    } catch (_) {}
  });

  useEffect(() => {
    // Si no hay datos en actualUser y hay sesión, intenta cargar los datos
    if (!actualUser && session?.user?.email) {
      fetchAndSetUserInfo(session.user.email);
    }
  }, [session]);

  const fetchAndSetUserInfo = async (email) => {
    try {
      const response = await axios.get(`/api/v1/user/get-one/${email}`);
      // Almacenar la información del usuario en el estado y en sessionStorage
      setActualUser(response.data.data);
      sessionStorage.setItem("userInfo", JSON.stringify(response.data.data));
    } catch (error) {
      console.error("Error al obtener información de usuario:", error);
      const errorMessage = error?.message || "Error desconocido";
      toast.error("Error al obtener información de usuario", {
        description: errorMessage,
      });
    }
  };

  const signOutUser = () => {
    signOut();
    // Limpiar sessionStorage y estado al cerrar sesión
    sessionStorage.removeItem("userInfo");
    setActualUser(null);
  };

  const createNewUser = async (data) => {
    try {
      const response = await axios.post("/api/user", data);
      console.log(response.data);
      toast.success("Usuario creado", {
        description: `Ahora puedes iniciar sesión.`,
      });
      // Actualiza la información del usuario en el estado y sessionStorage
      setActualUser(response.data);
      sessionStorage.setItem("userInfo", JSON.stringify(response.data));
      return response;
    } catch (error) {
      console.error(error);
      const message = error?.message || "Error desconocido";
      toast.error("Error al crear usuario", {
        description: `Parece que hubo un error al crear usuario. ${message}`,
      });
      throw error;
    }
  };

  return {
    actualUser,
    signOutUser,
    createNewUser,
  };
};

export default useActualUser;
