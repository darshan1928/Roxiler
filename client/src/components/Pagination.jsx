import React from 'react'

export default function Pagination({ currentPage, setCurrentPage }) {

  const handleNextPage = () => {
    // Increment currentPage and trigger API call for the next page.
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      // Decrement currentPage and trigger API call for the previous page.
    }
  };
  return (
    <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-800 text-white"
          onClick={handlePreviousPage}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-800 text-white"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
  )
}
