import { setActualBusiness_ } from "../redux/actualBusinessSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";

import useActualUser from "./useActualUser";

export const useActualBusiness = () => {
  const { actualUser } = useActualUser();
  const { email } = actualUser || {};
  const dispatch = useDispatch();
  const actualBusiness = useSelector((state) => state.actualBusiness);

  const setActualBusiness = (businessData) => {
    dispatch(setActualBusiness_(businessData));
  };

  const getUserBusinessInvitations = (email) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/api/v1/business/user-invited/${email}`)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          toast.error("Error al obtener invitaciones", {
            description: `Parece que hubo un error.
            ${error.message}`,
          });
          reject(error);
        });
    });
  };

  const acceptBusinessInvitation = (businessObjetInvitation) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`/api/v1/business/accept-invitation`, businessObjetInvitation)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          toast.error("Error al aceptar la invitación", {
            description: `Parece que hubo un error.
            ${error.message}`,
          });
          reject(error);
        });
    });
  };

  const getUserBusinessAccess = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/api/v1/user/business-access/${email}`)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          toast.error("Error al obtener accesos", {
            description: `Parece que hubo un error.
            ${error.message}`,
          });
          reject(error);
        });
    });
  };

  const choseActualBusiness = (_idBusiness) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/api/v1/business/crud/${_idBusiness}`)
        .then((response) => {
          setActualBusiness(response.data.data);
          resolve(response.data.data);
        })
        .catch((error) => {
          toast.error("Error al obtener el negocio", {
            description: `Parece que hubo un error.
            ${error.message}`,
          });
          reject(error);
        });
    });
  };

  return {
    actualBusiness,
    setActualBusiness,
    getUserBusinessInvitations,
    acceptBusinessInvitation,
    getUserBusinessAccess,
    choseActualBusiness,
  };
};

export default useActualBusiness;
