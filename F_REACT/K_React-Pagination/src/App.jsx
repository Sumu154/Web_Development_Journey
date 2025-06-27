import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Pagination from './components/Pagination';

function App() {
  const [total, setTotal] = useState(0);
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Fetch total count
  useEffect(() => {
    const fetchTotalCount = async () => {
      try{
        setLoading(true);
        const res = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        );
        setTotal(res.data.length); // Set the total length of coins
      } 
      catch(e){
        console.error('Error fetching total count:', e);
      } 
      finally{
        setLoading(false);
      }
    };

    fetchTotalCount();
  }, []);
   

  // Fetch coins for the current page
  useEffect(() => {
    const fetchCoins = async () => {
      try{
        setLoading(true);
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${itemsPerPage}&page=${currentPage}`
          // `${serverEndpoint}/products?page=${currentPage}&size=${itemsPerPage}`  -> server theke fetch korte gele(ex: /products hole..)
        );
        setCoins(res.data);
      } 
      catch(e){
        console.error('Error fetching coins:', e);
      } 
      finally{
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currentPage, itemsPerPage]); // Add dependencies

  

  return (
    <>
      <h1> React Pagination Understanding </h1>
      <p> Total: {total} </p>

      {loading ? (
        <p>Loading...</p>
      ) 
      : (
        <div className="w-[70%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {coins.map((it, index) => (
            <div className="bg-slate-300 rounded-lg py-8" key={index}>
              <img className="w-[50%] mx-auto mb-2" src={it.image} alt="" />
              <p className="text-xl font-semibold"> {it.name} </p>
              <p> {it.current_price}$ </p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <Pagination total={total} itemsPerPage={itemsPerPage} currentPage={currentPage}  setCurrentPage={setCurrentPage}  
      />
    </>
  );
}

export default App;
