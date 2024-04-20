import { useEffect } from "react";
import { setActualUser_ } from "../redux/actualUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSession, signOut } from "next-auth/react";
import axios from "axios";
import { toast } from "sonner";

export const useActualUser = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const actualUser = useSelector((state) => state.actualUser);

  // Solo ejecuta la petición si no hay información del usuario actual en Redux y hay sesión activa
  useEffect(() => {
    if (!actualUser && session?.user?.email) {
      fetchAndSetUserInfo(session.user.email);
    }
  }, [session, actualUser, dispatch]);

  const fetchAndSetUserInfo = async (email) => {
    try {
      const response = await axios.get(`/api/v1/user/get-one/${email}`);
      dispatch(setActualUser_(response.data.data)); // Asume que response.data.data contiene la info del usuario
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
    dispatch(setActualUser_(null)); // Limpia el usuario actual de Redux al cerrar sesión
  };
  const createNewUser = async (data) => {
    try {
      const response = await axios.post("/api/user", data);
      console.log(response.data);
      toast.success("Usuario creado", {
        description: `Ahora puedes iniciar sesión.`,
      });
      // Actualizar el usuario actual en Redux con la respuesta de la API
      dispatch(setActualUser_(response.data));
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
