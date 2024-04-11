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
    console.log(email);
    return new Promise((resolve, reject) => {
      axios
        .get(`/api/v1/business/user-invited/${email}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return {
    actualBusiness,
    setActualBusiness,
    getUserBusinessInvitations,
  };
};

export default useActualBusiness;
