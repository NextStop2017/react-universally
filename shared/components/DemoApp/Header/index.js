import React from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Menu from './Menu';
import style from './../globals.css';

function Header() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <Menu />
    </div>
  );
}

export default Header;
