import React, { useState, useEffect, useContext, createContext } from "react";

import { Dropzone, FileMosaic } from "@files-ui/react";
import Dialog from "../Modal";
import Image from "next/image";
import ErrorBoxInfo from "./../AlertItem";
import Typography from "./../Typography";
import InputForm from "./InputForm";
import MaterialIcon from "../MaterialIcon";
import Skeleton from "./../Skeleton";

const FotoData = createContext();

//{
//   data: "",
//   contentType: "",
//   url: true,
//   link: "",
// }

export default function UploadPicture({
  handlePictureData,
  pictureData,
  style,
}) {
  const [fotoData, setFotoData] = useState(pictureData);
  const contextValue = {
    fotoData,
    setFotoData,
  };

  useEffect(() => {
    handlePictureData(fotoData);
  }, [fotoData]);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    pictureData?.url ? "web" : "local"
  );

  const handleClickDialog = (value) => {
    setOpenDialog(true);
    setSelectedValue(value);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDeleteImage = () => {
    setFotoData(null);
  };

  return (
    <>
      <div
        className="w-full text-center flex flex-col  max-w-sm p-5 m-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        color="secondary"
      >
        {fotoData && (
          <div className="flex flex-col items-center flex-nowrap">
            <Typography variant="subtitle">Imagen seleccionada:</Typography>
            <div
              style={{ width: "200px", height: "200px", overflow: "hidden" }}
            >
              <Image
                src={
                  selectedValue === "local"
                    ? `data:${fotoData.contentType};base64, ${fotoData.data}`
                    : fotoData.link
                }
                alt="Selected image"
                width={200}
                height={200}
                onClick={handleDeleteImage}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <Typography variant="caption" display="block" gutterBottom>
              Click en la imagen para eliminar la selección.
            </Typography>
          </div>
        )}
        {fotoData === null && (
          <>
            <div className="flex w-full justify-around mb-5">
              <button
                type="button"
                onClick={() => handleClickDialog("local")}
                className="flex flex-col text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center  items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              >
                <MaterialIcon iconName={"add_photo_alternate"} />
                <p className="hidden md:block">Subir fotografía</p>
              </button>
              <button
                type="button"
                onClick={() => handleClickDialog("web")}
                className="flex flex-col text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center  items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              >
                <MaterialIcon iconName={"captive_portal"} />
                <p className="hidden md:block">Buscar en internet</p>
              </button>
            </div>
            <p>Sube una foto o busca una en internet.</p>
          </>
        )}
      </div>
      <FotoData.Provider value={contextValue}>
        <LocalOrWebImage
          selectedValue={selectedValue}
          open={openDialog}
          onClose={handleCloseDialog}
        />
      </FotoData.Provider>
    </>
  );
}

function LocalOrWebImage({ onClose, open, selectedValue }) {
  return (
    <Dialog
      title={`Subir nueva imagen ${selectedValue}`}
      isOpen={open}
      handleClose={onClose}
    >
      {selectedValue !== "local" ? (
        <WebUploadDialog handleCloseDialog={onClose} />
      ) : (
        <div className="m-3 md:m-12">
          <LocalUploadDialog handleCloseDialog={onClose} />
        </div>
      )}
    </Dialog>
  );
}

const WebUploadDialog = ({ handleCloseDialog }) => {
  //TODO, agregar hook del sistema para obtener imágenes de internet
  // const { getSearchResults } = useSystem();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState("inicio");

  useEffect(() => {
    if (query !== "" && query.length > 3) {
      setSearchResults("cargando");
      setTimeout(() => {
        console.log("cargando");
      }, 2000);
      console.log(query);
      //TODO agregar lógica para asignación de imágenes
      // getSearchResults(query)
      //   .then((response) => setSearchResults(response))
      //   .catch((err) => {
      //     console.log(err);
      //     let errorForUser = `${err.code}: ${err.message}`;
      //     setSearchResults([{ error: errorForUser }]);
      //   });
    }
    query === "" && setSearchResults("inicio");
  }, [query]);

  const deleteImage = (index) => {
    const updatedImages = [...searchResults];
    updatedImages.splice(index, 1);
    setSearchResults(updatedImages);
  };

  return (
    <div className="px-5 pb-5 h-4/5">
      <InputForm
        extraProperties={{ onChange: (e) => setQuery(e.target.value) }}
      />
      <div
        style={{
          opacity: query !== query ? 0.5 : 1,
        }}
      >
        <RenderSearchResults
          searchArray={searchResults}
          deleteImage={deleteImage}
          handleCloseDialog={handleCloseDialog}
        />
      </div>
    </div>
  );
};

