import React from "react";
import "./Work.css";
import ProjectCard from "./ProjectCard";

const Work = ({ toggle }) => {
  return (
    <section id="work">
      <p className="section-title" style={{ color: "orange" }}>
        PORTFOLIO
      </p>

      <div className="work-heading">
        <h1>Selected Work</h1>
        <a href="#">All Projects →</a>
      </div>

      <div className="work-grid">
        <ProjectCard
          large
          toggle={toggle}
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
          title="NewsHub"
          tech={["React", "News API", "CSS"]}
          description="A responsive news application with category-wise filtering and live headlines. NewsHub is a responsive news application built with React that
          fetches live headlines from the News API. Users can browse news
          across multiple categories including Business, Technology, Sports,
          Health, Entertainment, and Science through an intuitive interface.The project focuses on component-based architecture, efficient API
          integration, and responsive web design. It provides a clean reading
          experience with fast navigation, modern UI elements, and optimized
          layouts that adapt seamlessly to desktop, tablet, and mobile
          devices.Built using React, CSS, and REST APIs, NewsHub demonstrates practical
          front-end development skills such as state management, reusable
          components, asynchronous data fetching, and responsive UI design."
          github="#"
        />

        <div className="right-work">
          <ProjectCard
            toggle={toggle}
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200"
            title="AI Learning Assistant"
            tech={["React", "Flask", "OpenAI"]}
            description="An AI-powered learning assistant with chatbot and quiz generation."
            github="#"
          />

          <ProjectCard
            toggle={toggle}
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
            title="3-Tier Chat App"
            tech={["Docker", "Kubernetes", "MongoDB"]}
            description="A full-stack chat application deployed on Kubernetes."
            github="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
