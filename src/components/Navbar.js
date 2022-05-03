import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
  };
  const ulStyle = {
    display: 'flex',
    gap: '1rem',
    listStyle: 'none',
  };
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
<<<<<<< HEAD
        <li>
          <NavLink to="/"></NavLink>
        </li>
        <li>
          <NavLink to="/categories">Category</NavLink>
        </li>
=======
        <li><NavLink to="/">Books </NavLink></li>
        <li><NavLink to="/categories">Category</NavLink></li>
>>>>>>> 33763f95d19cbf4c464dee3807c0828d7cb437bb
      </ul>
    </nav>
  );
}
