import { useRef } from "react";
import emailjs from "@emailjs/browser";
import './ContactSection.css';
import HourGlassBackground from "./CodeRain";

function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2g2wrlo', // Your EmailJS service ID
      'template_7p50cxd', // Your EmailJS template ID
      form.current, 
      'Ur93kvcmC1e1rtFEh' // Your EmailJS public key
    ).then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error: ", error.text);
      }
    );
  };

  return (
    <div className="contact-section">
      <HourGlassBackground />

      <div className="form-container">
        <h2 className="form-title">Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail} className="form-grid">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            className="form-input" 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            rows="5" 
            className="form-textarea" 
            required
          ></textarea>
          <div className="form-button-wrapper">
            <button className="submit-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
