import React from "react";

export default function AlertItem({
  type,
  title = "No hay titulo",
  message = "No hay mensaje",
}) {
  let backgroundColor, textColor;

  switch (type) {
    case "info":
      backgroundColor = "bg-blue-50 dark:bg-gray-800";
      textColor = "text-blue-800 dark:text-blue-400";
      break;
    case "error":
      backgroundColor = "bg-red-50 dark:bg-gray-800";
      textColor = "text-red-800 dark:text-red-400";
      break;
    case "success":
      backgroundColor = "bg-green-50 dark:bg-gray-800";
      textColor = "text-green-800 dark:text-green-400";
      break;
    case "warning":
      backgroundColor = "bg-yellow-50 dark:bg-gray-800";
      textColor = "text-yellow-800 dark:text-yellow-300";
      break;
    case "dark":
      backgroundColor = "bg-gray-50 dark:bg-gray-800";
      textColor = "text-gray-800 dark:text-gray-300";
      break;
    default:
      backgroundColor = "bg-gray-50 dark:bg-gray-800";
      textColor = "text-gray-800 dark:text-gray-300";
  }

  return (
    <div
      className={`${backgroundColor} ${textColor} p-4 mb-4 text-sm rounded-lg`}
      role="alert"
    >
      <span className="font-extrabold">{title}:</span> {message}
    </div>
  );
}
