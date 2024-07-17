// src/Coin.js
import React from 'react';
import './Coin.css';

const Coin = ({ name, icon, price, symbol, marketCap, priceChange }) => {
  return (
    <div className="coin">
      <img src={icon} alt={`${name} icon`} />
      <h1>{name} ({symbol.toUpperCase()})</h1>
      <p>Current Price: ${price.toLocaleString()}</p>
      <p>Market Cap: ${marketCap.toLocaleString()}</p>
      <p>Change (24h): {priceChange.toFixed(2)}%</p>
    </div>
  );
};

export default Coin;
