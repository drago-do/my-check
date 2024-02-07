"use client";
import React, { useState, useEffect } from "react";
import PaginationButtons from "@/components/general/PaginationButtons";

const CategoriesTable = ({ categories, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const componentsHeaderSize = 200;

  useEffect(() => {
    function calculateItemsPerPage(rowHeight) {
      const windowHeight = window.innerHeight || null;
      const availableHeight = windowHeight - componentsHeaderSize;
      const tableHeight = availableHeight * 0.37;
      const itemsPerPage = Math.floor(tableHeight / rowHeight);
      return itemsPerPage;
    }
    setItemsPerPage(calculateItemsPerPage(35));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  //Search parent name categoric
  const searchParent = (id) => {
    let parent = categories.find((category) => category._id === id);
    if (parent) {
      return parent.name;
    }
    return "No tiene";
  };

  return (
    <div className="responsive-table">
      <div className="relative overflow-x-auto shadow-md rounded-xl my-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre de categoría
              </th>
              <th scope="col" className="px-6 py-3">
                Descripcion
              </th>
              <th scope="col" className="px-6 py-3">
                Elemento padre
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((category, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {category.name}
                </td>
                <td className="px-6 py-2">{category.description}</td>
                <td className="px-6 py-2">{searchParent(category.parent)}</td>
                <td className="flex items-center px-6 py-2">
                  <button
                    onClick={() => onEdit(category)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => {
                      onDelete(category);
                    }}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className={`flex overflow-x-auto justify-center w-full pb-16`}>
        <PaginationButtons
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default CategoriesTable;
