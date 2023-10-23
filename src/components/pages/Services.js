import React from 'react';
import sodding from '../../assets/front.jpg';
import yard from '../../assets/yard.jpg';
import turf from '../../assets/photo-1628340981113-fe1949fe5cc0.avif';
import hedges from '../../assets/hedges.avif';
import tree from '../../assets/photo-1547650221-c675287aec3b.avif';

function Services() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center h-96 w-full bg-cover bg-no-repeat bg-center bg-blend-overlay bg-gray-700 bg-lawnmower">
        <h1 className="tracking-wider font-serif text-6xl md:text-8xl text-white">
          Our Services
        </h1>
      </div>
      <div>
        <div className="flex flex-col items-center text-center py-10 px-3 text-lg md:text-xl">
          <h1 className="py-5 font-serif text-2xl md:text-4xl">
            What working with HISCAPE means for you!
          </h1>
          <div className="border-solid bg-slate-500 w-48 h-[2px] mt-2 my-4"></div>
          <p className="py-5">
            Our number one priority is your gratification, and because we stay
            true to our values with each project, we keep customer satisfaction
            standards high.
          </p>
          <p className="py-5">
            Be assured that if any concern with a project build arises, we will
            act promptly to undue or correct any obstacle.
          </p>
        </div>
        <div className="container my-8 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 object-contain group">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-80 overflow-hidden">
                  <img
                    alt="Placeholder"
                    className="block object-cover object-top h-80 w-full"
                    src={sodding}
                  />
                  <div className="absolute h-80 w-full bg-black/30 flex items-center justify-center bottom-0 lg:-bottom-10 lg:group-hover:bottom-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
                    <h2 className="font-serif tracking-wider text-3xl text-white">
                      Sodding
                    </h2>
                  </div>
                </div>

                <header className="flex items-center text-left leading-tight p-2 md:p-4">
                  <h1 className="text-2xl font-bold font-mono text-black text-center underline decoration-2 decoration-green-600 underline-offset-8">
                    Sodding
                  </h1>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <p className="bg-gray-100 p-2 rounded-sm shadow-md leading-5">
                    Establishing a fresh bundle of mature grass over a lawn area
                    that requires upkeep. Sodding is a very quick and reliable
                    form of revitilizing your yard space.
                  </p>
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 group">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-80 overflow-hidden">
                  <img
                    alt="Placeholder"
                    className="block object-cover object-center h-80 w-full"
                    src={yard}
                  />
                  <div className="absolute h-80 w-full bg-black/30 flex items-center justify-center bottom-0 lg:-bottom-10 lg:group-hover:bottom-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
                    <h2 className="font-serif tracking-wider text-3xl text-white text-center">
                      Property Maintenance
                    </h2>
                  </div>
                </div>

                <header className="flex items-center text-left leading-tight p-2 md:p-4">
                  <h1 className="text-2xl font-bold font-mono text-black  underline decoration-2 decoration-green-600 underline-offset-8">
                    Maintenance
                  </h1>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <p className="bg-gray-100 p-2 rounded-sm shadow-md leading-5">
                    General property care, from cutting lawn over-growth to yard
                    clean-up and waste removal. We provide check-in's and keep
                    up with regular maintenance.
                  </p>
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 group">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-80 overflow-hidden">
                  <img
                    alt="Placeholder"
                    className="block object-cover object-top h-80 w-full"
                    src={turf}
                  />
                  <div className="absolute h-80 w-full bg-black/30 flex items-center justify-center bottom-0 lg:-bottom-10 lg:group-hover:bottom-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
                    <h2 className="font-serif tracking-wider text-3xl text-white">
                      Interlocking Turf
                    </h2>
                  </div>
                </div>

                <header className="flex items-center text-left leading-tight p-2 md:p-4">
                  <h1 className="text-2xl font-bold font-mono text-black  underline decoration-2 decoration-green-600 underline-offset-8">
                    Turf
                  </h1>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <p className="bg-gray-100 p-2 rounded-sm shadow-md leading-5">
                    Tired of having to constantly cut the lawn? At HISCAPE we
                    provide artificial grass, known as turf, to aid with this
                    demanding task.
                  </p>
                </footer>
              </article>
            </div>

            {/* <div className="flex justify-center mx-auto"> */}
            <div className="my-1 px-1 mx-auto lg:-mr-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 group">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-80 overflow-hidden">
                  <img
                    alt="Placeholder"
                    className="block object-cover object-top h-80 w-full"
                    src={hedges}
                  />
                  <div className="absolute h-80 w-full bg-black/30 flex items-center justify-center bottom-0 lg:-bottom-10 lg:group-hover:bottom-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
                    <h2 className="font-serif tracking-wider text-3xl text-white">
                      Hedge Trimming
                    </h2>
                  </div>
                </div>

                <header className="flex items-center text-left leading-tight p-2 md:p-4">
                  <h1 className="text-2xl font-bold font-mono text-black  underline decoration-2 decoration-green-600 underline-offset-8">
                    Hedges
                  </h1>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <p className="bg-gray-100 p-2 rounded-sm shadow-md leading-5">
                    Simliarly to recieving regular hair-cuts, hedges require a
                    trim from time-to-time. Give us a call and we can help shape
                    up your shrubs.
                  </p>
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 mx-auto lg:-ml-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 group">
              <article className="overflow-hidden rounded-lg shadow-lg ">
                <div className="relative h-80 overflow-hidden">
                  <img
                    alt="Placeholder"
                    className="block object-cover object-center h-80 w-full"
                    src={tree}
                  />
                  <div className="absolute h-80 w-full bg-black/30 flex items-center justify-center bottom-0 lg:-bottom-10 lg:group-hover:bottom-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
                    <h2 className="font-serif tracking-wider text-3xl text-white">
                      Tree Cutting
                    </h2>
                  </div>
                </div>

                <header className="flex items-center text-left leading-tight p-2 md:p-4">
                  <h1 className="text-2xl font-bold font-mono text-black  underline decoration-2 decoration-green-600 underline-offset-8">
                    Trees
                  </h1>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <p className="bg-gray-100 p-2 rounded-sm shadow-md leading-5">
                    If a tree's life-span on your property has run its course,
                    we can take it down carefully and extract the root from your
                    yard. Leaving you with more open space.
                  </p>
                </footer>
              </article>
            </div>
            {/* </div> */}

            {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
                    >
                      Article Title
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">11/1/19</p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                  >
                    <img
                      alt="Placeholder"
                      className="block rounded-full"
                      src="https://picsum.photos/32/32/?random"
                    />
                    <p className="ml-2 text-sm">Author Name</p>
                  </a>
                  <a
                    className="no-underline text-grey-darker hover:text-red-dark"
                    href="#"
                  >
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>
              </article>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
