import React from 'react';
import logo from '../../assets/logo.png';
import { AiOutlineWechat } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';
import {
  FaPersonDigging,
  FaCheck,
  FaCrown,
  FaInstagram,
  FaPhoneFlip,
  FaEnvelope,
  FaYoutube,
} from 'react-icons/fa6';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
// continue with relative path for bg iamge

function Home() {
  return (
    <>
      <div className="flex items-center justify-center  bg-cover bg-no-repeat h-96 md:max-h-screen bg-center w-full bg-low-grass bg-blend-overlay bg-gray-700">
        <div>
          <img
            className="flex-col a top-1/3 mx-auto  bg-cover h-24 sm:h-36 md:h-60 drop-shadow-2xl animate-fade-down"
            src={logo}
            alt="logo"
          />
          <div className="flex flex-row justify-center md:mt-1 items-center text-center animate-fade-up">
            <h3 className="text-white sm:tracking-wider font-serif text-base mx-2 md:text-2xl sm:px-3 md:px-5">
              HONESTY
            </h3>
            <span className="text-yellow-400 font-extrabold md:text-2xl">
              •
            </span>
            <h3 className="text-white sm:tracking-wider font-serif text-base mx-2 md:text-2xl sm:px-3 md:px-5">
              INTEGRITY
            </h3>
            <span className="text-yellow-400 font-extrabold md:text-2xl">
              •
            </span>
            <h3 className="text-white sm:tracking-wider font-serif text-base mx-2 md:text-2xl sm:px-3 md:px-5">
              SERVICE
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center font-nunito  mt-20 mb-28">
        <h2 className="text-slate-800 font-bold text-3xl mb-10">
          Simple Summary
        </h2>
        <div className="border-solid bg-slate-500 w-64 h-[2px]"></div>
        <div className="mt-10 font-semibold ">
          <p className="text-slate-700 mb-10 px-4">
            A small business dedicated to its professional craft, we provide
            exceptional landscaping through precise attention to detail.
          </p>
          <p className="text-slate-700 px-4">
            Our years of hands-on experience enables us to tailor each outdoor
            living space with superior care.{' '}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-wrap justify-center h-full sm:flex-row sm:justify-evenly bg-blend-overlay bg-gray-700 bg-cover bg-no-repeat pb-14 bg-center w-full bg-hedges">
        <div className="flex flex-col items-center justify-evenly bg-white rounded-md shadow-lg h-56 w-80 md:h-80 md:w-80 mt-32 text-center transform transition duration-300  p-2">
          <div className="border-green-600 rounded-full border-solid border-[4px] p-3">
            <AiOutlineWechat className="text-green-600 h-6 w-6 md:h-12 md:w-12" />
          </div>
          <h4 className="font-serif text-md text-slate-600 md:text-xl">
            1. Consultation & Appraisal
          </h4>
          <p className="font-serif text-slate-700 text-sm">
            A phone conversation will provide us with detailed information
            regarding your specific request. Once an appraisal date is set,
            we'll visit your location to discuss and finalize pricing.
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly bg-white rounded-md shadow-lg h-56 w-80 md:h-80 md:w-80 mt-32 text-center p-2">
          <div className="border-green-600 rounded-full border-solid border-[4px] p-3">
            <FaPersonDigging className="text-green-600 h-6 w-6 md:h-12 md:w-12 " />
          </div>
          <h4 className="font-serif text-md text-slate-600 md:text-xl">
            2. Layout & Development
          </h4>
          <p className="font-serif text-slate-700 text-sm">
            Confirmation of the final design will allow us to order the best
            products to match your build requirements. Upon product delivery,
            the project will commence alongside effective communication leading
            up to completion.
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly bg-white rounded-md shadow-lg h-56 w-80 md:h-80 md:w-80 mt-32 text-center transform transition duration-300  p-2">
          <div className="border-green-600 rounded-full border-solid border-[4px] p-3">
            <FaCheck className="text-green-600 h-6 w-6 md:h-12 md:w-12" />
          </div>

          <h4 className="font-serif text-md text-slate-600 md:text-xl">
            3. Celebrate Your New Space
          </h4>
          <p className="font-serif text-slate-700 text-sm">
            With an outdoor space that has finally brought you peace of mind,
            it's time to start enjoying it. Congratulations, now get back to
            enjoying the outdoors with family and friends!
          </p>
        </div>
      </div>
      <div className="bg-gray-200 pt-4">
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
        <div className="flex flex-col items-center text-center font-serif pt-10 md:pt-20 flex-wrap mx-4">
          <h2 className="text-neutral-500 text-lg md:text-2xl font-bold">
            The Outdoor Space You Deserve
          </h2>
          <h4 className="text-neutral-400 pt-8">
            Check out our content page to learn how to get in touch with us
          </h4>
        </div>
        <div className="flex justify-center text-center text-white pt-14 md:pt-20 text-3xl md:text-4xl">
          <FaInstagram className="mx-4 md:mx-14 bg-neutral-500 p-1 rounded-md hover:scale-110 transform translate duration-200 ease-in" />
          <FaPhoneFlip className="mx-4 md:mx-14 bg-neutral-500 p-1 rounded-md hover:scale-110 transform translate duration-200 ease-in" />
          <FaEnvelope className="mx-4 md:mx-14 bg-neutral-500 p-1 rounded-md hover:scale-110 transform translate duration-200 ease-in" />
          <FaYoutube className="mx-4 md:mx-14 bg-neutral-500 p-1 rounded-md hover:scale-110 transform translate duration-200 ease-in" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#273036"
            fill-opacity="0.1"
            d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
export default Home;
