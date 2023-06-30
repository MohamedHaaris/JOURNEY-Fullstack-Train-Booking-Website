import React from "react";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
// import Train from './components/Train'
import Topbar from "./components/Topbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import "./components/Topbar.css";
import "./components/Train.css";
import Train from "./components/Train";
import Login from "./components/Login";
import "./components/Login.css"
import Signup from "./components/Signup";
import "./components/Signup.css";
import "./components/Train.css";
import PassengerDetailsPage from "./components/PassengerDetailsPage";
import "./components/PassengerDetailsPage.css";
import Booking from "./components/Booking";
import "./components/Booking.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Journey} from "./context/Journey";
import Put from "./components/Put";
import "./components/Put.css";
// import Booking from "./components/Booking";

export default function App() {
  return (
    <>
    <ToastContainer
    position="top-center"
    autoClose={4000}
    />
      <Router>
        <Journey>
          <Routes>
            <Route path="/" element={<Navbar />}></Route>
            <Route path="/top" element={<Topbar />}></Route>
            <Route path="/train" element={<Train />}></Route>
            <Route path="/passenger" element={<PassengerDetailsPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/booking" element={<Booking />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/put" element={<Put />}></Route>
          </Routes>
        </Journey>
      </Router>
    </>
  );
}
