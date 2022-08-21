import React from "react";

const CoinItem = (props) => {
  return (
    <>
      <div className="coin-row">
        <p>{props.coins.market_cap_rank}</p>
        <div className="img-symbol">
          <img src={props.coins.image} alt="Images" />
          <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>${props.coins.current_price.toLocaleString()}</p>
        <p>
          {props.coins.price_change_percentage_24h < 0 ? (
            <p className="coin-red">
              {props.coins.price_change_percentage_24h}%
            </p>
          ) : (
            <p className="coin-green">
              {props.coins.price_change_percentage_24h}%
            </p>
          )}
        </p>
        <p className="hide-mobile">
          ${props.coins.total_volume.toLocaleString()}
        </p>
        <p className="hide-mobile">
          ${props.coins.market_cap.toLocaleString()}
        </p>
      </div>
    </>
  );
};

export default CoinItem;
