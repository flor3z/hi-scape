import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa6';
import { useState } from 'react';

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  // continue trying to solve active and hover classes for Navlink//
  const activeLink = 'bg-green-800 hover:bg-green-800';
  const normalLink =
    'p-2 sm:mx-2 w-full text-center rounded-md hover:bg-green-700 transform transition-all duration-200';

  return (
    <nav className="flex flex-col z-10 items-start shadow-lg sm:flex-row sm:justify-between sm:items-center w-full transform transition-all duration-500  bg-green-600 sticky top-0">
      <Link to="/" className="flex font-serif text-2xl  text-white m-2">
        <FaCrown className="text-yellow-400 text-3xl mr-2" />
        HISCAPE
      </Link>

      <div
        className=" absolute top-3 right-2 w-10 h-10 text-2xl sm:hidden cursor-pointer"
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <ul
        className={
          !openNav
            ? 'sm:flex flex-col w-full sm:w-auto sm:justify-end sm:flex-row text-white transform transition-all duration-500 hidden'
            : 'sm:flex flex-col w-full sm:w-auto sm:justify-end sm:flex-row text-white transform transition-all duration-500'
        }
      >
        {/* <li className="w-full text-center"> */}
        <NavLink
          // className={({ isActive }) => (isActive ? activeLink : '')}
          className={({ isActive }) =>
            [
              isActive ? activeLink : '',
              'p-2 sm:mx-2 w-full text-center rounded-md flex justify-center hover:bg-green-700 transform transition-all duration-200',
            ].join(' ')
          }
          to="/about"
        >
          About
        </NavLink>
        {/* </li> */}

        {/* <li className={normalLink}> */}
        <NavLink
          className={({ isActive }) =>
            [
              isActive ? activeLink : '',
              'p-2 sm:mx-2 w-full text-center rounded-md flex justify-center hover:bg-green-700 transform transition-all duration-200',
            ].join(' ')
          }
          to="/services2"
        >
          Services
        </NavLink>
        {/* </li> */}
        {/* <li className={normalLink}> */}
        <NavLink
          className={({ isActive }) =>
            [
              isActive ? activeLink : '',
              'p-2 sm:mx-2 w-full text-center rounded-md flex justify-center hover:bg-green-700 transform transition-all duration-200',
            ].join(' ')
          }
          to="/contact"
        >
          Contact
        </NavLink>
        {/* </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
