import React from "react";
import "./Hero.css";
import profile_pic from "../assets/ib.jpg";
import { FaSearch } from "react-icons/fa";
import profile from "../assets/profile-pic.png";
import card_img from "../assets/card-img.jpg";
import like from "../assets/like.png";
import comments from "../assets/comments.png";
import share from "../assets/share.png";
import phote_1 from "../assets/photo1.png";
import phote_2 from "../assets/photo2.png";
import phote_3 from "../assets/photo3.png";
import phote_4 from "../assets/photo4.png";

const Hero = () => {
  return (
    <div className="main">
      <div className="left">
        <nav className="left-nav" aria-label="Main Navigation">
          <div className="profile">
            <img src={profile_pic} alt="Profile of Muhammad Ibrahim" />
            <h2>Muhammad Ibrahim</h2>
          </div>
          <ul>
            <li>Friends</li>
            <li> Groups</li>
            <li>MarketPlace</li>
            <li> Watch</li>
            <li>Memories</li>
            <li>Ad Center</li>
            <li>Ad Manager</li>
            <li>Blood Donation</li>
            <li> Event</li>
            <li> Saved</li>
            <li> Gaming</li>
            <li> Messager</li>
            <li className="see">See More</li>
          </ul>
        </nav>
      </div>

      <div className="center">
        <div className="card">
          <div className="personal">
            <img src={profile_pic} alt="" />
            <h2>
            Stranger Things <p>2 years ago</p>
            </h2>
          </div>
          <div className="card-img">
            <img
              src={
                "https://i.pinimg.com/736x/fb/2a/36/fb2a360fd93acfa33607bfa0d68a0acb.jpg"
              }
              alt=""
            />
          </div>
          <div className="like">
            <p>
              <img src={like} alt="" /> Like
            </p>
            <p>
              <img src={comments} alt="" />
              Comments
            </p>
            <p>
              {" "}
              <img src={share} alt="" /> Share
            </p>
          </div>
        </div>
        <div className="card">
          <div className="personal">
            <img src={phote_1} alt="" />
            <h2>
              Will Smith <p>1 years ago</p>
            </h2>
          </div>
          <div className="card-img">
            <img
              src={
                "https://i.pinimg.com/736x/8b/42/5b/8b425b2d9182831f2245112bffd48b83.jpg"
              }
              alt=""
            />
          </div>
          <div className="like">
            <p>
              <img src={like} alt="" /> Like
            </p>
            <p>
              <img src={comments} alt="" />
              Comments
            </p>
            <p>
              {" "}
              <img src={share} alt="" /> Share
            </p>
          </div>
        </div>
        <div className="card">
          <div className="personal">
            <img src={phote_2} alt="" />
            <h2>
              Naruto <p>2 years ago</p>
            </h2>
          </div>
          <div className="card-img">
            <img
              src={
                "https://i.pinimg.com/736x/5f/b7/90/5fb79002420356d188b151e1ec40dcef.jpg"
              }
              alt=""
            />
          </div>
          <div className="like">
            <p>
              <img src={like} alt="" /> Like
            </p>
            <p>
              <img src={comments} alt="" />
              Comments
            </p>
            <p>
              {" "}
              <img src={share} alt="" /> Share
            </p>
          </div>
        </div>
        <div className="card">
          <div className="personal">
            <img src={phote_3} alt="" />
            <h2>
              John Wick <p>2years ago</p>
            </h2>
          </div>
          <div className="card-img">
            <img
              src={
                "https://i.pinimg.com/736x/f0/5c/e1/f05ce1535dad9bf6987dbe951397fa75.jpg"
              }
              alt=""
            />
          </div>
          <div className="like">
            <p>
              <img src={like} alt="" /> Like
            </p>
            <p>
              <img src={comments} alt="" />
              Comments
            </p>
            <p>
              {" "}
              <img src={share} alt="" /> Share
            </p>
          </div>
        </div>
        <div className="card">
          <div className="personal">
            <img src={phote_4} alt="" />
            <h2>
              {" "}
              Ronaldo Fanclub<p>2years ago</p>
            </h2>
          </div>
          <div className="card-img">
            <img
              src={
                "https://i.pinimg.com/736x/6e/72/92/6e72927caf63aa42e76778424605a0a7.jpg"
              }
              alt=""
            />
          </div>
          <div className="like">
            <p>
              <img src={like} alt="" /> Like
            </p>
            <p>
              <img src={comments} alt="" />
              Comments
            </p>
            <p>
              {" "}
              <img src={share} alt="" /> Share
            </p>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="contact">
          <h2>Contact</h2>
          <FaSearch className="search" />
        </div>
        <li>
          {" "}
          <img src={profile} alt="" /> Muhammad Bilal
        </li>
        <li>
          {" "}
          <img src={profile} alt="" /> Muhammad ALi
        </li>
        <li>
          {" "}
          <img src={profile} alt="" /> Saad Ansari
        </li>
        <li>
          {" "}
          <img src={profile} alt="" /> Zaid Mutahir
        </li>
        <li>
          {" "}
          <img src={profile} alt="" /> Rehan Sheikh
        </li>
        <li>
          {" "}
          <img src={profile} alt="" /> Mazz Ali
        </li>
        <li>
          {" "}
          <img src={profile} alt="" /> Hassan
        </li>
        <li>
          {" "}
          <img src={profile} alt="" />
          Affan
        </li>
        <li>
          {" "}
          <img src={profile} alt="" /> Shayan
        </li>
        <li>
          {" "}
          <img src={profile} alt="" /> Shehroz Khan
        </li>
        <li>
          {" "}
          <img src={profile} alt="" /> Fahad
        </li>
        <li>
          {" "}
          <img src={profile} alt="" /> Haris Sabir
        </li>
        <li>
          {" "}
          <img src={profile} alt="" /> Shariq Ansari
        </li>
        <li>
          {" "}
          <img src={profile} alt="" />
          Muzammil
        </li>
      </div>
    </div>
  );
};

export default Hero;
