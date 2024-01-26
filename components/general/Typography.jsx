import React from "react";

export default function Typography({ variant, children }) {
  const classTypography = {
    title: "my-4 text-4xl font-bold text-gray-800 dark:text-gray-100",
    subtitle: "my-4 text-2xl font-bold text-gray-800 dark:text-gray-100",
    caption: "text-sm text-italic text-gray-500 dark:text-gray-400",
    p: "my-2 text-base font-normal text-gray-800 dark:text-gray-100",
  };

  function getVariant() {
    if (variant === "title") {
      return classTypography.title;
    }
    if (variant === "subtitle") {
      return classTypography.subtitle;
    }
    if (variant === "caption") {
      return classTypography.caption;
    }
    if (variant === "p") {
      return classTypography.p;
    }
  }
  return <div className={getVariant(variant)}>{children}</div>;
}
