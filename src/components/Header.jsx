import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Css/Header.css";
import Menu from "./Menu";
import winelogo from "../assets/wine-logo.jpg"

function Header() {
  return (
    // <Navbar bg="secondary" expand="lg">

    //   <Navbar.Brand href="/">
    //     <div className="logo">
    //       <img src={winelogo} alt="winelogo" style={{ width: "35px" }} />
    //     </div>
    //   </Navbar.Brand>

    //   <Nav className="listAuto">
    //     <Nav.Link className="basic" href="/">Home</Nav.Link>
    //     <NavDropdown title="Menu" className="basic-nav-dropdown">
    //       <NavDropdown.Item className="NavMenu">
    //         <Menu />
    //       </NavDropdown.Item>
    //     </NavDropdown>
    //     <Nav.Link className="basic" href="/contact">Contact</Nav.Link>
    //     <Nav.Link className="basic" href="/about">About</Nav.Link>
    //     <Nav.Link className="basic" href="/Login">Sign Up</Nav.Link>
    //     <Nav.Link className="basic" href="/register"></Nav.Link>
    //     <Nav.Link className="basic" href="/Login"></Nav.Link>
    //   </Nav>
    // </Navbar>

    <nav>
      <ul className='Menu'>
        <li className='logo'><a href="/">NormanBillion</a></li>
        <li className='item'><a href="/">Home</a></li>
        <li className='item'><a href="/menu">Menu</a></li>
        <li className='item'><a href="/contact">Contact</a></li>
        <li className='item'><a href="/about">About</a></li>
        <li className='item button'><a href="/Login">Login</a></li>
        <li className='item button secondary'><a href="/register">Sign Up</a></li>
        <li className='toggle'><a href="#"><span className="bars"></span></a></li>

      </ul>
    </nav>
  );
}

export default Header;
