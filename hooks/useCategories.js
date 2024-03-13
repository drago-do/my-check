import { setCategories_ } from "../redux/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";

export const useCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const setCategories = () => {
    dispatch(setCategories_());
  };

  return { categories, setCategories };
};

export default useCategories;
