import React from 'react';
import daniel from '../../assets/Daniel.png';

function About() {
  return (
    <>
      <div className="flex flex-col items-center text-center bg-white my-20">
        <h1 className="flex justify-center text-center text-5xl font-serif ">
          IT'S SIMPLE.
        </h1>
        <div className="border-solid bg-slate-500 w-48 h-[2px] mt-2"></div>
        <div className="text-lg">
          <p className="my-6 mx-4 ">
            Our mission is to reinvent landscaping services by providing
            exceptional attention to detail and effective communication with our
            clientele.
          </p>
          <p className="my-8 mx-4 ">
            By following our intergrated values;
            <span className="font-bold text-green-600"> Honesty</span>,
            <span className="font-bold text-green-600"> Integrity</span> and
            <span className="font-bold text-green-600"> Service</span>, we aim
            to not only meet the standards but go beyond them.
          </p>
        </div>
      </div>
      <div className="bg-neutral-200 flex flex-col items-center md:mx-auto md:flex md:flex-row md:justify-evenly md:flex-wrap text-center pt-10 mb-10">
        <div className="flex flex-col items-center w-80 md:w-96">
          <img
            className="rounded-full shadow-lg shadow-gray-800"
            alt="portrait"
            src={daniel}
          />
          <h4 className="my-8 font-sans text-gray-500 text-lg">
            Owner & Founder | Daniel Gough
          </h4>
        </div>
        <div className="flex flex-col text-left md:w-96 mx-4 border-solid  bg-white mb-2 p-1 rounded-md shadow-md">
          <h3 className="font-serif text-xl font-bold p-4">The Beginning</h3>
          <p className="font-serif text-lg font-light p-2 md:pl-4">
            A home grown company, HISCAPE started with a simple yet clear idea;
            bring the outdoors back to life. Initially learning from various
            expert individuals already planted in the industry, a high-level of
            interest grew to branch out independently. A passion for nature, the
            kindness to care for it, and desire to exceed customer satisfaction
            has brought this company along this path. HISCAPE is more than a
            company, it is family, with members from many different places all
            rooted together. Through honest work, unmatched integrity and
            dedicated to excellent service, HISCAPE was born.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-wrap justify-center h-full sm:flex-row sm:justify-evenly pb-14 md:pb-36 bg-white shadow-xl">
        <div className="shadow-md shadow-gray-700 rounded-sm flex flex-col  justify-evenly p-6  h-72 w-80 md:h-80 md:w-80 mt-32 text-left bg-green-800 text-white">
          <h4 className="mb-3 text-2xl font-sans font-semibold tracking-wider">
            HONESTY
          </h4>
          <p className="font-sans text-lg">
            We thrive off of honest work. Taking every opportuity to be as clear
            and concise with each task granted to our team. Through this
            methodology we leave each day with a smile on our face for the
            effort we adhere to.
          </p>
        </div>

        <div className="shadow-md shadow-gray-400 rounded-sm flex flex-col  justify-evenly p-6 h-72 w-80 md:h-80 md:w-80 mt-32 text-left bg-green-100 text-black">
          <h4 className="mb-3  text-2xl font-sans font-semibold tracking-wider">
            INTEGRITY
          </h4>
          <p className="font-sans text-lg">
            We conduct ourselves respectfully in regards to our clients and
            their community. We understand that trust is a firm foundation for
            business relationships and we strive to build upon that with every
            interaction.
          </p>
        </div>

        <div className="shadow-md shadow-gray-700 rounded-sm flex flex-col  justify-evenly  p-6  h-72 w-80 md:h-80 md:w-80 mt-32  text-left bg-green-950 text-white">
          <h4 className="mb-3 text-2xl font-sans font-semibold tracking-wider">
            SERVICE
          </h4>
          <p className="font-sans text-lg">
            We take the time to communicate with our clients and listen to their
            specifc needs. We know that being exceptional with details starts
            with understanding our clients. Great service is in the details!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
