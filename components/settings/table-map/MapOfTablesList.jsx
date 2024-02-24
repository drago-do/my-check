import Image from "next/image";
import React, { useState } from "react";
import Skeleton from "../../general/Skeleton";
import SmallImageViewer from "../../general/ImageViewer";
import Badge from "../../general/Badge";
import MaterialIcon from "../../general/MaterialIcon";
import ContextualContainer from "./../../general/ContextualContainer";
import Modal from "../../general/Modal";
import ImageViewer from "react-simple-image-viewer";

//ModalForms
import MapOfTablesForm from "./MapOfTablesForm";
import MapOfTablesDelete from "./MapOfTablesDelete";
import MapOfTablesView from "./MapOfTablesView";

export default function MapOfTablesList({ mapOfTablesList }) {
  const [currentImage, setCurrentImage] = useState(["/404.png"]);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const [isMenuOpen, setIsUserMenuOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "Default",
    body: "default  modal body text.",
    isOpen: false,
  });

  const getTableFromId = (id) => {
    return mapOfTablesList.find((tableMap) => tableMap._id === id);
  };

  const handleDelete = (id) => {
    const tableMap = getTableFromId(id);
    setModalInfo({
      ...modalInfo,
      title: `Eliminar ${tableMap.name}`,
      body: <MapOfTablesDelete tableMap={tableMap} handleClose={handleClose} />,
      isOpen: true,
    });
  };

  const handleEdit = (id) => {
    const tableMap = getTableFromId(id);
    setModalInfo({
      ...modalInfo,
      title: `Editar ${tableMap.name}`,
      body: <MapOfTablesForm tableMap={tableMap} handleClose={handleClose} />,
      isOpen: true,
    });
  };

  const handleView = (id) => {
    console.log("handleView", id);
    if (isViewerOpen) {
      setIsViewerOpen(false);
    } else {
      const tableMap = getTableFromId(id);
      setCurrentImage([tableMap.image.link]);
      setIsViewerOpen(true);
    }
  };

  const handleClose = () => {
    setModalInfo((prevModalInfo) => ({ ...prevModalInfo, isOpen: false }));
  };

  return (
    <div className="w-full">
      {isViewerOpen && (
        <ImageViewer
          src={currentImage}
          currentIndex={0}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={handleView}
        />
      )}
      <ul
        role="list"
        className="divide-y divide-gray-200 dark:divide-gray-700 p-2 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <Modal
          title={modalInfo.title}
          handleClose={handleClose}
          isOpen={modalInfo.isOpen}
        >
          {modalInfo.body}
        </Modal>
        {mapOfTablesList ? (
          mapOfTablesList.length > 0 ? (
            mapOfTablesList.map((tableMap) => (
              <li key={tableMap._id} className="py-3 px-3 sm:py-4">
                <div className="flex items-center max-h-24">
                  <div className="overflow-hidden">
                    <SmallImageViewer
                      fotoData={tableMap?.image}
                      className={
                        "max-h-16 max-w-16 aspect-square	 object-cover rounded-md"
                      }
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {`${tableMap.name}`}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {tableMap.description}
                    </p>
                    <div style={{ maxWidth: "8rem" }}>
                      <Badge color="indigo" className="max-w-1/3">
                        {`Mesas: ${tableMap.totalTables}`}
                      </Badge>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setIsUserMenuOpen(isMenuOpen ? null : tableMap._id)
                    }
                    type="button"
                    className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                  >
                    <MaterialIcon iconName="more_vert" />
                    <span className="sr-only">Mas opciones</span>
                  </button>
                  <ContextualContainer
                    menuItems={[
                      {
                        onClick: handleView,
                        icon: <MaterialIcon iconName="visibility" />,
                        name: "Ver Mapa de mesas",
                      },
                      {
                        onClick: handleEdit,
                        icon: <MaterialIcon iconName="border_color" />,
                        name: "Editar mapa de mesas",
                      },
                      {
                        onClick: handleDelete,
                        icon: <MaterialIcon iconName="delete" />,
                        name: "Eliminar",
                      },
                    ]}
                    idForOnClick={tableMap._id}
                    setIsContextualOpen={setIsUserMenuOpen}
                    isContextualOpen={isMenuOpen === tableMap._id}
                  />
                </div>
              </li>
            ))
          ) : (
            <li className="py-3 sm:py-4">
              <div
                className="flex items
        -center justify-center"
              >
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  No hay mapas de mesas aun
                </p>
              </div>
            </li>
          )
        ) : (
          <li className="py-3 sm:py-4">
            <div className="flex items-center justify-center">
              <Skeleton variant="list" />
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
