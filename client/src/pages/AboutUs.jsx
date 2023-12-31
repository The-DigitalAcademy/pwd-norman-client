import React from 'react';
import Header from '../components/Header';
import Footer from './Footer';
import '../Css/AboutUs.css';
import { Link } from 'react-router-dom';

//Profile Pictures//
import ndu from '../assets/Nduduzo.png';
import norman from '../assets/Norman.jpg';
import Sonke from '../assets/Sonke.jpg';
import Nkosinathi from '../assets/Nkosinathi.jpg';
import Thozama from '../assets/Thozama.png';
import Sibongile from '../assets/photoCV.png'
import Bonke from '../assets/Nyamalala.jpg'

const AboutUs = () => {
  return (
    <div className='background-image'>
      <Header />
      <div class="about-section">
        <h2>Our Team</h2>
        <p>The team is debating how to construct a project around wine and farming.</p>
      </div>

      <div class="row">
        <div class="column">
          <div class="card">
            <img id="wineGlass" src={ndu} alt="Wine Glass" />
            <div class="">
              <h2>Nduduzo Miya</h2>
              <p class="title">Managing Director</p>
              <p>Managing Director is focused on the highly-specialized day-to-day 
                <br/>business initiatives that must be implemented to achieve those 
                <br/>goals in specific areas of focus (product, sales, etc.).</p>
              <p>Ndu@gmail.com</p>
                <Link to="/contact">
                <button class="button">Contact</button>
                </Link>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img id="wineGlass" src={norman} alt="norman" />
            <div class="">
              <h2>Norman Billion</h2>
              <p class="title">Chief Executive Officer - CEO</p>
              <p>The CEO is responsible for making major corporate decisions, 
                <br/>managing overall operations, and setting the company's strategic 
                <br/>direction.</p>
              <p>NormanDa@gmail.com</p>
              <Link to="/contact">
                <button class="button">Contact</button>
                </Link>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">

            <img id="wineGlass" src={Bonke} alt="Bonke" />
            <div class="">
              <h2>Bonke Nyamalala</h2>
              <p class="title">Business Designer</p>
              <p> Business designers think about how every element of the 
                <br/>business model affects the consumer and client 
                <br/>experience</p>
              <p>Bonke@gmail.com</p>
              <Link to="/contact">
                <button class="button">Contact</button>
                </Link>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img id="wineGlass" src={Sonke} alt="Wine Glass" />
            <div class="">
              <h2>Sonke Mlambo</h2>
              <p class="title">Leader</p>
              <p>Leadership is the act of guiding a team or individual to achieve 
                <br/>a certain goal through direction and motivation.</p>
              <p>Sonke@gmail.com</p>
              <Link to="/contact">
                <button class="button">Contact</button>
                </Link>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img id="wineGlass" src={Sibongile} alt="norman" />
            <div class="">
              <h2>Sibongile Nhlapo</h2>
              <p class="title">Manager</p>
              <p>a process of getting the work or the task done that is required for 
                <br/>achieving the goals of an organisation in an efficient.</p>
              <p>Sibongile@gmail.com</p>
              <Link to="/contact">
                <button class="button">Contact</button>
              </Link>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img id="wineGlass" src={Thozama} alt="john" />
            <div class="">
              <h2> Thozama Marasela</h2>
              <p class="title">Staff</p>
              <p>A group of people who work for an organization, often for a special
                <br/> purpose, or who work for a manager within an organization</p>
              <p>Thozama@gmail.com</p>
              <Link to="/contact">
                <button class="button">Contact</button>
                </Link>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card Nkosinathi">
            <img id="wineGlass" src={Nkosinathi} alt="Nkosinathi" />
            <div class="">
              <h2> Nkosinathi Madonda</h2>
              <p class="title">Supervisor</p>
              <p>A supervisor oversees the day-to-day performance of employees. Depending on the 
                <br/> company, a supervisor may manage a team, a shift or an entire department. </p>
              <p>nkosinathimadonda02@gmail.com</p>
              <Link to="/contact">
                <button class="button">Contact</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* This is footer */}
    </div>
  )

}

export default AboutUs
