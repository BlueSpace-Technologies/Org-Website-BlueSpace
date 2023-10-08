"use client";

import React from "react";
import VideoHeri from "./VideoHeri";
import HeroAbout from "./HeroAbout";
import ImageSection from "./Imagesection";
import WorkShowcase from "./Workshowcase";
import FAQS from "./faq";

const HeroSection = () => {
  return (
    <main className="bg-black">
      <section className=" flex flex-col items-start p-5 sm:p-10 bg-black">
        <h1 className=" space-x-1 font-unisans font-bold text-white text-3xl sm:text-4xl  lg:text-7xl mt-0 text-start">
          BlueSpace is a Tech branding 
          and UX UI design agency
        </h1>
      </section>
      <VideoHeri />

      <HeroAbout />

      <div className="flex justify-center text-3xl sm:text-4xl md:text-5xl lg:text-3xl items-center transform hover:scale-105 transition-transform px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="">
          <h3 className="text-white underline text-center sm:text-left font-bold">
            View all Clients
          </h3>
        </div>
      </div>

      <WorkShowcase />
    </main>
  );
};

export default HeroSection;
