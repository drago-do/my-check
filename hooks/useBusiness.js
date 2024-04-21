import axios from "axios";
import { toast } from "sonner";
import { useState, useEffect } from "react";

import useUser from "./useUser";

export const useActualBusiness = () => {
  const { actualUser } = useUser();
  const { email } = actualUser || {};
  const [actualBusiness, setActualBusiness] = useState(() => {
    try {
      const savedBusinessData = sessionStorage.getItem("businessInfo");
      return savedBusinessData ? JSON.parse(savedBusinessData) : null;
    } catch (_) {}
  });

  useEffect(() => {
    if (!actualBusiness && email) {
      getUserBusinessAccess()
        .then((businesses) => {
          if (businesses.length > 0) {
            setActualBusiness(businesses[0]);
            sessionStorage.setItem(
              "businessInfo",
              JSON.stringify(businesses[0])
            );
          }
        })
        .catch((error) => console.error("Failed to fetch businesses:", error));
    }
  }, [email, actualBusiness]);

  const getUserBusinessInvitations = async () => {
    try {
      const response = await axios.get(
        `/api/v1/business/user-invited/${email}`
      );
      return response.data.data;
    } catch (error) {
      toast.error("Error al obtener invitaciones", {
        description: `Parece que hubo un error. ${error.message}`,
      });
      throw error;
    }
  };

  const acceptBusinessInvitation = async (businessObjetInvitation) => {
    try {
      const response = await axios.post(
        `/api/v1/business/accept-invitation`,
        businessObjetInvitation
      );
      return response.data.data;
    } catch (error) {
      toast.error("Error al aceptar la invitación", {
        description: `Parece que hubo un error. ${error.message}`,
      });
      throw error;
    }
  };

  const getUserBusinessAccess = async () => {
    try {
      const response = await axios.get(`/api/v1/user/business-access/${email}`);
      return response.data.data;
    } catch (error) {
      toast.error("Error al obtener accesos", {
        description: `Parece que hubo un error. ${error.message}`,
      });
      throw error;
    }
  };

  const choseActualBusiness = async (_idBusiness) => {
    try {
      const response = await axios.get(`/api/v1/business/crud/${_idBusiness}`);
      setActualBusiness(response.data.data);
      sessionStorage.setItem(
        "businessInfo",
        JSON.stringify(response.data.data)
      );
      return response.data.data;
    } catch (error) {
      toast.error("Error al obtener el negocio", {
        description: `Parece que hubo un error. ${error.message}`,
      });
      throw error;
    }
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
