import {
  setOrderList_,
  getPendentOrders_,
  getCompletedOrders_,
} from "../redux/orderListSlice";
import { useDispatch, useSelector } from "react-redux";

export const useOrderList = () => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orderList);

  const getPendentOrders = () => {
    dispatch(getPendentOrders_());
  };

  const getCompletedOrders = () => {
    dispatch(getCompletedOrders_());
  };

  return { orderList, getPendentOrders, getCompletedOrders };
};

export default useOrderList;
