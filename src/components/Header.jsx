import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Css/Header.css";
import Menu from "./Menu";
import winelogo from "../assets/wine-logo.jpg"

function Header() {
  return (

    <nav>
      <ul className='Menu'>
        < a href="/"><img className="ImageLogo" src={winelogo} /></a>
        <li className='logo'><a href="/">The Farm Wine</a></li>
        <li className='item'><a href="/">Home</a></li>
        <li className='item'><a href="/menu">Menu</a></li>
        <li className='item'><a href="/contact">Contact</a></li>
        <li className='item'><a href="/about">About</a></li>
        <li className='item button'><a href="/Login">Login</a></li>
        <li className='item button secondary'><a href="/register">Sign Up</a></li>
        <li className='toggle'><a href="#"><span className="bars"></span></a></li>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>

      </ul>
    </nav>
  );
}

export default Header;
