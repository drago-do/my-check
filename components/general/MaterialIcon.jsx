import React from "react";

export default function MaterialIcon({ iconName = "face", type = "outlined" }) {
  return <span className={`material-symbols-${type}`}>{iconName}</span>;
}
