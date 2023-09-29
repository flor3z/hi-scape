import React from 'react';
import logo from '../../assets/logo.png';
// continue with relative path for bg iamge

function Home() {
  return (
    <>
      <div className="flex items-center  justify-center bg-blend-color bg-cover bg-no-repeat h-96 md:max-h-screen bg-center w-full bg-low-grass ">
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
              INTEGRTIY
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
      <br />
      <div className="flex flex-col items-center text-center font-nunito  mt-20">
        <h2 className=" text-slate-800 font-bold text-3xl mb-10">
          Quick Overview
        </h2>
        <div className="border-solid bg-slate-500 w-64 h-[2px]"></div>
        <div className="mt-10 font-semibold ">
          <p className="text-slate-700 mb-10">
            A small business dedicated to its professional craft, we provide
            exceptional landscaping through precise attention to detail.
          </p>
          <p className="text-slate-700">
            Our years of hands-on experience enables us to tailor each outdoor
            living space with superior care.{' '}
          </p>
        </div>
      </div>
      <br />
    </>
  );
}
export default Home;
