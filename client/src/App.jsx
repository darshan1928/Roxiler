import MonthSelector from "./components/MonthSelector";
import SearchBox from "./components/SearchBox";
import TransactionTable from "./components/TransactionTable";
import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState('March');

  useEffect(() => {
    axios.get('http://localhost:8888/initialize-transaction') 
    .then((response) => {
      console.log(response.data);
     setTransactions(response.data.transactions)
    })
    .catch((error) => {
      console.error(error);
    
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto p-4">
        <MonthSelector selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
        <TransactionTable selectedMonth={selectedMonth} />
        <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </div>
  );
}
