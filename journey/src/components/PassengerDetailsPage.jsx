

import React, { useState } from "react";
import "./PassengerDetailsPage.css";
import TrainServices from "../services/TrainServices";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./Topbar.css";
import { IoMdTrain } from "react-icons/io";
import { useJourney } from "../context/Journey";
import { FaHotel } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { BsBusFront } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import jouney from "../assets/jouney.jpg";
import {MdLuggage} from "react-icons/md";
function PassengerDetailsPage({}) {
  const [passengerData, setPassengerData] = useState({
    passname: "",
    age: "",
    gender: "",
    seatNumber: "",
    nationality: "",
    berth: "",
    email: "",
    mobile: "",
  });
  const {bookingtrain}=useJourney();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassengerData({ ...passengerData, [name]: value });
    if (name === "age")
      setPassengerData({ ...passengerData, age: parseInt(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(passengerData);
    await TrainServices.bookTrain(passengerData).then((response) => {
      console.log(response);
    });
    setPassengerData({
      passname: "",
      age: "",
      gender: "",
      seatNumber: "",
      nationality: "",
      berth: "",
      email: "",
      mobile: "",
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your ticket has been confirmed',
      showConfirmButton: false,
      timer: 3000
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
      <div className="heading">
        <h2>Select Travellers</h2>
      </div>
      <div className="showtrain">
        <div className="train-detail">
        
          <div className="train-container">
           
               <div className="train-box-1 ">
          <div className="flex-box">

          <h2>{bookingtrain.traininfo}</h2>
          <p className="train-num">{bookingtrain.tno}<span> | </span>Departs on :  S  M  T  W  T  F  S</p>

          </div>
          <div className="flex-box">
          <p className="dept-time">{bookingtrain.fromtime}</p>
          <p className="dept-des">{bookingtrain.fromstation}</p>

          </div>
          <div className="flex-box">
          <p className="travel-tim">{bookingtrain.duration}</p>
          <p className="route">View Route</p>

          </div>
          <div className="flex-box">
          <p className="arr-time">{bookingtrain.totime}</p>
          <p className="arr-des">{bookingtrain.tostation}</p>
</div>
          
</div>
<div className="jeeva" >
            <div className="train-content-box11">
          
            <div className="box1">
            <button className="remove"><p className="text-box-tatkal">SL</p></button>
              <p>₹ 125</p>
            </div>
            <div className="box2">
              <p>AVAILABLE 13</p>
            </div>
            <div>
              <p>Free Cancellation</p>
              <p className="hours">Updated 2 hrs ago</p>
            </div>

          </div>
          </div> .

          </div>
    </div>
     

    </div>
      <div className="topprice">
        <div className="passenger-details-container">
          <h3 className="addings">Passenger Details</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
            </div>
            <div className="fonting">
              <input
                type="text"
                name="passname"
                value={passengerData.passname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Age</label>
            </div>
            <div className="fonting">
              <input
                type="number"
                name="age"
                value={passengerData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
            </div>

            <div className="fonting">
              <select
                name="gender"
                value={passengerData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Nationality</label>
            </div>
            <div className="fonting">
              <input
                type="text"
                name="nationality"
                value={passengerData.nationality}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Berth Preference</label>
            </div>

            <div className="fonting">
              <select
                name="berth"
                value={passengerData.berth}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="LOWER BERTH">LOWER BERTH</option>
                <option value="MIDDLE BERTH">MIDDLE BERTH</option>
                <option value="UPPER BERTH">UPPER BERTH</option>
                <option value="SIDE LOWER BERTH">SIDE LOWER BERTH</option>
                <option value="SIDE UPPER BERTH">SIDE UPPER BERTH</option>
              </select>
            </div>
            <h3 className="addings">Contact Details</h3>
            <div className="form-group">
              <label>Email</label>
            </div>
            <div className="fonting">
              <input
                type="email"
                name="email"
                value={passengerData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile</label>
            </div>
            <div className="fonting">
              <input
                type="text"
                name="mobile"
                value={passengerData.mobile}
                onChange={handleChange}
                required
              />
            </div>
          </form>
          
        </div>
        <div className="ticket-container">
          <div className="fontings">
            <h2>PAY & BOOK NOW </h2>
          </div>

          <div className="pricediv">
            <div className="prices">
              <p>Base fare per adult </p>
              <p>Tax </p>
              <p>Reservation charge </p>
              <p>Superfast charge</p>
            </div>
            <div className="price">
              <p>₹275</p>
              <p>₹27</p>
              <p>₹20</p>
              <p>₹30</p>
            </div>
          </div>
        </div>
      </div>
      

<h3 className="boldpasses">Get Free Cancellation</h3>
  <div className="cancelbox">
<div className="hi">
    <label>
      <input type="radio" name="radar" value="accept  " checked />
      Yes, I want full refund upon cancellationApprox Refund : ₹ 1215/person</label>
  </div>
<div className="hi">
    <label>
      <input type="radio" name="radar" value="accept  " checked />
      No, I am willing to pay the charges upon cancellation
    </label>
  </div>
  </div>
<h3 className="boldpasses">Additional Preferences</h3>
<h4 className="boldpass">Choose one option for assured lower berth or same coach</h4>
<div class="radio-containers">
    <label>
      <input type="radio" name="radio" value="accept  " checked />
      None
    </label>
  </div>
  <div class="radio-containers">
    <label>
      <input type="radio" name="radio" value="insurance" />
      Book, only if all berths are allotted in same coach
    </label>
  </div>
  <h4 className="boldpass">Other Options</h4>
  <div className="boldpass">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox3" id="movebox">Book only if confirm berths are allotted.</label></div>
    <div className="boldpass">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox3" id="movebox">
Consider for auto-upgradation (optional)</label></div>
<h4 className="boldpass">Would you like to take Travel Insurance for ₹ 0.35 per person?</h4>
<div class="radio-containers">
    <label>
      <input type="radio" name="transport" value="accept  " checked />
      Yes, and I accept the Insurance Terms & Conditions
    </label>
  </div>
  <div class="radio-containers">
    <label>
      <input type="radio" name="transport" value="insurance" />
      No, I don’t want travel insurance
    </label>
    <div className="passflex">
            <button type="submit" className="stopbutton">
              Cancel
            </button>
            <button type="submit"
              onClick={handleSubmit}
              
              className="passbutton">BOOK TICKET</button>
            
            
          </div>
  </div>
    </>
  );
}

export default PassengerDetailsPage;
