"use client";
import React, { useState, useEffect } from "react";
import PaginationButtons from "@/components/general/PaginationButtons";

const ProductsTable = ({ products }) => {
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
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="responsive-table">
      <div className="relative overflow-x-auto shadow-md rounded-xl my-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Units
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Size
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((product, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.name}
                </td>
                <td className="px-6 py-2">${product.price}</td>
                <td className="px-6 py-2">{product.units}</td>
                <td className="px-6 py-2">Pomos</td>
                <td className="px-6 py-2">{product.size}</td>
                <td className="flex items-center px-6 py-2">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    Remove
                  </a>
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

export default ProductsTable;
