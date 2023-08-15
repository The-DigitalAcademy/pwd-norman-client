import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Css/Header.css";
import Menu from "./Menu";
import winelogo from "../assets/wine-logo.jpg"
import Cart from "../pages/Cart";

function Header() {
  return (
    
    <nav>
      <ul className='Menu'>
        < a href="/"><img className="ImageLogo" src={winelogo}/></a>
        <li className='logo'><a href="/">The Farm Wine</a></li>
        <li className='item'><a href="/">Home</a></li>
        <li className='item'><a href="/menu">Menu</a></li>
        <li className='item'><a href="/contact">Contact</a></li>
        <li className='item'><a href="/about">About</a></li>
        <li className='item'><a href="/about">Cart</a></li>
        <li className='item button'><a href="/Login">Login</a></li>
        <li className='item button secondary'><a href="/register">Sign Up</a></li>
        <li className='toggle'><a href="#"><span className="bars"></span></a></li>
       

      </ul>
    </nav>
  );
}

export default Header;
