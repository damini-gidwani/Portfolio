import React from "react";
import "./Blog.css";

const Bcard = ({ toggle,image, category, date, title, desc }) => {
  return (
    <div className={`bcard ${toggle ? "bcard-dark" : "bcard-light"}`}>
      <img src={image} alt={title} />

      <div className="blog-content">

        <div className="top">
          <span className="tag">{category}</span>
          <span className="date">{date}</span>
        </div>

        <h3>{title}</h3>

        <p>{desc}</p>

      </div>
    </div>
  );
};

export default Bcard;