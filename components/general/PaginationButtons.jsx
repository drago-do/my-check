import React from "react";
import MaterialIcon from "./../general/MaterialIcon";

export default function PaginationButtons({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) {
  const onNextPage = () =>
    currentPage <= totalPages ? onPageChange(currentPage + 1) : null;

  const onPreviousPage = () =>
    currentPage > 1 ? onPageChange(currentPage - 1) : null;
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Mostrando{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {currentPage}
          </span>
          de
          <span className="font-semibold text-gray-900 dark:text-white">
            {totalPages}
          </span>{" "}
          paginas
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={onPreviousPage}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <MaterialIcon iconName="arrow_back_ios" />
            Anterior
          </button>
          <button
            onClick={onNextPage}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Siguiente
            <MaterialIcon iconName="arrow_forward_ios" />
          </button>
        </div>
      </div>
    </>
  );
}
