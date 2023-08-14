import React from 'react';
import Header from '../components/Header';
import Footer from '../pages/Footer';
import '../Css/ContactUs.css'

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email address:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" />

        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default ContactUs;