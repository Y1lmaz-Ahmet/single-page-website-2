import React, { useState } from "react";
import "./NavbarStyles.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href='/' className='navbar-logo'>
          Chatflow
        </a>
        <div
          className={isOpen ? "menu-icon open" : "menu-icon"}
          onClick={toggle}
        >
          <div className='menu-icon__line' />
          <div className='menu-icon__line' />
          <div className='menu-icon__line' />
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <a href='/' className='nav-link'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='/pricing' className='nav-link'>
              Pricing
            </a>
          </li>
          <li className='nav-item'>
            <a href='/support' className='nav-link'>
              Support
            </a>
          </li>
          <li className='nav-item'>
            <a href='/contact' className='nav-link'>
              Contact
            </a>
          </li>
        </ul>
        <div className='navbar-buttons'>
          <button>login</button>
          <button>question</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
