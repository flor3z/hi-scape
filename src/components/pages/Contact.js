import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import location from '../../assets/location.jpg';
import { FaCheck } from 'react-icons/fa6';

function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center h-96 w-full  bg-cover bg-no-repeat bg-center bg-blend-overlay bg-gray-700 bg-contactcell">
        <h1 className="tracking-wider font-serif text-6xl md:text-8xl text-white  blur-none">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-col items-center mt-20 py-10 px-4">
        <div className="flex flex-row items-center justify-center flex-wrap">
          <span className="text-red-700 text-6xl hover:animate-rotate-y">
            <MdLocationPin />
          </span>

          <h1 className="font-serif text-black text-3xl md:text-5xl text-center">
            We're Located In Mississauga!
          </h1>
        </div>
        <div className="border-solid bg-slate-500 w-60 h-[2px] mt-2 my-4"></div>
        <p className="text-center text-md md:text-lg">
          Conveniently located between two major high-ways, HISCAPE can easily
          travel to job sites within central Mississuaga and the surrouding GTA.
        </p>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-evenly text-center py-8 flex-wrap">
        <div className="flex flex-col items-center md:items-start max-w-xl p-2">
          <div className="text-5xl font-bold font-nunito md:text-left">
            <h1>Contact us</h1>
            <h1>for details</h1>
          </div>
          <p className="font-light py-2">
            Let's explore how HISCAPE can work for you.
          </p>
          <div className="bg-neutral-200 p-6 rounded-sm shadow-md text-left">
            <div className="flex flex-row justify-center">
              <FaCheck className="text-4xl text-green-600" />
              <p className="m-2">
                While away from your property, our team can visit for routine
                check-up's and maintenance.
              </p>
            </div>

            <div className="flex flex-row  border-opacity-80 border-t-2 border-gray-300 border-b-2">
              <FaCheck className="text-4xl text-green-600" />
              <p className="m-2">
                Give us a shout if you're seeking advice for yard improvements,
                or better yet an on-site visit for more accuracy.
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <FaCheck className="text-4xl text-green-600" />
              <p className="m-2">
                We want to ensure customers are satisfied with each project.
                Give us a call at your earliest convenience with any questions
                or concerns.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-md overflow-hidden rounded-lg shadow-md">
          <img
            className="object-cover hover:scale-150 transform transition-all duration-300 ease-out"
            src={location}
            alt="icon"
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
