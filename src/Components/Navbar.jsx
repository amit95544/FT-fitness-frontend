import React from "react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaRegistered } from "react-icons/fa6";
import { MdHotelClass } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { CiLogin } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaSquareGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";





const Navbar = () => {
  return (
     
    <>
    <div className="col-sm-12 bg-dark " style={{height:"40px"}}> 
          <div className="row text-center pt-2" >
            <div className="col-sm-4 "> 
              <p className="text-light">
                 <CiLogin className="fs-4 ic"/>
                 Welcome to the FtFitness</p>
            </div>
            <div className="col-sm-4 "> 
              <a href="" className="text-light mt-3">  bhartamit5179@gmail.com  </a>
            </div>
            <div className="col-sm-4 text-light  text-center "> 
              <h4 className=" m-0">
                <FaPhoneAlt  className="ic"/>
                 <FaWhatsapp className="ic" />
                <FiInstagram  className="ic"/>
                  <FaSquareGithub className="ic"/>
                  <CiLinkedin  className="ic"/>
                 
              </h4>

            </div>
          </div>
        </div>
         
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand fw-bold text-warning" href="/">
          FT<span className="text-danger">fitness</span>
        </a>
        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">Register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/classes">View Classes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/view"> Gate Data</a>
            </li>
          </ul>

          {/* Right Side Login Button */}
          <a className="btn btn-danger fw-bold" href="/login">
            Login
          </a>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;