import React, { useEffect, useState } from "react";
import { IoMdTrain } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { BsBusFront } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import jouney from "../assets/jouney.jpg";
import booked from "../assets/booked.png";
import cancelled from "../assets/cancelled.png";
import "./Topbar.css";
import axios from "axios";
import Swal from "sweetalert2";
import {MdLuggage} from "react-icons/md";

import TrainServices from "../services/TrainServices";

const Booking = () => {
  const [passengers, setPassengers] = useState([]);

  const getPassaengers = () => {
    axios
      .get("http://localhost:8080/getpassenger")
      .then((response) => {
        console.log(response);
        setPassengers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getPassaengers();
  }, []);

  const deletePassenger = (id) => {
    console.log(id);
    TrainServices.deletePassenger(id).then((response) => {
      getPassaengers();
    });
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to cancel the ticket!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel ticket!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cancelled!',
          'Your ticket has been cancelled.',
          'success'
        )
      }
    })
  };

  return (
    <>
      <nav className="navbar">
      <div className="container">
      <Link to='/' ><img width="130px" src={jouney} alt="" /></Link>
          </div>
      <ul className="nav-links">
        <li>
          <span><FaHotel className="icons" /></span>
        <button className="topbar-design"> Hotels</button>
              
        </li>
        <li>
              <span><IoMdTrain className="icons" /></span>
        <Link to='/'><button className="topbar-design">Trains</button></Link>
            
           
        </li>
        <li>
              <span><GiCommercialAirplane className="icons" /></span>
        <button className="topbar-design">Flights</button>
              
        </li>
        <li>
              <span><BsBusFront className="icons" /></span>
        <button className="topbar-design">Buses</button>
              
        </li>
        <li>
              <span><FaTaxi className="icons" /></span>
        <button className="topbar-design">Cabs</button>
            
        </li>
        <li>
            <span><GiMoneyStack className="icons" /></span>
        <button className="topbar-design">Forex</button>
             
        </li>
      </ul>
      <div className="profiles">
      <Link to='/booking'><span><MdLuggage  /></span><button className="profiles" >My Bookings </button></Link></div>
      <div className="profiles">
      <Link to='/'><button className="profiles">Login </button></Link>
      </div>
     
    </nav>

      <div className="bookings">
        <h1>MY BOOKINGS</h1>
      </div>
      <div className="train-details">
        <div className="train-c">
          {passengers.map((passenger) => (
            <div className="train-containers">
              <div className="pid">
                <h5>{passenger.pid}</h5>
              </div>
              <h3 className="status">STATUS:CONFIRMED</h3>
              <div className="train-box-1 ">
                <img width="85px" src={booked} alt="" />
                <div className="flex-box">
                  <h3>Name:{passenger.passname}</h3>
                </div>
                <div className="flex-box">
                  <p className="dept-time">{passenger.gender}</p>
                  <p className="dept-des">{passenger.age}</p>
                </div>
                <div className="flex-box">
                  <p className="travel-tim">{passenger.email}</p>
                </div>
                <div className="flex-box">
                  <p className="arr-time">{passenger.berth}</p>
                  <p className="arr-des">Mobile:{passenger.mobile}</p>
                </div>
              </div>

              <button
                onClick={() => deletePassenger(passenger.pid)}
                className="cancel-train"
              >
                <img width="30px" src={cancelled} alt="" />
                CANCEL TICKET
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Booking;
