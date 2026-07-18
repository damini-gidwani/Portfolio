import React, { useState } from 'react';
import './Scard.css'

const Scard = (props) => {
  return (
    <div className={`scard ${props.toggle ? "scard-dark" : "scard-light"}`}>
      <h3 className={props.toggle ? "title-dark" : "title-light"}>{props.title}</h3>
      <p style={{color:"gray"}}>{props.description}</p>
    </div>
  );
}

export default Scard;
