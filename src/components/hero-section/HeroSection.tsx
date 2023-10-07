"use client";

import React from "react";
import VideoHeri from "./VideoHeri";
import HeroAbout from "./HeroAbout";
import ImageSection from "./Imagesection";
import WorkShowcase from "./Workshowcase";

const HeroSection = () => {
  return (
    <main>
    <section className="flex flex-auto flex-col items-start p-10 mt-10">
      <h1 className="font-bold text-white text-[52px] sm:text-[50px] text-start md:text-start lg:text-start">
        BlueSpace is a Tech branding
        <br />
        and UX UI design agency
      </h1>
    </section>
    <VideoHeri/>
    <HeroAbout/>
    <ImageSection/>
    <ImageSection/>
    <div className="flex justify-center text-[35px] items-center transform hover:scale-105 transition-transform sm:px-4 md:px-8 lg:px-12 xl:px-16">
  <div className="">
    <h3 className="text-white underline text-center sm:text-left">
      View all Clients
    </h3>
  </div>
</div>
<WorkShowcase/>




    </main>

  );
};

export default HeroSection;
