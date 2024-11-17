import React from 'react'
import logo from '../../assets/brand_logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
   <nav className='container'>
    <img src={logo} alt="" />
    <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <button>Sign In</button>
   </nav>
  )
}

export default Navbar