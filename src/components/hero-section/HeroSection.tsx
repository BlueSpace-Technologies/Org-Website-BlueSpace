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
      <section className=" flex flex-col items-start p-5 sm:p-10 mt-10 bg-black">
        <h1 className=" font-unisans font-bold text-white text-3xl sm:text-4xl lg:text-7xl text-start">
          BlueSpace is a Tech branding and UX UI design agency
        </h1>
      </section>

      <VideoHeri />
      <HeroAbout />

      <div className="flex justify-center text-[35px] items-center transform hover:scale-105 transition-transform sm:px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="">
          <h3 className="text-white underline text-center sm:text-left">
            View all Clients
          </h3>
        </div>
      </div>
      <WorkShowcase />
      <FAQS/>
    </main>
  );
};

export default HeroSection;
