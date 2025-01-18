import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import backgroundVideo from "../assets/ContactBackground.mp4";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", // Added the email field here
    subject: "",
    organization: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_h8xm8gh", // EmailJS service ID
        "template_ghpgbgn", // EmailJS template ID
        formData,
        "aPD3rzeieTATvvwNU" // EmailJS public key
      );

      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "", // Reset the email field
        subject: "",
        organization: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <div id="video-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email" // Use "email" type for proper validation
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization:</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
