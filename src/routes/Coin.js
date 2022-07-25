import React, { useState, useEffect } from "react";
import "./Coin.css";
import { useParams } from "react-router";
import { axios } from "axios";
const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <></>;
};

export default Coin;