const RenderSearchResults = ({
  searchArray,
  deleteImage,
  handleCloseDialog,
}) => {
  const { _, setFotoData } = useContext(FotoData);
  const [displayedImages, setDisplayedImages] = useState(16);

  const loadMoreImages = () => {
    setDisplayedImages(displayedImages + 8);
  };

  const handleSelectImage = (image) => {
    setFotoData({ data: "", contentType: "", url: true, link: image.url });
    handleCloseDialog();
  };

  return (
    <div
      className={`grid grid-cols-${
        Array.isArray(searchArray) ? "2" : "1"
      }  md:grid-cols-${Array.isArray(searchArray) ? "3" : "1"} lg:grid-cols-${
        Array.isArray(searchArray) ? "4" : "1"
      } gap-4 place-content-center`}
    >
      {searchArray === "inicio" && (
        <div className="m-12 flex flex-col items-center">
          <MaterialIcon iconName="image_search" />
          <p>Realiza una búsqueda en internet</p>
        </div>
      )}

      {searchArray === "cargando" && (
        <div className="m-12 flex flex-col items-center">
          <Skeleton variant={"list"} />
        </div>
      )}

      {Array.isArray(searchArray) &&
        searchArray.slice(0, displayedImages).map((imagen, index) => {
          if (imagen.error) {
            return (
              <ErrorBoxInfo
                key={index}
                type={"error"}
                title={"Oops!"}
                message={"Parece que hubo un error al realizar la búsqueda."}
              />
            );
          } else {
            try {
              return (
                <button
                  type="button"
                  className="w-full overflow-hidden text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                  key={index}
                  onClick={() => handleSelectImage(imagen)}
                >
                  <img
                    className="rounded object-contain transition-opacity opacity-0 duration-[1s]"
                    src={imagen?.url}
                    alt={"image" + index}
                    width={200}
                    height={200}
                    onError={() => deleteImage(index)}
                    onLoad={(e) => {
                      e.target.classList.add("opacity-100");
                    }}
                  />
                </button>
              );
            } catch (error) {
              return <h2>Error {error}</h2>;
            }
          }
        })}

      {displayedImages < searchArray.length && (
        <button
          type="button"
          className="col-span-2 md:col-span-4 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          onClick={loadMoreImages}
        >
          Mostrar más
        </button>
      )}
    </div>
  );
};

function LocalUploadDialog({ handleCloseDialog }) {
  const { _, setFotoData } = useContext(FotoData);
  const [isFileTypeValid, setIsFileTypeValid] = useState(true);
  const [files, setFiles] = useState([]);

  const handleSelectImage = async () => {
    let foto = await files[0].file.arrayBuffer();
    //Convertir foto a base64
    foto = arrayBufferToBase64(foto);
    setFotoData({ data: foto, contentType: files[0].file.type, url: false });
    handleCloseDialog();
  };

  function arrayBufferToBase64(buffer) {
    const binaryArray = new Uint8Array(buffer);
    let base64String = "";

    for (let i = 0; i < binaryArray.length; i += 3) {
      const chunk = binaryArray.slice(i, i + 3);
      base64String += btoa(String.fromCharCode.apply(null, chunk));
    }

    return base64String;
  }

  const updateFile = (newFiles) => {
    // Establece el nuevo estado de los archivos
    setFiles(newFiles);

    // Comprueba la validez del archivo, por ejemplo, por tipo MIME si es una imagen
    const isValid = newFiles.every((file) => file.type.startsWith("image/"));
    setIsFileTypeValid(isValid);
  };

  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <div className="my-14">
      <Dropzone
        style={{ borderColor: "rgb(var(--primary-color))", color: "#c2c2c2" }}
        onChange={updateFile}
        value={files}
        label="Arrastra tus archivos o haz click para seleccionar un archivo"
        accept="image/*"
        maxFiles={1}
        localization="ES-es"
        uploadConfig={{ autoUpload: false }}
      >
        {files.map((file) => (
          <FileMosaic
            {...file}
            key={file.id}
            onDelete={removeFile}
            resultOnTooltip
            alwaysActive
            preview
            info
          />
        ))}
      </Dropzone>
      <button
        type="button"
        className={`${
          files.length > 0 ? "block" : "hidden"
        } mt-4 w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        onClick={handleSelectImage}
        disabled={!isFileTypeValid || files.length === 0}
      >
        Seleccionar
      </button>
    </div>
  );
}
