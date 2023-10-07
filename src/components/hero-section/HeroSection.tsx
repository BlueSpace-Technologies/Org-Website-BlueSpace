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
      <div className="flex flex-col lg:flex-row p-4 sm:p-10 md:p-20 lg:p-40">
        <div className="flex-grow lg:flex-grow-0 ml-4 lg:ml-0 mb-4 lg:mb-0">
          <h1 className="font-bold text-white text-2xl sm:text-3xl text-center sm:text-left md:text-left lg:text-left">
            Based in Mumbai, we strengthen <br />
            brands through exceptional digital <br /> experiences for companies
            worldwide.
          </h1>
        </div>
        
        

        <div className="flex-grow  lg:flex-grow-0 ml-65 lg:ml-65 lg: mb-4 lg:mb-0 lg:mt-0 sm:mt-0">
          <h1 className="font-bold text-white text-2xl sm:text-3xl text-center sm:text-left md:text-left lg:text-left">
            We are a team of designers, <br />
            developers, and strategists <br />
            who are passionate about <br />
            creating exceptional digital <br />
            experiences that unite people <br />
            and brands.
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between p-4 sm:p-10 md:p-20 lg:p-40"></div>
    </div>
  );
};

export default HeroSection;
