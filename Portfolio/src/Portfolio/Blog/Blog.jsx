import React from "react";
import "./Blog.css";
import Bcard from "./Bcard";

const Blog = ({ toggle }) => {
  return (
    <div id="blog" className={toggle ? "blog-dark" : "blog-light"}>
      <p id="blog-text">THOUGHTS</p>

      <div className="blog-heading">
        <h1>From the blog</h1>
      </div>

      <div className="blog-cards">
        <Bcard
          toggle={toggle}
          image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800"
          category="Design"
          date="Mar 8, 2025"
          title="Why I ditched heavy CSS frameworks for Tailwind"
          desc="After years of fighting specificity wars, here's what finally convinced me to make the switch."
        />

        <Bcard
        toggle={toggle}
          image="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800"
          category="Dev"
          date="Feb 21, 2025"
          title="Building a design system from scratch in a weekend"
          desc="Tokens, components, docs — the process I follow to spin up a coherent system in 48 hours."
        />

        <Bcard
        toggle={toggle}
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
          category="Freelance"
          date="Jan 14, 2025"
          title="5 lessons from my first year of full-time freelancing"
          desc="Contracts, pricing, scope creep — the things nobody tells you before you go solo."
        />
      </div>
    </div>
  );
};

export default Blog;