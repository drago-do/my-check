"use client";
import React, { useState } from "react";
import Skeleton from "@/components/general/Skeleton";
import Typography from "./Typography";
import ButtonFunction from "./ButtonFunction";

const SearchField = ({ list, handleViewResult }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length === 0) {
      setResults([]);
    } else {
      const filteredResults = list.filter((item) =>
        Object.values(item).some((value) =>
          value
            .toString()
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        )
      );
      setResults(filteredResults);
    }
  };

  return (
    <div className="flex flex-col flex-nowrap">
      {list ? (
        <>
          <div className="relative w-full ">
            <input
              type="search"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              required
            />
          </div>
          {results.length > 0 && (
            <>
              <Typography variant={"subtitle"}>Resultados</Typography>
              <div className="results">
                {results.map((item, index) => (
                  <ButtonFunction
                    onClick={() => handleViewResult(item)}
                    key={index}
                  >
                    {JSON.stringify(item.name)}
                  </ButtonFunction>
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <Skeleton variant={"autocompleteInput"} />
      )}
    </div>
  );
};

export default SearchField;
