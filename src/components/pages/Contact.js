import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import location from '../../assets/location.jpg';

function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center h-96 w-full  bg-cover bg-no-repeat bg-center bg-blend-overlay bg-gray-700 bg-contactcell">
        <h1 className="tracking-wider font-serif text-6xl md:text-8xl text-white  blur-none">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-evenly text-center py-8">
        <div className="flex flex-col items-start text-left max-w-xl p-4">
          <div className="flex justify-between items-center">
            <span className="text-red-700 text-5xl">
              <MdLocationPin />
            </span>
            <h1 className="font-serif text-black text-3xl">
              We're Located In Mississauga!
            </h1>
          </div>
          <p>
            Conveniently located between two major high-ways, HISCAPE can easily
            travel to job sites within central Mississuaga and the surrouding
            GTA.
          </p>
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
