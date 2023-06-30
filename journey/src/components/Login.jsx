import React from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
import trnimg from "../assets/trnimg.jpg";
import { Link, useNavigate } from "react-router-dom";
import TrainServices from "../services/TrainServices";
import { useJourney } from "../context/Journey";
import handleSubmit from "react";

const Login = () => {
  const { login, setLogin } = useJourney();
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await TrainServices.getLogin(login).then((response) => {
      console.log(response);
      
      if(response.data==="Login Successful")
      {
        alert("Login Successful")
        navigate("/")

      }
      else{
        alert("Invalid Credential")
      }
    });
      
  };
  return (
    <>
      <div className="login-containers">
        <div className="image-containers">
          <img width="500" src={trnimg} alt="" />
        </div>
        <div className="form-containers">
          <h1 className="move">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-groups">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-groups">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="verify" onClick={handleSubmit}>
              Login
            </button>
            <br></br><br></br>
            <p>
              Didn't have a Journey account?{" "}
              <Link to="/signup">
                <button className="avg">Create Account</button>
              </Link>
            </p>
          </form>
          <p className="size">
            By proceeding, you agree to Journey's Privacy Policy, User Agreement
            and T&Cs
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;
