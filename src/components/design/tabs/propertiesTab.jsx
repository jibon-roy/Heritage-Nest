import { useState } from "react";
import LandingCard from "../LandingCard";

export default function PropertiesTab({ properties }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = properties?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(properties?.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div>
        {currentItems?.map((property, key) => (
          <div key={key}>
            <LandingCard property={property} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <hr className="my-5 h-[2px] bg-gray-300 max-w-4xl" />
      <div className="flex mt-4">
        {/* <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 hover:bg-blue-100 mx-1 bg-gray-200 text-gray-600 rounded"
        >
          Previous
        </button> */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 hover:bg-blue-100 bg-gray-200 text-gray-600 rounded"
        >
          Next
        </button>
      </div>
    </>
  );
}
