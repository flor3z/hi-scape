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
            Check out our content page to learn how to get in touch with us
          </h4>
        </div>
        <div className="flex justify-evenly text-center text-white pt-14 md:pt-7 text-3xl md:text-4xl flex-wrap">
          <div className="flex flex-col items-center hover:scale-110 transform translate duration-200 ease-in">
            <FaInstagram className="mx-4 md:mx-14 bg-neutral-500 p-1 rounded-md hover:text-green-600 transform translate duration-200 ease-in" />
            <p className="text-lg text-neutral-700">@hiscape.gta</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transform translate duration-200 ease-in">
            <FaPhoneFlip className="mx-4 md:mx-14 bg-neutral-500 p-1 rounded-md hover:text-green-600 transform translate duration-200 ease-in" />
            <p className="text-lg text-neutral-700">647-***-0068</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transform translate duration-200 ease-in">
            <FaEnvelope className="mx-4 md:mx-14 bg-neutral-500 p-1 rounded-md hover:text-green-600 transform translate duration-200 ease-in" />
            <p className="text-lg text-neutral-700">hiscape@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
