"use client";

import React from "react";
import VideoHeri from "./VideoHeri";
import HeroAbout from "./HeroAbout";
import ImageSection from "./Imagesection";
import WorkShowcase from "./Workshowcase";
import FAQS from "../FAQ/faq";
import ImageRepeat from "./Imagesection";

const HeroSection = () => {
  return (
    <main className="bg-black lg:p-[40px]">
      <section className="flex py-10 items-start bg-black">
        <h1 className="font-unisans font-bold text-white text-3xl ml-4 lg:text-6xl mt-0 text-start sm:text-5xl">
          BlueSpace is a Tech branding{" "}
          <span className="hidden lg:inline">
            <br />
          </span>
          and UX UI design agency
        </h1>
      </section>

      <VideoHeri />

      <HeroAbout />

      <ImageRepeat count={8}/>

      <div className="flex justify-center mt-28 text-2xl sm:text-4xl md:text-5xl lg:text-3xl items-center transform hover:scale-105 transition-transform px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="">
          <h3 className="text-white underline text-xl text-center sm:text-left font-bold lg:text-2xl">
            View all Clients
          </h3>
        </div>
      </div>

      <WorkShowcase />
    </main>
  );
};

export default HeroSection;
