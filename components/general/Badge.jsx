import React, { useState } from "react";

const Badge = ({
  children,
  color,
  pill,
  onClick,
  icon,
  large,
  onDelete,
  loading = false,
  className,
}) => {
  const [animate, setAnimate] = useState(false);
  const baseStyle =
    "bg-gray-100  text-gray-800 font-medium flex  flex-nowrap  items-baseline items-center px-2.5 py-0.5 rounded me-1 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ";
  const pillStyle = pill ? "rounded-full" : "rounded";
  const colorStyles = {
    blue: "bg-blue-100 text-blue-800 font-medium  me-2 px-2.5 py-0.5 rounded dark:bg-blue-800 dark:text-blue-300",
    dark: "bg-gray-100 text-gray-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300",
    red: "bg-red-100 text-red-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
    green:
      "bg-green-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
    yellow:
      "bg-yellow-100 text-yellow-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
    indigo:
      "bg-indigo-100 text-indigo-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300",
  };

  const textSize = large ? "text-sm" : "text-xs";

  // Define the badge style based on the color prop
  const badgeStyle = colorStyles[color] ? colorStyles[color] : colorStyles.blue;

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

  return loading ? (
    <span
      className={`{bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 ${className}`}
    >
      Cargando...
    </span>
  ) : (
    <span
      className={`select-none inline-flex ${className} ${baseStyle} ${pillStyle} ${textSize} ${badgeStyle} ${
        onClick ? "cursor-pointer" : ""
      }
      ${animate ? "click-animate" : ""} `}
      onClick={onClick ? handleClick : null}
    >
      <div
        onClick={() => {
          onClick;
        }}
        className={`flex justify-center align-middle items-center ${className}`}
      >
        {icon}
        <span className="px-2 ">{children}</span>
      </div>
      {onDelete && (
        <span className="pl-2 z-10" onClick={onDelete}>
          <svg
            className="w-3 h-3 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </span>
      )}
    </span>
  );
};

export default Badge;
