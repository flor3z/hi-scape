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
        <div className="flex justify-center text-center text-white pt-14 md:pt-7 text-3xl md:text-4xl ">
          <FaInstagram className="mx-4 md:mx-14 bg-neutral-500 p-1 rounded-md hover:scale-110 transform translate duration-200 ease-in" />
          <FaPhoneFlip className="mx-4 md:mx-14 bg-neutral-500 p-1 rounded-md hover:scale-110 transform translate duration-200 ease-in" />
          <FaEnvelope className="mx-4 md:mx-14 bg-neutral-500 p-1 rounded-md hover:scale-110 transform translate duration-200 ease-in" />
          {/* <FaYoutube className="mx-4 md:mx-14 bg-neutral-500 p-1 rounded-md hover:scale-110 transform translate duration-200 ease-in" /> */}
        </div>
        {/* <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#273036"
              fill-opacity="0.1"
              d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div> */}
      </div>
    </>
  );
}

export default Footer;
