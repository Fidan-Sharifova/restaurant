import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import "./Header.scss"
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='navbar'>
      <h1>Pulse.</h1>
      <div className="navbarLinks">
        <ul>
          <li><a style={{color:"rgb(255,197,21)"}} href="">Home</a></li>
          <li><a href="">Restaurant</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Contact</a></li>
          <li><Link to={'/add'}>Add</Link></li>
        </ul>
      </div>
       <div className="contact">
       <p style={{color:"rgb(255,197,21)"}}> Reservation</p>
      <p><FaPhoneAlt />           652-345 3222 11</p>
       </div>
       
    </div>
  )
}

export default Header