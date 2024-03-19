import React from "react";

export default function Container({ children, className, style }) {
  return (
    <div className="w-full">
      <div className={`mx-1 md:mx-4  ${className}`} style={style}>
        {children}
      </div>{" "}
    </div>
  );
}
