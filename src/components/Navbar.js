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
        <li>
          <NavLink to="/"></NavLink>
        </li>
        <li>
          <NavLink to="/categories">Category</NavLink>
        </li>
      </ul>
    </nav>
  );
}
