"use client";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import axios from "axios";
import { toast } from "sonner";
import useSWR from "swr";

export const useUser = () => {
  const { data: session } = useSession();
  const {
    data: user,
    error,
    isLoading,
  } = useSWR(`/api/v1/user/get-one/${session?.user?.email}`);

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
    user,
    error,
    isLoading,
    signOutUser,
    createNewUser,
  };
};

export default useUser;
