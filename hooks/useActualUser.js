import { setActualUser_ } from "../redux/actualUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSession, signOut } from "next-auth/react";
import axios from "axios";
import { toast } from "sonner";

export const useActualUser = () => {
  const dispatch = useDispatch();
  const actualUser = useSelector((state) => state.actualUser);

  const setActualUser = (userData) => {
    dispatch(setActualUser_(userData));
  };

  const singOutUser = () => {
    signOut();
    setActualUser(null);
  };

  const createNewUser = (data) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/user", data)
        .then((response) => {
          //setAsActualUser(response.data);
          console.log(response.data);
          toast.success("Usuario creado", {
            description: `Ahora puedes iniciar sesión.`,
          });
          resolve(response);
        })
        .catch((error) => {
          console.error(error);
          //Obtiene el mensaje de error de la respuesta
          const message = error?.message || "Error desconocido";

          toast.error("Error al crear usuario", {
            description: `Parece que hubo un error al crear usuario.
            ${message}`,
          });
          reject(error);
        });
    });
  };

  const checkUserBusinessAccess = (userId) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/api/v1/user/businessAccess/${userId}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.error(error);
          //Obtiene el mensaje de error de la respuesta
          const message = error?.message || "Error desconocido";

          toast.error("Error al obtener acceso a negocios", {
            description: `Parece que hubo un error al obtener acceso a negocios.
            ${message}`,
          });
          reject(error);
        });
    });
  };

  const getUserInfoOnLogIn = (email) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/api/v1/user/getOne/${email}`)
        .then((response) => {
          console.log(response.data.data);
          setActualUser(response.data.data);
          resolve(response.data);
        })
        .catch((error) => {
          console.error(error);
          //Obtiene el mensaje de error de la respuesta
          const message = error?.message || "Error desconocido";

          toast.error("Error al obtener información de usuario", {
            description: `Parece que hubo un error al obtener información de usuario.
             ${message}`,
          });
          reject(error);
        });
    });
  };

  return {
    actualUser,
    setActualUser,
    createNewUser,
    checkUserBusinessAccess,
    getUserInfoOnLogIn,
    singOutUser,
  };
};

export default useActualUser;
