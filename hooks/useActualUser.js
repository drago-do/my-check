import { setActualUser_ } from "../redux/actualUserSlice";
import { useDispatch, useSelector } from "react-redux";

export const useActualUser = () => {
  const dispatch = useDispatch();
  const actualUser = useSelector((state) => state.actualUser);

  const setActualUser = () => {
    dispatch(setActualUser_());
  };

  return { actualUser, setActualUser };
};

export default useActualUser;
