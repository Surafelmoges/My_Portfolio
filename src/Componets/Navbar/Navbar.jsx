import React from 'react'
import logo from '../../assets/logo_surafel.svg'
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='NavBar'>
     <img src={logo} alt="" />
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">
        <p>Connect with Me</p>
      </div>
    </div>
  )
}
