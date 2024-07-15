"use client";
import axios from "axios";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import useUser from "./useUser";

const getSavedBusinessData = () => {
  try {
    const savedBusinessData = localStorage.getItem("businessInfo");
    return savedBusinessData ? JSON.parse(savedBusinessData) : null;
  } catch (_) {
    return null;
  }
};

export const useActualBusiness = () => {
  const { push } = useRouter();
  const { user } = useUser();
  const { email } = user || "";
  const [actualBusiness, setActualBusiness] = useState(getSavedBusinessData);

  const {
    data: businessesAccess,
    error: errorBusinessesAccess,
    isLoading: isLoadingBusinessesAccess,
  } = useSWR(email ? `/api/v1/user/business-access/${email}` : null);
  const {
    data: businessInvitations,
    error: errorInvitations,
    isLoading: isLoadingInvitations,
  } = useSWR(email ? `/api/v1/business/user-invited/${email}` : null);

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

  const choseActualBusiness = async (_idBusiness) => {
    try {
      const response = await axios.get(`/api/v1/business/crud/${_idBusiness}`);
      setActualBusiness(response.data.data);
      localStorage.setItem("businessInfo", JSON.stringify(response.data.data));
      return response.data.data;
    } catch (error) {
      toast.error("Error al obtener el negocio", {
        description: `Parece que hubo un error. ${error.message}`,
      });
      throw error;
    }
  };

  const istABusinessSelected = () => {
    return actualBusiness ? actualBusiness._id : false;
  };

  const getAllUsersWithAccesToBussines = async () => {
    const bussines = getSavedBusinessData();
    const bussinesID = bussines ? bussines._id : false;
    if (!bussinesID) {
      toast.error("Error", {
        description: `Primero seleccione un negocio`,
      });
      return false;
    }
    try {
      const response = await axios.get(
        `/api/v1/business/${bussinesID}/user-with-access`
      );
      return response.data;
    } catch (error) {
      toast.error("Error al obtener los usuarios con acceso a los negocios", {
        description: `Parece que hubo un error. ${error.message} ${error.response.data.message}`,
      });
      return [];
    }
  };

  const sendInvitationToActualBusiness = (invitedUser) => {
    return new Promise(async (resolve, reject) => {
      const bussines = getSavedBusinessData();
      const bussinesID = bussines ? bussines._id : false;
      if (!bussinesID) {
        toast.error("Error", {
          description: `Primero seleccione un negocio`,
        });
        return resolve(false);
      }
      const data = {
        businessId: bussinesID,
        invitedUser,
      };
      console.log(data);
      try {
        const response = await axios.post(
          `/api/v1/business/user-invited`,
          data
        );
        toast.success("Usuario invitado", {
          description: `Se ha enviado la invitation a ${data?.invitedUser?.email}`,
        });
        resolve(response.data.message);
      } catch (error) {
        toast.error("Error al enviar la invitation", {
          description: `Parece que hubo un error. ${error.message} ${error.response.data.message}`,
        });
        resolve(false);
      }
    });
  };

  return {
    businessesAccess,
    errorBusinessesAccess,
    isLoadingBusinessesAccess,
    businessInvitations,
    errorInvitations,
    isLoadingInvitations,
    actualBusiness,
    setActualBusiness,
    acceptBusinessInvitation,
    choseActualBusiness,
    istABusinessSelected,
    getAllUsersWithAccesToBussines,
    sendInvitationToActualBusiness,
  };
};

export default useActualBusiness;
