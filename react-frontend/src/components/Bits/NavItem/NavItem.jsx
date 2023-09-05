import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

const NavItem = ({ to, children }) => {
  return (
    <Link className="nav-item" to={to}>
      {children}
    </Link>
  );
};

export default NavItem;
