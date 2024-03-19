import React from "react";

export default function MaterialIcon({
  iconName = "face",
  type = "outlined",
  className = "",
}) {
  return (
    <span className={`material-symbols-${type} ${className}`}>{iconName}</span>
  );
}
