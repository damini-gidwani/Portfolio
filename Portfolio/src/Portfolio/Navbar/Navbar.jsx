import React, { useState } from "react";
import "./Navbar.css";
import { TiAdjustContrast } from "react-icons/ti";
import profile from "./images.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Service from "../Service/Service";
import About from "../About/About";
import Reviews from "../Reviews/Reviews";
import Blog from "../Blog/Blog";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className={theme ? "dark" : "light"}>
      <nav id="nav" className={theme ? "navDark" : "navLight"}>
        <div id="name" className={theme ? "spanDark" : "spanLight"}>
          Dam<span style={{ color: "orange" }}>ini</span>
        </div>
        <div id="nav-items">
          <a href="#service">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#review">Reviews</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div id="btns">
          <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
            {theme ? (
              <MdLightMode size={30} color="orange" style={{ marginTop: "15px", marginRight: "15px", cursor: "pointer" }} />
            ) : (
              <MdDarkMode size={30} color="black" style={{ marginTop: "15px", marginRight: "15px", cursor: "pointer" }} />
            )}
          </div>
          <button>hire me</button>
        </div>
      </nav>
      <div id="div">
        <div className="child">
          <p style={{ color: "orange" }}>AVAILABLE FOR WORK</p>
          <h1>
            Hi, I'm <span style={{ color: "orange" }}>Damini</span>
          </h1>
          <h3>
            Freelance
            <span className={theme ? "spanDark" : "spanLight"}>
              UI/UX Designer & Frontend Developer
            </span>
            . I design and build digital products that people love to use —
            fast, clean, and accessible.
          </h3>
          <div>
            <button>view my work</button>
            <button>get in touch</button>
          </div>
          <hr className="hero-line" />
          <div className="stats">
            <div className="stat">
              <h2>34+</h2>
              <p>Projects done</p>
            </div>

            <div className="stat">
              <h2>21+</h2>
              <p>Happy clients</p>
            </div>

            <div className="stat">
              <h2>5y</h2>
              <p>Experience</p>
            </div>
          </div>
        </div>
        <div className="child">
          <img src={profile} alt="profile picture"></img>
        </div>
      </div>
      <Service toggle={theme}/>
      <Work toggle={theme}/>
      <About toggle={theme}/>
      <Reviews toggle={theme}/>
      <Blog toggle={theme}/>
      <Contact toggle={theme}/>
    </div>
  );
};

export default Navbar;
