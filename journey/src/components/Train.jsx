// React component
import React, { useEffect,useState} from "react";
import { useJourney } from "../context/Journey";
import { Link } from "react-router-dom";
import "./Topbar.css";
import { IoMdTrain } from "react-icons/io";
import {MdLuggage} from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { BsBusFront } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import jouney from "../assets/jouney.jpg";
import edit from "../assets/edit.png";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import TrainServices from "../services/TrainServices";

const Train = () => {
  const { train,setTrain ,setBookingtrain,setSearch,setUpdateTrain} = useJourney();
  const [isWindowReloaded, setIsWindowReloaded] = useState(false);

  const navigate = useNavigate();
 const setRailway=(id)=>{
     axios.get(`http://localhost:8080/gettrain/${id}`).then((response)=>{
      setBookingtrain(response.data);
      console.log(response.data)
      navigate("/passenger")

     })
 } 
 const setUpdateTrainFun=(id)=>{
  axios.get(`http://localhost:8080/gettrain/${id}`).then((response)=>{
   setUpdateTrain(response.data);
   console.log(response.data)
   navigate("/put")

  })
}    
useEffect(() => {
  setSearch(JSON.parse(localStorage.getItem('search')));
  const getTrain = async () => {
    await TrainServices.getTrain(JSON.parse(localStorage.getItem('search')))
      .then((response) => {
        setTrain(response.data);
      });
  };

  getTrain();
}, []);

if (!train) {
  window.location.reload();
  return null;
}

// 



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

    <div className="train-filte">
    <div className="filterzz">
      <div className="adjustt">
      <h3>Quick Filters</h3>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox1">AC</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox2">Available</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox3">Departure After 6 PM</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox3">Departure After 12PM</label>
  </div>

      
  <h3>Ticket Types</h3>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox1">Free Cancellation</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox2">Trip Guarantee</label>
  </div>
  <h3>Journey Class Filters</h3>
      
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox1">1st Class AC -  
1A</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox2">2 Tier AC -  
2A</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox2">2 Tier AC -  
2A</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox2">2 Tier AC -  
2A</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox2">  3 Tier AC -  
3A</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox2">Sleeper -  
SL</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox2"> Second Sitting -  
2S</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox2"> AC Chair Car -  
CC</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox2"> Executive Chair Car -  
EC</label>
      
<h3>Train Types</h3>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox1">SUF -  
SUF</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox2">Others -  
O</label>
  </div>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox2">Special Tatkal Trains -  
ST</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox2">Special Trains -  
SP</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox2">Vandebharat Express</label>
  </div>
  </div>
  </div>
    <div>
      
      <div className="train-detail">
        {train?.map((tr,index)=>(
          <div className="train-container">
            <Link onClick={() => setUpdateTrainFun(tr.id)}><img className="edit"   width="10px" src={edit} alt="" /></Link>
               <div className="train-box-1 ">
          <div className="flex-box">

          <h2>{tr.traininfo}</h2>
          <p className="train-num">{tr.tno}<span> | </span>Departs on :  S  M  T  W  T  F  S</p>

          </div>
          <div className="flex-box">
          <p className="dept-time">{tr.fromtime}</p>
          <p className="dept-des">{tr.fromstation}</p>

          </div>
          <div className="flex-box">
          <p className="travel-tim">{tr.duration}</p>
          <p className="route">View Route</p>

          </div>
          <div className="flex-box">
          <p className="arr-time">{tr.totime}</p>
          <p className="arr-des">{tr.tostation}</p>

          </div>
        </div>
        <div className="train-box-2 ">
          
          <div className="jeeva" >
            <div className="train-content-box1">
          
            <div className="box1">
            <button className="remove"onClick={()=>setRailway(tr.id)}><p className="text-box-tatkal">SL</p></button>
              <p>₹ 275</p>
            </div>
            <div className="box2">
              <p>AVAILABLE 13</p>
            </div>
            <div>
              <p>Free Cancellation</p>
              <p className="hours">Updated 2 hrs ago</p>
            </div>

          </div>
          </div>
          

          <div className="train-content-box1">
            <div className="box1">
              <p className="text-box-tatkal">2S<span className="tatkal">TATKAL</span></p>
              <p>₹ 115</p>
            </div>
            <div className="box2">
              <p>AVAILABLE 21</p>
            </div>
            <div>
              <p>Free Cancellation</p>
              <p className="hours">Updated 2 hrs ago</p>
            </div>

          </div>
          <div className="train-content-box1">
            <div className="box1">
              <p className="text-box-tatkal">CC </p>
              <p>₹ 385</p>
            </div>
            <div className="box2">
              <p>AVAILABLE 13</p>
            </div>
            <div>
              <p>Trip Guarantee</p>
              <p className="hours">Updated 2 hrs ago</p>
            </div>

          </div>
         
          
        </div>
            </div>

        

))}
</div>
</div>
</div>
</>
     
    
  );
};

export default Train;
