import React, { useEffect, useState } from "react";
import axios from "axios";
export default function TransactionTable({
  selectedMonth,
  searchText,
  currentPage,
}) {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchTransactions(selectedMonth, searchText, currentPage);
  }, [selectedMonth, searchText, currentPage]);
  const fetchTransactions = async(month, search, page) => {
    const apiUrl = `http://localhost:8888/list-transactions?month=${month}`;

   
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data.transactions);
      setTransactions(response?.data.transactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
 <div className="p-4">
      {loading ? (
        <h1 className="text-1xl text-white font-semibold">Loading...</h1>
      ) : (
        <table className="w-full border">
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
            {transactions ? (
              transactions.map((transaction, index) => (
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
              ))
            ) : (
              <h1 className="text-1xl text-white font-semibold">No data available.</h1>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
