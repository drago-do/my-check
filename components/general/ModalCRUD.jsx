import React from "react";
import MaterialIcon from "./MaterialIcon";

const Modal = ({ children, title, isOpen, handleClose }) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={handleBackdropClick}
          className="w-full fixed inset-0 z-50 flex justify-center items-center px-4 py-8 overflow-y-auto overflow-x-hidden bg-gray-500 bg-opacity-50"
        >
          <div className="relative w-full max-w-5xl md:m-16 h-auto bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="w-full flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title || "Modal Title"}
              </h3>
              <button
                onClick={handleClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <MaterialIcon iconName="close" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div
              className="p-4 md:p-5 overflow-y-auto"
              style={{ maxHeight: "75vh" }}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
