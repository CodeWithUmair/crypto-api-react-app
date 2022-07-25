import React, { useState, useEffect } from "react";
import "./Coin.css";
import { axios } from "axios";
const Coin = () => {
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/bitcoin`;

  useEffect(() => {
    axios.get(url) / then;
  });

  return <></>;
};

export default Coin;
