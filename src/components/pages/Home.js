import React from 'react';
import logo from '../../assets/logo.png';
import { AiOutlineWechat } from 'react-icons/ai';

import { FaPersonDigging, FaCheck } from 'react-icons/fa6';

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
      <div className="flex flex-col items-center sm:flex-wrap justify-center h-full sm:flex-row sm:justify-evenly pb-14 md:pb-36 bg-blend-overlay bg-gray-700 bg-cover bg-no-repeat  bg-center w-full bg-hedges">
        <div className="flex flex-col items-center justify-evenly bg-white rounded-md shadow-lg h-64 w-80 md:h-96 md:w-80 mt-32 text-center transform transition duration-300  p-2">
          <div className="border-green-600 rounded-full border-solid border-[4px] p-3">
            <AiOutlineWechat className="text-green-600 h-6 w-6 md:h-12 md:w-12" />
          </div>
          <h4 className="font-serif text-md text-slate-600 md:text-2xl">
            1. Consultation & Appraisal
          </h4>
          <p className="font-serif text-sm md:text-base text-slate-700 p-2">
            A phone conversation will provide us with detailed information
            regarding your specific request. Once an appraisal date is set,
            we'll visit your location to discuss and finalize pricing.
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly bg-white rounded-md shadow-lg h-64 w-80 md:h-96 md:w-80 mt-32 text-center p-2">
          <div className="border-green-600 rounded-full border-solid border-[4px] p-3">
            <FaPersonDigging className="text-green-600 h-6 w-6 md:h-12 md:w-12 " />
          </div>
          <h4 className="font-serif text-md text-slate-600 md:text-2xl">
            2. Layout & Development
          </h4>
          <p className="font-serif text-sm md:text-base text-slate-700 p-2">
            Confirmation of the final design will allow us to order the best
            products to match your build requirements. Upon product delivery,
            the project will commence alongside effective communication leading
            up to completion.
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly bg-white rounded-md shadow-lg h-64 w-80 md:h-96 md:w-80 mt-32 text-center transform transition duration-300  p-2">
          <div className="border-green-600 rounded-full border-solid border-[4px] p-3">
            <FaCheck className="text-green-600 h-6 w-6 md:h-12 md:w-12" />
          </div>

          <h4 className="font-serif text-md text-slate-600 md:text-2xl">
            3. Enjoy Your New Space
          </h4>
          <p className="font-serif text-sm md:text-base text-slate-700 p-2">
            With an outdoor space that has finally brought you peace of mind,
            it's time to start enjoying it. Congratulations, now get back to
            embracing the outdoors with family and friends!
          </p>
        </div>
      </div>
    </>
  );
}
export default Home;
