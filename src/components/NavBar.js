import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex justify-between text-center bg-lime-600 sticky top-0">
      <Link to="/" className="font-bold text-2xl text-center text-white m-2">
        Hi-Scape
      </Link>
      <ul className="flex justify-between text-white">
        <li className="p-2 mx-3 hover:bg-neutral-400">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="p-2 mx-3 hover:bg-neutral-400">
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="p-2 mx-3 hover:bg-neutral-400">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
