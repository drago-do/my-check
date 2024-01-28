import React, { useState } from "react";
import MaterialIcon from "./MaterialIcon";

const ModalCURD = ({ children, title, isOpen, handleClose }) => {
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
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen overflow-y-auto overflow-x-hidden bg-gray-500 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title || "Modal sin titulo"}
                </h3>
                <button
                  onClick={handleClose}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <span className="sr-only">Close modal</span>
                  <MaterialIcon iconName="close" />
                </button>
              </div>
              <div className="p-4 md:p-5">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCURD;
