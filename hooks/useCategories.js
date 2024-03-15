import { setCategories_ } from "../redux/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";

export const useCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const setCategories = (newCategories) => {
    dispatch(setCategories_(newCategories));
  };

  return { categories, setCategories };
};

export default useCategories;
