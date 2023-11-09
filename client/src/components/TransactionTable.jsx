import React, { useEffect, useState } from "react";
import axios from "axios";
export default function TransactionTable({
  selectedMonth,
  searchText,
  currentPage,
}) {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    fetchTransactions(selectedMonth, searchText, currentPage);
  }, [selectedMonth, searchText, currentPage]);
  const fetchTransactions = (month, search, page) => {
    const apiUrl = `http://localhost:8888/list-transactions?month=${month}`;

    axios
      .get(apiUrl)
      .then((response) => {
      console.log(response.data.transactions);
        setTransactions(response.data.transactions);
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
      });
  };
  return (
    <div className="p-4">
      <table className=" w-full border  ">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Sold</th>
            <th className="border px-4 py-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{transaction.title}</td>
              <td className="border px-4 py-2">{transaction.description}</td>
              <td className="border px-4 py-2">{`$${transaction.price.toFixed(
                2
              )}`}</td>
              <td className="border px-4 py-2">{transaction.category}</td>
              <td className="border px-4 py-2">
                {transaction.sold ? "Yes" : "No"}
              </td>
              <td className="border px-4 py-2">
                <img
                  src={transaction.image}
                  alt={transaction.title}
                  className="w-12 h-12"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
