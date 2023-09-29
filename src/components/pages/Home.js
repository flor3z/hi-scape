import React from 'react';
import logo from '../../assets/logo.png';
// continue with relative path for bg iamge

function Home() {
  return (
    <>
      <div className="flex items-center  bg-cover bg-no-repeat h-screen w-full bg-low-grass ">
        <img
          className="flex-col a top-1/3 mx-auto  bg-cover h-24 sm:h-36 md:h-60 drop-shadow-2xl animate-fade-up"
          src={logo}
          alt="logo"
        />
      </div>
      <br />
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <br />
    </>
  );
}
export default Home;
