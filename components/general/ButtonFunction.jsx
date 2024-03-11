import React, { useState } from "react";

const ButtonFunction = ({
  children,
  variant = "default",
  type = "button",
  onClick,
  onLoading = false,
  animateButton,
}) => {
  const [animate, setAnimate] = useState(false);

  const baseStyles =
    "focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2";
  const variants = {
    default:
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    alternative:
      "py-2.5 px-5 text-sm font-medium text-white-900 bg-white rounded-lg border border-teal-200 hover:bg-teal-100 hover:text-white-700 focus:z-10 focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-700 dark:bg-teal-800 dark:text-white-400 dark:border-teal-600 dark:hover:text-white dark:hover:bg-teal-700",
    dark: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    light:
      "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700",
    green:
      "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    red: "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
    yellow:
      "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",
    purple:
      "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
  };

  const variantStyles = variants[variant] || variants.default;
  // Función para manejar el evento de clic y activar la animación
  const handleClick = (event) => {
    // Si hay una función onClick pasada en las props, ejecútala
    if (onClick) {
      onClick(event);
    }

    // Activar la animación
    setAnimate(true);

    // Esperar hasta que la animación se complete y luego desactivarla
    setTimeout(() => {
      setAnimate(false);
    }, 300); // 400ms es la duración de la animación
  };
  return (
    <>
      {onLoading ? (
        <button
          type={type}
          className={`${baseStyles} ${variantStyles}  my-4 grid grid-flow-col gap-4 justify-center items-center`}
          disabled
        >
          <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
        </button>
      ) : (
        <button
          type={type}
          className={`${baseStyles} ${variantStyles} ${
            animate ? "click-animate" : ""
          } my-4 grid grid-flow-col gap-4 justify-center items-center`}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default ButtonFunction;
