import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <section className='app__header' id='home'>
    <div className="app__wrapper section__container app__header-wrapper">
      <div className="app__wrapper_info">
        <SubHeading title='Chase the new flavour'/>
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans app__header-p">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img className='app__header-img' width="1334" height="1472" src={images.welcome} alt="header img" />
      </div>
    </div>
  </section>
);

export default Header;
