"use client"
import React from "react";
import Image from "next/image";
import FAQS from "./faq";
import ImageSection from "./Imagesection";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";

const Gettoknows = () => {
  return (
    <main>
      <section className=" bg-gray-400  py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-16">
        <div className="container mx-auto text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            We Transform Companies <br /> Through Design Innovation
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white">
            A full-service creative agency designing and building inventive
            digital experiences across all platforms and brand touchpoints.
          </p>
        </div>
      </section>
      
    
      <div className="bg-gray-400  py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-16 text-center ,,md:text-left">
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-xl font-bold text-white leading-tight mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          Our cross-disciplinary team integrates branding, UX design, and
          technology to achieve swift and impactful results through direct
          leadership from the co-founders and close collaboration with our
          clients.
        </h1>
      </div>
    </main>
  );
};

export default Gettoknows;
