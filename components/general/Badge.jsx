import React, { useState } from "react";
import MaterialIcon from "./MaterialIcon";

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
    "px-1  bg-gray-100  text-gray-800 font-medium flex  flex-nowrap  items-baseline items-center  rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ";
  const pillStyle = pill ? "rounded-full" : "rounded";
  const colorStyles = {
    blue: "bg-blue-100 text-blue-800 font-medium    rounded dark:bg-blue-800 dark:text-blue-300",
    dark: "bg-gray-100 text-gray-800 font-medium   rounded dark:bg-gray-700 dark:text-gray-300",
    red: "bg-red-100 text-red-800 font-medium   rounded dark:bg-red-900 dark:text-red-300",
    green:
      "bg-green-100 text-green-800 font-medium   rounded dark:bg-green-900 dark:text-green-300",
    yellow:
      "bg-yellow-100 text-yellow-800 font-medium   rounded dark:bg-yellow-900 dark:text-yellow-300",
    indigo:
      "bg-indigo-100 text-indigo-800 font-medium   rounded dark:bg-indigo-900 dark:text-indigo-300",
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
      className={`${baseStyle} bg-gray-100 text-gray-800 text-sm font-medium   rounded dark:bg-gray-700 dark:text-gray-300 ${className}`}
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
        <span>{children}</span>
        {onDelete && (
          <span className="z-10" onClick={onDelete}>
            <MaterialIcon iconName="delete" className="text-red-600" />
          </span>
        )}
      </div>
    </span>
  );
};

export default Badge;
