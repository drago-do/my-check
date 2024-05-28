"use client";
import axios from "axios";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import useSWR from "swr";

import useUser from "./useUser";

export const useActualBusiness = () => {
  const { user } = useUser();
  const { email } = user || "";
  const [actualBusiness, setActualBusiness] = useState(() => {
    try {
      const savedBusinessData = localStorage.getItem("businessInfo");
      return savedBusinessData ? JSON.parse(savedBusinessData) : null;
    } catch (_) {}
  });
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
  };
};

export default useActualBusiness;
