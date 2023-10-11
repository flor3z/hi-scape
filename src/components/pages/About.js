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
      <div className="flex flex-col items-center md:mx-auto md:flex md:flex-row md:justify-evenly md:flex-wrap text-center pt-20">
        <div className="flex flex-col items-center md:w-96">
          <img
            className="h-full w-full rounded-full shadow-2xl"
            alt="portrait"
            src={daniel}
          />
          <h4 className="my-4 font-sans text-gray-500">
            Owner & Founder | Daniel Gough
          </h4>
        </div>
        <div className="flex flex-col items-start md:w-96 ">
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
    </>
  );
}

export default About;
