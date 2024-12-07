import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import inbox from "../assets/inbox.png";
import notification from "../assets/notification.png";
import video from "../assets/video.png";
import profile_pic from "../assets/ib.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav">
        <img src={inbox} alt="" />
        <img src={notification} alt="" />
        <img src={video} alt="" />
      </div>
      <div className="icons">
        <input type="Search" placeholder="Search"/>
        <img src={profile_pic} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
