import React from "react";

export default function Container({ children, className }) {
  return (
    <div className="w-full mt-10 pt-12">
      <div className={`mx-4  ${className}`}>{children}</div>{" "}
    </div>
  );
}
