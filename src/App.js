// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './Coin';
import { fetchTopCryptos } from './cryptoService';
import './App.css';

function App() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTopCryptos();
      setCryptoData(data);
    };
    fetchData();
  }, []);

  const handleRefresh = async () => {
    const data = await fetchTopCryptos();
    setCryptoData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cryptocurrency Price Tracker</h1>
        <button onClick={handleRefresh}>Refresh</button>
      </header>
      <div className="crypto-list">
        {cryptoData.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.name}
            icon={coin.image}
            price={coin.current_price}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
