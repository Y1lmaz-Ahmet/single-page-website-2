import React from "react";
import "./NavbarStyles.css";
const Navbar = () => {
  return (
    <nav className='navbar'>
      <article className='navbar-title'>
        <h1>ChatFlow</h1>
      </article>

      <ul className='navbar-link-container'>
        <li>Home</li>
        <li>Pricing</li>
        <li>Support</li>
        <li>Contact</li>
      </ul>

      <article className='navbar-buttons-container'>
        <button>Login</button>
        <button>Register</button>
      </article>
    </nav>
  );
};

export default Navbar;