"use client";

import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-auto flex-col items-start p-10 mt-10">
      <h1 className="font-bold text-white text-[52px] sm:text-[50px] text-start md:text-start lg:text-start">
        BlueSpace is a Tech branding
        <br />
        and UX UI design agency
      </h1>
      <div className="h-[100%] aspect-[16/9] w-full mt-12 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
            className="transform scale-80 hover:scale-100 transition-transform duration-500 ease-in-out"
            autoPlay
            loop
            muted
          >
            <source src="hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="mt-[20] p-56 justify-start ">
        <div className=" justify-start items-center">
          <h1 className="font font-semibold text-[30px]">
            Based in Mumbai, we strengthen <br />
            brands through exceptional digital <br /> experiences for companies
            worldwide.
          </h1>
        </div>
    
      </div>
    </div>
  );
};

export default HeroSection;
