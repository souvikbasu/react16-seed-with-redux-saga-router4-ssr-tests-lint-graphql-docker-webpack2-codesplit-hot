import React from 'react';

import logo from './logo.svg';
import './style.css';

const Header = ({ user }) => (
  <header className="header">
    <img src={logo} className="logo" alt="logo" />
    <h1 className="title">Welcome to React {user ? user.firstName : ''}</h1>
  </header>
);

export default Header;
