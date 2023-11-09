import React, { useState } from 'react';

function MonthSelector({selectedMonth, setSelectedMonth}) {



  return (<>
    <h1 className="text-3xl font-semibold mb-4">Transaction List</h1>
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2">Select a Month:</label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-800 border rounded py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11r">November</option>
          <option value="12">December</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 12.586l-4.293-4.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L10 12.586z"
            />
          </svg>
        </div>
      </div>
    </div>
    </>
  );
}

export default MonthSelector;
