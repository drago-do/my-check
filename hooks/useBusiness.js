import { setActualBusiness_ } from "../redux/actualBusinessSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "sonner";

export const useActualBusiness = () => {
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
            ${message}`,
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
            ${message}`,
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
  };
};

export default useActualBusiness;
