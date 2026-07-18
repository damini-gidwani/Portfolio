import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const Contact = ({ toggle }) => {
  return (
    <section id="contact">
      <div
        className={`contact-container ${
          toggle ? "contact-dark" : "contact-light"
        }`}
      >
        <div className="contact-left">
          <p className="contact-small-heading" style={{color:"orange"}}>GET IN TOUCH</p>

          <h1 className="contact-heading">
            Let's work
            <br />
            together
          </h1>

          <p className="contact-description">
            I'm open to internship opportunities, freelance projects,
            collaborations, and creative ideas. Feel free to reach out!
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>daminigidwani@gmail.com</span>
            </div>

            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <span>linkedin.com/in/damini-gidwani</span>
            </div>

            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <span>github.com/DaminiGidwani13</span>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form>
            <div className="contact-row">
              <input
                className="contact-input"
                type="text"
                placeholder="Your Name"
              />

              <input
                className="contact-input"
                type="email"
                placeholder="Email"
              />
            </div>

            <input
              className="contact-input"
              type="text"
              placeholder="Subject"
            />

            <textarea
              className="contact-textarea"
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button className="contact-btn">
              Send Message
              <HiArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;