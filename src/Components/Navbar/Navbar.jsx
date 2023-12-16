import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className='navbar' id='navbar'>
      <div className='container navbar-content flex'>
        <div className='flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img src={logoImg} alt="site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>EARTHUB</span>
          </Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/review" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Review</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
