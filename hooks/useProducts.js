import { setProducts_ } from "../redux/productsSlice";
import { useDispatch, useSelector } from "react-redux";

export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const setProducts = () => {
    dispatch(setProducts_());
  };

  return { products, setProducts };
};

export default useProducts;
