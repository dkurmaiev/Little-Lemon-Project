import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo1 from './images/LittleLemonLogo1.png'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        
        <img src={Logo1} alt="Logo" ></img>
        
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/menu" activeClassName="active">
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/reservation" activeClassName="active">
              Reservation
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
