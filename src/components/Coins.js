import React from "react";
import CoinItem from "./CoinItem";
import moment from "moment";

import { Link } from "react-router-dom";
import "./Coins.css";
import Coin from "./../routes/Coin";

const Coins = (props) => {
  return (
    <>
      <div className="container">
        <h5>{moment().format("MMMM Do YYYY, h:mm a")}</h5>
        <div>
          <div className="heading">
            <p>#</p>
            <p className="coin-name">Coin</p>
            <p>price</p>
            <p>24h</p>
            <p className="hide-mobile">Volume</p>
            <p className="hide-mobile">Market CAP</p>
          </div>

          {props.coins.map((coins) => {
            return (
              <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                <CoinItem coins={coins} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Coins;
