import axios from "axios";
import { toast } from "sonner";

export const useSystem = () => {
  const getImagesFromServer = async (query) => {
    const response = await axios
      .post("/api/v1/external/image-search", { imageQuery: query })
      .then((res) => res)
      .catch((err) => {
        console.log(err);
        toast.error("Error al obtener imágenes", {
          description: `Parece que hubo un error al obtener las imágenes...`,
        });
      });
    return response.data;
  };

  return { getImagesFromServer };
};

export default useSystem;
