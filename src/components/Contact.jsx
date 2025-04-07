import React from 'react';
import './Contact.css';

import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success(res.message);
      event.target.reset();
    } else {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div id="contact" className="contact">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Available at any time. Just drop a message or reach out through the contact details.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <FiMail className="contact-icon" />
              <p>example@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FiPhone className="contact-icon" />
              <p>987456123</p>
            </div>
            <div className="contact-detail">
              <FiMapPin className="contact-icon" />
              <p>United States</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" placeholder="Enter your Name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" placeholder="Enter your Email" required />

          <label htmlFor="message">Write Your Message Here</label>
          <textarea name="message" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
