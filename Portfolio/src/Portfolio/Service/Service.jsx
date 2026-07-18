import { React, useState } from "react";
import Scard from "./Scard";
import "./Service.css";

const Service = (props) => {
  console.log("Toggle:", props.toggle);
  return (
    
    <div
      id="service"
      className={props.toggle ? "service-dark" : "service-light"}
    >
      <p id="text">WHAT I DO</p>
      <h2>Services</h2>
      <div id="card">
        <Scard
          toggle={props.toggle}
          title="UI/UX Design"
          description="From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first."
        />
        <Scard
          toggle={props.toggle}
          title="Frontend Dev"
          description="Production-grade code with Tailwind CSS and Alpine.js. Pixel-perfect, fully responsive, SEO-friendly and blazing fast — no bloat, no heavy frameworks."
        />
        <Scard
          toggle={props.toggle}
          title="Landing Pages"
          description="High-converting pages for SaaS, apps and personal brands. Designed to communicate value instantly and drive action from the first scroll."
        />
      </div>
    </div>
  );
};

export default Service;
