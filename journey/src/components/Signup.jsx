import React from "react";
import "./Signup.css";
import signup from "../assets/signup.jpg";
import { Link, useNavigate } from "react-router-dom";
import TrainServices from "../services/TrainServices";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
function Signup(){
  const[signupData,setSignupData]=useState({
    firstname:"",
    lastname:"",
    email:'',
    username:'',
    password:'',
  });
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupData);
    await TrainServices.signupTrain(signupData).then((response) => {
      console.log(response);
      toast.success('Account Created Successfully')
      navigate('/login')
    }).catch((error)=>{
      console.log(error);
      toast.error('Enter valid Credentials')
    });
    setSignupData({
      firstname:"",
    lastname:"",
    email:'',
    username:'',
    password:'',
    });
  };
    return(
    <>
    <div className="login-containerss">
      <div className="image-containerss">
        <img width='600' src={signup} alt=""  />
      </div>
      <div className="form-containers">
        <h1 className="moves">Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-groups">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" placeholder="Enter your firstname" value={signupData.firstname} onChange={(e)=>handleChange(e)} required 
            
                />
          </div>
          <div className="form-groups">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" placeholder="Enter your lastname"value={signupData.lastname} onChange={(e)=>handleChange(e)} required
             />
          </div>
          <div className="form-groups">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" value={signupData.email} onChange={(e)=>handleChange(e)} required
             />
          </div>
          <div className="form-groups">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" value={signupData.username} onChange={(e)=>handleChange(e)} required
            />
          </div>
          
          
          <div className="form-groups">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" value={signupData.password} onChange={(e)=>handleChange(e)} required
             />
          </div>
          
          <button type="submit" className="verify"  >Create Account</button>
        </form>
      </div>
    </div>
   </>
    );
}
export default Signup;