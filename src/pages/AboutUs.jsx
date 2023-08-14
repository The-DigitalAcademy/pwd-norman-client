import React from 'react';
import Header from '../components/Header';
import Footer from './Footer';
import '../Css/AboutUs.css';


//Pictures//
import image from "../assets/wine-glass.jpg";
import nom from '../assets/wine-glasses.jpg';
import norman from '../assets/Norman.jpg';
import Farm from '../assets/Farm.jpg';
import FarmGrape from '../assets/FarmGrape.jpg';
import Glass from '../assets/Glass.jpg'
import WineBottle from '../assets/Wine-Bottle.avif'

const AboutUs = () => {
  return (
    <div className='background-image'>
      <Header />
      <div class="about-section">
        <h1>Our Team</h1>
        <p>The team is debating how to construct a project around wine and farming.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      
      <div class="row">
        <div class="column">
          <div class="card">
            <img id="wineGlass" src={nom} alt="Wine Glass" />
            <div class="container">
              <h2>Nduduza Miya</h2>
              <p class="title">Managing Director</p>
              <p>Managing Director is focused on the highly-specialized day-to-day 
                <br/>business initiatives that must be implemented to achieve those 
                <br/>goals in specific areas of focus (product, sales, etc.).</p>
              <p>Ndudza@gmail.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img id="wineGlass" src={norman} alt="norman" />
            <div class="container">
              <h2>Norman Billion</h2>
              <p class="title">Chief Executive Officer - CEO</p>
              <p>The CEO is responsible for making major corporate decisions, 
                <br/>managing overall operations, and setting the company's strategic 
                <br/>direction.</p>
              <p>NormanDa@gmail.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">

            <img id="wineGlass" src={image} alt="john" />

            {/* <img src="/w3images/team3.jpg" alt="John" style= {{ width : "100%"}}/> */}
            <div class="container">
              <h2>Bonke Nyamalala</h2>
              <p class="title">Business Designer</p>
              <p> Business designers think about how every element of the 
                <br/>business model affects the consumer and client 
                <br/>experience</p>
              <p>Bonke@gmail.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img id="wineGlass" src={Farm} alt="Wine Glass" />
            <div class="container">
              <h2>Sonke Mlambo</h2>
              <p class="title">Leader</p>
              <p>Leadership is the act of guiding a team or individual to achieve 
                <br/>a certain goal through direction and motivation.</p>
              <p>Sonke@gmail.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img id="wineGlass" src={FarmGrape} alt="norman" />
            <div class="container">
              <h2>Sibongile Nhlapo</h2>
              <p class="title">Manager</p>
              <p>a process of getting the work or the task done that is required for 
                <br/>achieving the goals of an organisation in an efficient.</p>
              <p>Sibongile@gmail.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">

            <img id="wineGlass" src={Glass} alt="john" />

            {/* <img src="/w3images/team3.jpg" alt="John" style= {{ width : "100%"}}/> */}
            <div class="container">
              <h2> Thozama Marasela</h2>
              <p class="title">Staff</p>
              <p>A group of people who work for an organization, often for a special
                <br/> purpose, or who work for a manager within an organization</p>
              <p>Thozama@gmail.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">

            <img id="wineGlass" src={WineBottle} alt="john" />

            {/* <img src="/w3images/team3.jpg" alt="John" style= {{ width : "100%"}}/> */}
            <div class="container">
              <h2> Nkosinathi Madonda</h2>
              <p class="title">Supervisor</p>
              <p>A supervisor oversees the day-to-day performance of employees. Depending on the 
                <br/> company, a supervisor may manage a team, a shift or an entire department. </p>
              <p>Nkosinathi@gmail.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )

}

export default AboutUs