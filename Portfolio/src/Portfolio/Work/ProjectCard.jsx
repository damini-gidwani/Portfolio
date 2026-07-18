import React from "react";

const ProjectCard = ({
  toggle,
  image,
  title,
  tech,
  description,
  github,
  large,
}) => {
  return (
    <div
      className={`project-card ${large ? "large" : ""} ${toggle ? "dark" : "light"}`}
    >
      <img src={image} alt={title} />

      <div className="project-content">
        <div className="tech">
          {tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <h3>{title}</h3>

        <p>{description}</p>

        <a href={github} target="_blank" rel="noreferrer">
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
