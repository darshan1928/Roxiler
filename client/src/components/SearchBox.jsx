import React from 'react';

function SearchBox({ searchText, setSearchText}) {
   const handleSearch = () => {
    // Trigger API call with search text.
  };
  return (
    <div className="mb-4">
    <label className="block text-sm font-semibold mb-2">Search Transactions:</label>
    <div className="relative">
      <input
        type="text"
        className="block w-full bg-gray-800 border rounded py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="absolute right-0 top-0 mt-2 mr-2 text-gray-900 bg-gray-300 rounded py-1 px-2 hover:bg-gray-400"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  </div>
  );
}

export default SearchBox;
