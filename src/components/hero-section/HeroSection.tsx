"use client";

import React from "react";
import VideoHeri from "./Video";
import HeroAbout from "./HeroAbout";
import ImageSection from "./Imagesection";
import WorkShowcase from "./WorkshowcasePARTONE";
import FAQS from "../FAQ/faq";
import ImageRepeat from "./Imagesection";
import WorkShowcases from "./Sencodeworkshowcase";
import DesignsG from "../imagegallery/gallerydesign";

const HeroSection = () => {
  return (
    <main className="bg-black lg:p-[40px]">
      <section className="flex py-10 items-start bg-black">
        <h1 className="font-unisans font-bold text-white text-3xl ml-4 lg:text-6xl mt-0 text-start sm:text-5xl">
          BlueSpace is a Tech branding{" "}
          <span className="hidden lg:inline">
            <br />
          </span>
          and UX design, Website , App dev agency
        </h1>
      </section>

      <VideoHeri />

      <HeroAbout />

      <ImageRepeat count={4} />

      <DesignsG />

      <WorkShowcase />
      <WorkShowcases />
    </main>
  );
};

export default HeroSection;
