import React from "react";
import Scard from "../Service/Scard";
import "../Service/Scard.css";
import './Reviews.css'

const Reviews = (props) => {
  return (
    <div id="review" className={props.toggle ? "review-dark" : "review-light"}>
      <p id="text">Social proof</p>
      <h2>What clients say</h2>
      <div id="card">
        <Scard
          toggle={props.toggle}
          description={
            "Eliott delivered our redesign in record time and the quality blew us away. Our conversion rate jumped 28% in the first month. Absolutely recommend."
          }
          title="Robinson Crusoe (CPO, Novu)"
        />
        <Scard
          toggle={props.toggle}
          description={
            "Working with Eliott is a dream. He asks the right questions, moves fast, and the final result always exceeds what we imagined. Our best hire of 2024."
          }
          title="Thomas Renault (Founder, Finlo)"
        />
        <Scard
          toggle={props.toggle}
          description={
            "We had a tight deadline and a vague brief. Eliott turned both into a polished site in under two weeks. Clean code, zero hand-holding needed."
          }
          title="Camille Dufresne (Creative Director, Orea)"
        />
      </div>
    </div>
  );
};

export default Reviews;
