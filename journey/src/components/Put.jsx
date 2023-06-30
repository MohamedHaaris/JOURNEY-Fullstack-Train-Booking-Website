import React from "react";

import handleSubmit from "react";
import { useState } from "react";
import axios from "../api/axios";
import { useJourney } from "../context/Journey";

import "./Put.css"
const Put=()=>{
  const {updateTrain1}=useJourney();
  const [updateTrain, setUpdateTrain] = useState({
    traininfo: '',
    tno: '',
    fromstation: '',
    tostation: '',
    fromtime:'',
    totime:'',
    duration:'',
    coach:'',
    date:''
  });

  const getUpdateTrain= () => {


    
    axios
      .put(`http://localhost:8080/updatetrain/${updateTrain1.id}`,updateTrain)
      .then((response) => {
        console.log(response);
        setUpdateTrain(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

      
    }
    return(
     <>
     <form onSubmit={handleSubmit}>
     <div className="putdiv">
      <h1 className="putheading">UPDATE TRAIN DETAILS</h1> <p>{updateTrain1.id}</p>
        <div className="flex1">
            
            
            <div className="fontinged">
              <label>Train Info</label>
              <input
                type="text"
                value={updateTrain.traininfo}
                name="traininfo"
                onChange={(e)=>setUpdateTrain({...updateTrain,traininfo:e.target.value})}
                required
              />
            </div>
           
            
            <div className="fontinged">
              <label>Train No</label>
              <input
                type="text"
                name="age"
                value={updateTrain.tno}
                name="tno"
                onChange={(e)=>setUpdateTrain({...updateTrain,tno:e.target.value})}
                required
              />
            </div>
            </div>
            

            
            
            <div className="flex1">
            <div className="fontinged">
              <label>Arrival</label>
              <input
                type="text"
                name=""
                value={updateTrain.fromstation}
                name="fromstation"
                onChange={(e)=>setUpdateTrain({...updateTrain,fromstation:e.target.value})}
              />
            </div>
           
            
            <div className="fontinged">
              <label>Departure</label>
              <input
                type="text"
                name="age"
                value={updateTrain.tostation}
                name="tostation"
                onChange={(e)=>setUpdateTrain({...updateTrain,tostation:e.target.value})}
              />
            </div>
            </div>
            <div className="flex1">
            <div className="fontinged">
              <label>Arrival Time</label>
              <input
                type="text"
                name=""
                value={updateTrain.fromtime}
                name="fromtime"
                onChange={(e)=>setUpdateTrain({...updateTrain,fromtime:e.target.value})}
              />
            </div>
           
            
            <div className="fontinged">
              <label>Departure Time</label>
              <input
                type="text"
                name="departure time"
                value={updateTrain.totime}
                name="totime"
                onChange={(e)=>setUpdateTrain({...updateTrain,totime:e.target.value})}
              />
            </div>
            </div>
            <div className="flex1">
            <div className="fontinged">
              <label>Duration</label>
              <input
                type="text"
                name="passname"
                value={updateTrain.duration}
                name="duration"
                onChange={(e)=>setUpdateTrain({...updateTrain,duration:e.target.value})}
              />
            </div>
           
            
            <div className="fontinged">
              <label>Coach</label>
              <input
                type="text"
                name="age"
                value={updateTrain.coach}
                name="coach"
                onChange={(e)=>setUpdateTrain({...updateTrain,coach:e.target.value})}
              />
            </div>
            </div>
            <div className="flex1">
            <div className="fontinged">
              <label>Date</label>
              <input
                type="text"
                name="date"
                value={updateTrain.date}
                name="date"
                onChange={(e)=>setUpdateTrain({...updateTrain,date:e.target.value})}
              />
            </div>
            <div className="fontinged">
              <label>Seat</label>
              <input
                type="text"
                name="age"
                
              />
            </div>
            
            
            </div>
      
             <button  className='putbutton' type="submit" onClick={getUpdateTrain}>Update Train</button>
             </div>
             </form>
            

            
            
     </>
    );
}
export default Put;