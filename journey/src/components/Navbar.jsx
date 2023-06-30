import React, { useEffect } from "react";

import jouney from "../assets/jouney.jpg";
import "./Navbar.css";
import irctclogo from "../assets/irctclogo.png";
import nomoney from "../assets/nomoney.png";
import transport from "../assets/transport.png";
import moneyback from "../assets/moneyback.png";
import gb from "../assets/gb.jpg";
import pb from "../assets/pb.jpg";
import vb from "../assets/vb.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

import { IoMdTrain } from "react-icons/io";
import { IoMdSwap } from "react-icons/io";
import { FaHotel } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { BsBusFront } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import { Link, json } from "react-router-dom";
import { useJourney } from "../context/Journey";
import TrainServices from "../services/TrainServices";

export default function Navbar() {
  useEffect(() => {
    Aos.init();
  }, []);

  const { search, setSearch, handleNavigate, setTrain } = useJourney();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
  };

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const formateDate = `${day <= 9 ? `0${day}` : day}-${
      month <= 9 ? `0${month}` : month
    }-${date.getFullYear()}`;
    setSearch({ ...search, date: formateDate });
  };

  const getTrains = async () => {
    const response = await TrainServices.getTrain(search);
    setTrain(response.data);
    localStorage.setItem('search',JSON.stringify(search))
  };
 
  
  return (
    <>
      <div className="gradient" data-aos="zoom-out" data-aos-duration="1000">
        <div className="whole">
          <div className="container">
          <Link to='/'><img width="130px" src={jouney} alt="" /></Link>
          </div>

          
          <Link to='/login'><button className="signin">Login or Create Account</button></Link>
        </div>

        <div className="total">
          <div className="gap">
            <button className="design">
              <FaHotel className="icon" />
              Hotels
            </button>
            <button className="design">
              <IoMdTrain className="icon" />
              Trains
            </button>
            <button className="design">
              <GiCommercialAirplane className="icon" />
              Flights
            </button>
            <button className="design">
              <BsBusFront className="icon" />
              Buses
            </button>
            <button className="design">
              <FaTaxi className="icon" />
              Cabs
            </button>
            <button className="design">
              <GiMoneyStack className="icon" />
              Forex
            </button>
          </div>
        </div>

        <div className="search">
          <div className="containeer">
            <IoMdSwap className="dir" />
            <div className="input-top">
              <label className="love">FROM</label>
              <input
                className="input-box"
                type="text"
                size={35}
                placeholder="Enter Source Name..."
                name="from"
                onChange={handleChange}
              />
            </div>
            <div className="input-top">
              <label className="love">TO</label>

              <input
                className="input-box"
                type="text"
                size={35}
                placeholder="Enter Destination Name..."
                name="to"
                onChange={handleChange}
              />
            </div>
            <div className="input-top">
              <label className="love">DEPARTURE</label>

              <input
                className="input-box"
                type="date"
                name="date"
                onChange={handleDateChange}
              />
            </div>
            <div className="input-top">
              <label className="love">CLASS</label>
              <select
                required
                className="input-box"
                name="class"
                onChange={handleChange}
              >
                <option value="" disabled selected hidden>
                  Enter Required Class...
                </option>
                <option>All Class</option>
                <option>AC 1 TIER</option>
                <option>AC 2 TIER</option>
                <option>AC 3 TIER</option>
                <option>Sleeper</option>
                <option>Second Seating</option>
              </select>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            getTrains();
            handleNavigate("/train");
          }}
          className="search-button"
        >
          SEARCH TRAINS 
        </button>

        <div className="irctc">
          <h5>
            <img height="70px" width="55" src={irctclogo} alt="" /> IRCTC
            Authorized Partner
          </h5>
        </div>
        <div className="pnrstatus">
          <input type="radio" name="radioed" value="Book Train Tickets" />
          <h5>Book Train Tickets</h5>
          <input type="radio" name="radioed" value="Check PNR Status" />
          <h5>Check PNR Status</h5>
          <input type="radio" name="radioed" value="Live Train Status  " />
          <h5>Live Train Status</h5>
        </div>
      </div>
      <br></br>
      <br></br>

      <h5 className="coupon" data-aos="fade-right" data-aos-duration="1800">
        We Offers You
      </h5>
      <div className="boxes" data-aos="fade-right" data-aos-duration="3000">
        <div className="nofee" data-aos="fade-right" data-aos-duration="1800">
          <img height="110px" width="110px" src={pb} alt="" />
          <div className="text-content">
            <h3 className="pram">Zero Convenience FEE</h3>
            <p>Offer valid till: Jul 15</p>
            <p className="offer">NOFEE</p>
          </div>
        </div>
        <div className="nofee">
          <img height="110px" width="125px" src={vb} alt="" />
          <div className="text-content">
            <h3>Flat Rs 90 OFF on Vande Bharat Trains</h3>
            <p>Offer valid till: May 20</p>
            <p className="offer">VBT90</p>
          </div>
        </div>
        <div className="nofee">
          <img height="110px" width="110px" src={gb} alt="" />
          <div className="text-content">
            <h3 className="pram"> Save 18% upto Rs 100 on Weekends</h3>
            <p>Offer valid till: Jun 30</p>
            <p className="offer">WEEK18</p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="million" data-aos="zoom-in" data-aos-duration="1800">
        <h3>1 million+ customers</h3>
      </div>
      <div className="desc" data-aos="zoom-in" data-aos-duration="1800">
        <p>book train tickets with us because</p>
      </div>
      <br></br>
      <div className="threelogo" data-aos="zoom-in" data-aos-duration="1800">
        <img height="80px" width="80px" src={nomoney} alt="" />
        <img height="80px" width="80px" src={transport} alt="" />
        <img height="90px" width="90px" src={moneyback} alt="" />
      </div>
      <div className="fee" data-aos="zoom-in" data-aos-duration="1800">
        <h2>No Cancellation Fee</h2>
        <h2>goConfirmed Trip</h2>
        <h2>No PG Fee via UPI</h2>
      </div>
      <div className="matter" data-aos="zoom-in" data-aos-duration="1800">
        <p className="trip">You can opt for free cancellation & get full refund.</p>
        <p className="trip">Guaranteed confirmed tickets or we give you 2x refund.</p>
        <p className="trip">Zero Payment Gateway Charges via UPI mode</p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="box">
        <br></br>
        <h1 className="adjust" data-aos="fade-up" data-aos-duration="1800">
          {" "}
          Advantages of Booking with JOURNEY!
        </h1>
        <table data-aos="fade-up" data-aos-duration="1800">
          <tr>
            <th>Authorized & Reliable</th>
            <td>IRCTC Authorized Partner</td>
          </tr>
          <tr>
            <th>Ticket Booking</th>
            <td>Within 3 mins</td>
          </tr>
          <tr>
            <th>Free Cancellation</th>
            <td>Get full refund on base fare</td>
          </tr>
          <tr>
            <th>Trip Alerts</th>
            <td>Get alerts for your train timings</td>
          </tr>
          <tr>
            <th>Live Tracking</th>
            <td>Track your train's live status</td>
          </tr>
          <tr>
            <th>Customer Support</th>
            <td>On time support and refund</td>
          </tr>
        </table>
      </div>

      <div className="totaly">
        <div className="para">
          <div className="pro">
            <h4 className="topic">Book Train Tickets Without Any Hassle</h4>
            <p className="p1">
              Traveling by train is a popular choice for both short commutes and
              longer journeys, and for a good reason. With over a thousand
              routes connecting cities in India, traveling by train is the most
              convenient mode of travel. The combination of price, convenience,
              and speed makes train travel a sweet spot for discerning
              travelers. Travelers can now search routes, check fares and book
              train tickets with Journey’s train booking system. Moreover, you
              can also use the Journey’s app for easy access to train tickets
              booking. Planning a trip across India should be fun and easy.
              That’s why, Journey guarantees a hassle-free booking process for
              booking your train tickets. You can have your train tickets book
              on Journey from the comfort of your homes.
            </p>
          </div>
          <div className="pro">
            <h4 className="topic">Easy IRCTC Train Booking</h4>
            <p className="p2">
              Indian Railways is among the world’s largest rail networks with an
              operating route length of more than 65,000 km. IRCTC (Indian
              Railway Catering and Tourism Corporation) is the face of India's
              online train tickets booking system. Journey is the leading portal
              for booking IRCTC train tickets online which is offering the most
              convenient ways to book train tickets, check train schedule, train
              availability, and view live train status. IRCTC has been the most
              used website for train tickets booking. It has seen the largest
              footfall in their websites and thus to make the experience even
              better for the customers we have stepped in to make it an easy
              solution. With us, you can now book train tickets with confirmed
              status, add meals and even grab great deals on booking.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>

        <div className="para">
          <div className="pro">
            <h4 className="topic">
              Why should you book Train Tickets with Journey
            </h4>
            <p className="p1">
              Journey can provide you the most reliable and secure way of train
              booking and all you need to do is plan your itinerary. The portal
              provides a user-friendly experience to our customers. Instead of
              waiting or queueing up in lines for hours to book a train ticket,
              you can visit the website. The train tickets online booking system
              of Journey allow you to book your travel package from anywhere.
              All you need to do is enter your IRCTC login detail and you have
              all the information you need. Ge...
            </p>{" "}
          </div>
          <div className="pro">
            <h4 className="topic">
              Hassle-free Train Ticket Booking on Journey
            </h4>
            <p className="p2">
              Counted among the world’s largest rail networks, Indian Railways
              is the most popular mode of transport for passengers. MakeMyTrip
              is the leading portal for making your IRCTC ticket booking within
              a few minutes. All you have to do is enter your source and
              destination and look at all the trains available on the selected
              route. In order to confirm your tickets, enter your IRCTC login ID
              and be ready to embark on a journey of a lifetime. You can also
              book your train tickets...
            </p>{" "}
          </div>
        </div>
        <br></br>
        <br></br>

        <div className="para">
          <div className="pro">
            <h4 className="topic">
              How Book Train Tickets Online with Journey
            </h4>
            <p className="p1">
              Having confusion on how to book your train tickets online? process
              of booking your tickets in simple easy steps. Step 1: Log in to
              our website and select the train icon. Under the ‘book train
              tickets’ section, choose your city and its station where you will
              depart from and arrive at. Step 2: Then select the date of
              departure and choose from the preferred class of train travel. You
              can choose between Sleeper Class, Third Class, First AC, Second
              AC, Third AC, AC Chair car, an...
            </p>
          </div>

          <div className="pro">
            <h4 className="topic">Check Your PNR Status</h4>
            <p className="p2">
              Apart from providing e-tickets by mail, Journey also sends you the
              relevant updates on your registered number over text and WhatsApp.
              When you book train tickets each ticket holder gets a unique PNR,
              an acronym for Passenger Name Record, to check the status of the
              train and booking details. With the help of PNR enquiry, you can
              check live train status from the comfort of your home. With PNR
              enquiry, you will get to know whether your ticket is confirmed or
              if will you get a seat only if someon...
            </p>{" "}
          </div>
        </div>
      </div>
      <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Our Products</h3>
          <ul className="footer-col">
            <li>Domestic Hotels</li>
            <li>International Hotels</li>
            <li>Domestic Flights</li>
            <li>International Flights</li>
            <li>Bus Booking</li>
            <li>Cab Booking</li>
            <li>Train Ticket Booking</li>
            <li>Route Planner</li>
            <li>Destination Planner</li>
            
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul className="footer-col">
            <li>About Us</li>
            <li>Terms of Services</li>
            <li>User Agreement</li>
            <li>Privacy</li>
            <li>Customer Support</li>
            <li>Careers</li>
            <li>Corporate Social Responsibility</li>
            <li>Journey on Mobile</li>
            <li>Journey TV Advertisement</li>
            <li>Technology@Journey</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Travel Resource</h3>
          <ul className="footer-col">
            <li>Popular Bus Routes</li>
            <li>Airport Cabs</li>
            <li>Hotels in India</li>
            <li>Popular Airlines</li>
            <li>Journey Offers</li>
            <li>International Airports</li>
            <li>City Airline Routes</li>
            <li>International Travel Guide</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>More Links</h3>
          <ul className="footer-col"> 
            <li>Cheap Flights</li>
            <li>PNR Status</li>
            <li>Live Train Status</li>
            <li>Flight Schedule</li>
            <li>Popular Bus Cities</li>
            <li>Airports in India</li>
            <li>Popular Hotel Chains</li>
            <li>Tatkal Ticket Booking</li>
            <li>Hotels Near Me</li>
            <li>Advertise with Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Place</h3>
          <ul className="footer-col">
            <li>India</li>
            <li>USA</li>
            <li>London</li>
            <li>UAE</li>
            <li>Saudi Arabiya</li>
            <li>London</li>
            <li>France</li>
          </ul>
        </div>
      </div>
      <div className="payment-details">
        <h4>Payment Details</h4>
        <p>Accepted payment methods: Credit Card, PayPal</p>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Booking Website. All rights reserved by HAARIS</p>
      </div>
    </footer>
    </>
  );
}
