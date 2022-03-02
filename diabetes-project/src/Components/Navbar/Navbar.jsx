import React from "react";
import ReactDOM from "react-dom";
import "./Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
export default function Navbar({ home }) {
  const closeMenu = () => {
    const element = document.getElementById("navLinks");
    ReactDOM.findDOMNode(element).style.right = "-150px";
  };
  const showMenu = () => {
    const element = document.getElementById("navLinks");
    ReactDOM.findDOMNode(element).style.right = "0";
  };
  return (
    <section
      className='header-container'
      style={home ? { height: "70vh" } : { height: "15vh" }}
    >
      <nav className='navbar'>
        <Link className='link' to='/'>
          <div className='logo'>
            <h2 style={{ display: "inline" }}>WakeUpHealth</h2>
          </div>
        </Link>

        <div className='nav-links' id='navLinks'>
          <CloseIcon
            style={{ color: "#fff" }}
            className='nav-icon'
            id='close'
            alt='Close Menu Button'
            onClick={closeMenu}
          />

          <ul>
            <Link className='link' to='/'>
              <li>Home</li>
            </Link>
            <Link className='link' to='/tracker'>
              <li>Tracker</li>
            </Link>
            <Link className='link' to='/testimonial'>
              <li>Testimonies</li>
            </Link>
            <Link className='link' to='/auth'>
              <li>Accounts</li>
            </Link>
            <Link className='link' to='/aboutUs'>
              <li>About Us</li>
            </Link>
          </ul>
        </div>

        <MenuIcon
          style={{ color: "#fff" }}
          className='nav-icon'
          id='menu'
          onClick={showMenu}
        />
      </nav>
      {home ? (
        <div className='textBox'>
          <h1>A Healthy Heart Is All We Need</h1>
          <p>
            Wake up health allows you to keep track of your blood sugar, blood
            pressure and weight.
          </p>
          <button>
            <Link className='link' to='/auth'>
              Get Started
            </Link>
          </button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
