import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center w-full  bg-lime-600 sticky top-0">
      <Link to="/" className="font-bold text-2xl  text-white m-2">
        Hi-Scape
      </Link>
      <div
        className=" absolute top-3 right-2 w-10 h-10 text-2xl sm:hidden"
        onClick={() => setOpenNav(!openNav)}
      >
        <AiOutlineMenu />
      </div>
      <ul
        className={
          !openNav
            ? 'sm:flex flex-col w-full sm:w-auto mb-1 sm:justify-end sm:flex-row text-white hidden'
            : 'sm:flex flex-col w-full sm:w-auto mb-1 sm:justify-end sm:flex-row text-white'
        }
      >
        <li className="p-2 sm:mx-2 w-full text-center rounded-md hover:bg-neutral-400">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="p-2 sm:mx-2 w-full text-center  rounded-md hover:bg-neutral-400">
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="p-2 sm:mx-2 w-full text-center rounded-md hover:bg-neutral-400 ">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
