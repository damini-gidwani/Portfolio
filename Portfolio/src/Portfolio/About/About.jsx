import React from "react";
import profile from "../Navbar/images.png";
import './About.css'

const About = (props) => {
  return (
    <div className={props.toggle ? "about-dark" : "about-light"} id="about">
      <div className="child1">
        <img src={profile} />
      </div>
      <div className="child1">
        <p style={{color:'orange'}}>ABOUT ME</p>
        <h3>
            A bit about<br/>
            who I am
        </h3>
        <p style={{color:"gray"}}>
          I'm Damini, a freelance designer and frontend developer based in Paris
          with 5 years of experience shipping digital products for startups,
          agencies, and scale-ups across Europe. I thrive at the intersection of
          great design and clean code.<br/><br/>I believe great interfaces are
          invisible — they get out of the user's way. My work is fast,
          accessible and built to last. When I'm not coding, you'll find me
          hiking or hunting for a good espresso.
        </p>
      </div>
    </div>
  );
};

export default About;
