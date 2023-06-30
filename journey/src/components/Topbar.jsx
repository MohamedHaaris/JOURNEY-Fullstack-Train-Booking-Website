import React from 'react';
import "./Topbar.css";
import { IoMdTrain } from "react-icons/io";

import { FaHotel } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { BsBusFront } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import jouney from "../assets/jouney.jpg";

const Topbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
            <img width="130px" src={jouney} alt="" />
          </div>
      <ul className="nav-links">
        <li>
        <button className="topbar-design">
              <FaHotel className="icons" /> Hotels</button>
        </li>
        <li>
        <button className="topbar-design">
              <IoMdTrain className="icons" />
            Trains
            </button>
        </li>
        <li>
        <button className="topbar-design">
              <GiCommercialAirplane className="icons" />
              Flights
            </button>
        </li>
        <li>
        <button className="topbar-design">
              <BsBusFront className="icons" />
              Buses
            </button>
        </li>
        <li>
        <button className="topbar-design">
              <FaTaxi className="icons" />
              Cabs
            </button>
        </li>
        <li>
        <button className="topbar-design">
              <GiMoneyStack className="icons" />
              Forex
            </button>
        </li>
      </ul>
      <div className="profile">
        <a href="/profile">Login</a>
      </div>
     
    </nav>
  );
};

export default Topbar;
