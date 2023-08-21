import React from "react";
import Header from "../components/Header";
import Footer from "../pages/Footer";
import "../Css/ContactUs.css";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <Header />
      <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  The Media Mill, 7 Quince street
                  <br />
                  Johannesburg
                  <br />
                  2092
                </p>
              </div>
            </div>
            [3:36 PM]
            <div className="box">
              <div className="icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>0615449366</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>Info@thedigitalacademy.co.za</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" required="required" />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" required="required" />
                <span>Eamil</span>
              </div>
              <div className="inputBox">
                <textarea name="" id="" required="required"></textarea>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
