import React from "react";

export default function Container({ children, className }) {
  return (
    <div className="w-full h-dvh mt-20">
      <div className={`mx-4  ${className}`}>{children}</div>{" "}
    </div>
  );
}
