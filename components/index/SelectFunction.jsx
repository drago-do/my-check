"use client";
import React, { useState } from "react";

export default function ButtonGroup({ handleSelect }) {
  const [activeButton, setActiveButton] = useState("order");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    handleSelect(buttonName);
  };

  const buttonClass = (buttonName) =>
    `px-4 py-2 text-sm font-medium border focus:z-10 focus:ring-2  dark:focus:ring-blue-500 dark:focus:text-white ` +
    `${
      activeButton === buttonName
        ? "bg-blue-500 text-white"
        : "text-gray-900 bg-white hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600"
    }`;

  return (
    <div className="inline-flex rounded-md shadow-sm mb-10" role="group">
      <button
        type="button"
        className={`${buttonClass("order")} rounded-l-lg border-gray-200`}
        onClick={() => handleButtonClick("order")}
      >
        Orden
      </button>
      <button
        type="button"
        className={`${buttonClass(
          "prepare"
        )} border-t border-b border-gray-200`}
        onClick={() => handleButtonClick("prepare")}
      >
        Preparar
      </button>
      <button
        type="button"
        className={`${buttonClass("checkout")} rounded-r-lg border-gray-200`}
        onClick={() => handleButtonClick("checkout")}
      >
        Caja
      </button>
    </div>
  );
}
