import React from "react";
import Bar from "../pages/Bar";

export default function NavBar() {
  return (
    <div className=" bg-gray-800 flex  justify-between flex-col md:flex-row md:justify-between">
      <div className="w-full">
        <nav className="  p-4 text-white">
          <h1 className="text-1xl font-semibold">My Dashboard</h1>
        </nav>
      </div>

      <div className=" mx-auto p-4 bg-gray-800 flex flex-col md:flex-row md:space-between">
        <div className="mt-4 pr-4 md:mt-0">
          <h2 className="text-1xl text-white font-semibold mb-4">Statistics</h2>
        </div>
        <Bar />
        <div className=" mt-4 md:mt-0">
          <h2 className="text-1xl text-white font-semibold mb-4">
            {" "}
            Transactions
          </h2>
        </div>
      </div>
    </div>
  );
}
