import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-wrapper">
        <div className="app__navbar-logo">
          <img src={images.gericht} alt="app logo" />
        </div>
        <ul className='app__navbar-links'>
          <li className='p__opensans'>
            <a href="#home">Home</a>
          </li>
          <li className='p__opensans'>
            <a href="#home">About</a>
          </li>
          <li className='p__opensans'>
            <a href="#home">Menu</a>
          </li>
          <li className='p__opensans'>
            <a href="#home">Awards</a>
          </li>
          <li className='p__opensans'>
            <a href="#home">Contact</a>
          </li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className='p__opensans'>Log in / Register</a>
          <svg className='app__navbar-login_separator' width="2" height="57" viewBox="0 0 2 57" fill="none"><path d="M1 0V57" stroke="url(#paint0_radial_0_364)"/><defs><radialGradient id="paint0_radial_0_364" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.5 28.5) rotate(90) scale(28.5 0.5)"><stop offset="0.588542" stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient></defs></svg>
          <a href="/" className='p__opensans'>Book table</a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#FFF" fontSize={27} onClick={() => setToggleMenu(true)}/>
          
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className='app__navbar-smallscreen_links'>
                <li className='p__opensans'>
                  <a href="#home">Home</a>
                </li>
                <li className='p__opensans'>
                  <a href="#home">About</a>
                </li>
                <li className='p__opensans'>
                  <a href="#home">Menu</a>
                </li>
                <li className='p__opensans'>
                  <a href="#home">Awards</a>
                </li>
                <li className='p__opensans'>
                  <a href="#home">Contact</a>
                </li>
              </ul>
            </div>
          )}
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
