import React from 'react'
import {NavLink} from 'react-router-dom';
import './nav.css';
export const NavBar = () => {
  return (
    <div className="nav-bar">
        <ul>
        <li><NavLink to={"/login"}>Login</NavLink></li>
        <li><NavLink to={"/services"}>Services</NavLink></li>
        <li><NavLink to={"/contacts"}>Contacts</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        </ul>
    </div>
  )
}
export default NavBar;
