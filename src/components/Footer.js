import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaCrown, FaInstagram, FaPhoneFlip, FaEnvelope } from 'react-icons/fa6';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

function Footer() {
  return (
    <>
      <div className="bg-gray-200 bg-footerbg bg-cover pt-4 md:pt-0 bg-no-repeat h-96 pb-60">
        <div className="flex justify-between relative">
          <div className="flex font-serif text-xl md:text-4xl text-neutral-500 m-2 drop-shadow-md">
            <FaCrown className="text-yellow-400 mr-2" />
            HISCAPE
          </div>
          <button
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <MdOutlineKeyboardDoubleArrowUp className="text-4xl hover:animate-bounce absolute right-2 top-4 cursor-pointer" />
          </button>
        </div>
        <div className="flex flex-col items-center text-center font-serif pt-10 md:pt-16 flex-wrap mx-4">
          <h2 className="text-neutral-500 text-lg md:text-2xl font-bold">
            The Outdoor Space You Deserve
          </h2>
          <h4 className="text-neutral-400 pt-6">
            Contacting us made easy with the information below
          </h4>
        </div>
        <div className="flex justify-evenly text-center text-white pt-14 md:pt-9 flex-wrap">
          <div className="flex flex-col items-center transform translate duration-200 ease-in mx-4 sm:mx-0">
            <FaInstagram className="text-3xl sm:text-4xl mx-4 md:mx-14 bg-neutral-500 p-1 rounded-md hover:bg-green-600 transform translate duration-200 ease-in" />
            <p className="text-sm sm:text-base text-neutral-700">
              @hiscape.gta
            </p>
          </div>
          <div className="flex flex-col items-center transform translate duration-200 ease-in mx-4 sm:mx-0">
            <FaPhoneFlip className="text-3xl sm:text-4xl mx-4 md:mx-14 bg-neutral-500 p-1 rounded-md hover:bg-green-600 transform translate duration-200 ease-in" />
            <p className="text-sm sm:text-base text-neutral-700">
              647-226-0068
            </p>
          </div>
          <div className="flex flex-col items-center transform translate duration-200 ease-in">
            <FaEnvelope className="text-3xl sm:text-4xl mx-4 md:mx-14 bg-neutral-500 p-1 rounded-md hover:bg-green-600 transform translate duration-200 ease-in" />
            <p className="text-sm sm:text-base text-neutral-700">
              hiscapeGTA@outlook.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center text-white  tracking-wider h-10 bg-neutral-700">
        © All Rights Reserved | Established 2022
      </div>
    </>
  );
}

export default Footer;
