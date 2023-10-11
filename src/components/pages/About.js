import React from 'react';
import daniel from '../../assets/Daniel.png';

function About() {
  return (
    <>
      <div className="flex flex-col items-center text-center bg-neutral-200">
        <h1 className="flex justify-center text-center text-5xl font-serif mt-28">
          IT'S SIMPLE.
        </h1>
        <div className="border-solid bg-slate-500 w-48 h-[2px] mt-2"></div>
        <div className="text-lg">
          <p className="my-6 mx-4 ">
            Our mission is to reinvent landscaping services by providing
            exceptional attention to detail and effective communication with our
            clientle.
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
      <div className="flex flex-col items-center md:mx-auto md:flex md:flex-row md:justify-evenly md:flex-wrap text-center pt-20 mb-10">
        <div className="flex flex-col items-center w-80 md:w-96">
          <img
            className="rounded-full shadow-2xl"
            alt="portrait"
            src={daniel}
          />
          <h4 className="my-4 font-sans text-gray-500">
            Owner & Founder | Daniel Gough
          </h4>
        </div>
        <div className="flex flex-col text-left md:w-96 border-solid border-[2px] p-1 rounded-sm">
          <h3 className="font-serif text-xl font-bold p-4">The Beginning</h3>
          <p className=" text-lg font-extralight p-2 md:pl-4">
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
        <div className="flex flex-col  justify-evenly p-2  h-72 w-80 md:h-80 md:w-80 mt-32 text-left bg-green-800 text-white">
          <h4 className="mb-3 text-2xl font-nunito font-semibold tracking-wider">
            HONESTY
          </h4>
          <p className="font-extralight text-lg">
            We thrive off of honest work. Taking every opportuity to be as clear
            and concise with each task granted to our team. Through this
            methodology we leave each day with a smile on our face for the
            effort we adhere to.
          </p>
        </div>
        <div className="border-solid bg-gray-400 w-60 h-[2px] sm:w-[2px] mt-28 sm:mt-28 sm:h-60"></div>
        {/* <div className="border-s-2 px-36 border-e-2 mt-10  border-gray-400"> */}
        <div className="shadow-md flex flex-col  justify-evenly p-2 h-72 w-80 md:h-80 md:w-80 mt-32 text-left bg-green-100 text-black">
          <h4 className="mb-3  text-2xl font-nunito font-semibold tracking-wider">
            INTEGRITY
          </h4>
          <p className="font-extralight text-lg">
            We thrive off of honest work. Taking every opportuity to be as clear
            and concise with each task granted to our team. Through this
            methodology we leave each day with a smile on our face for the
            effort we adhere to.
          </p>
        </div>
        {/* </div> */}

        <div className="border-solid bg-gray-400 w-60 h-[2px] sm:w-[2px] mt-28 sm:mt-28 sm:h-60"></div>
        <div className="flex flex-col  justify-evenly  p-2  h-72 w-80 md:h-80 md:w-80 mt-32  text-left bg-green-950 text-white">
          <h4 className="mb-3 text-2xl font-nunito font-semibold tracking-wider">
            SERVICE
          </h4>
          <p className="font-extralight text-lg">
            We thrive off of honest work. Taking every opportuity to be as clear
            and concise with each task granted to our team. Through this
            methodology we leave each day with a smile on our face for the
            effort we adhere to.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
