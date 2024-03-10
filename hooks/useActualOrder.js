import {
  setOrderName_,
  addProduct_,
  deleteProduct_,
} from "./../redux/actualOrderSlice";
import { useDispatch, useSelector } from "react-redux";

export const useActualOrder = () => {
  const dispatch = useDispatch();
  const actualOrder = useSelector((state) => state.actualOrder);

  const setOrderName = (orderName) => {
    dispatch(setOrderName_(orderName));
  };

  const addProduct = (product) => {
    dispatch(addProduct_(product));
  };

  const deleteProduct = (addedAT) => {
    dispatch(deleteProduct_(addedAT));
  };

  return { actualOrder, setOrderName, addProduct, deleteProduct };
};

export default useActualOrder;
