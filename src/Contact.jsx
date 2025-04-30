import React from "react";
import "./App.css"; // or your relevant CSS file
import CodeRain from "./CodeRain"; // Background animation


function ContactSection() {
  return (
    <div className="contact-section">
         <CodeRain /> {/* Background rain effect */}
      <div className="form-container">
        <h2 className="form-title">Get in touch</h2>

        <form
          className="form-grid"
          action="tanakamahapa5@gmail.com" // Replace with your Formspree link
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-input"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="form-textarea"
            required
          ></textarea>
          <div className="form-button-wrapper">
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
