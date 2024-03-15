import { setUsersList_ } from "../redux/usersListSlice";
import { useDispatch, useSelector } from "react-redux";

export const useUserList = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);

  const setUserList = () => {
    dispatch(setUsersList_());
  };

  const getUserPerRole = (role) => {
    if (role === "all") {
      return usersList;
    } else {
      return usersList.filter((user) => user.role === role);
    }
  };

  return { usersList, setUserList, getUserPerRole };
};

export default useUserList;
