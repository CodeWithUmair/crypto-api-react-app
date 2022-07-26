import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { moment } from "moment.js";

const Navbar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        {/* <b>{moment().format("MMMM Do YYYY, h:mm:ss a")}</b> */}
        <FaCoins className="icon" />
        <h1>
          Crypto <span className="span-color"> Coins</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
