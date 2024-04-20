import React from "react";

export default function MaterialIcon({
  iconName = "face",
  type = "outlined",
  className = "",
  fontSize = 24,
}) {
  return (
    <span
      style={{ fontSize: `${fontSize}px` }}
      className={`material-symbols-${type} ${className}`}
    >
      {iconName}
    </span>
  );
}
