import React from "react";
import Image from "next/image";
import ImageSlider from "./imagesscroll";
import FAQS from "./faq";

const Gettoknows = () => {
  return (
    <main>
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-16">
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
    <ImageSlider/>
    <div className="p-4 md:p-6 lg:p-8 xl:p-10">
  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-start text-gray-800 dark:text-white font-semibold leading-tight">
    Our cross-disciplinary team integrates branding, UX design, and technology to achieve swift and impactful results through direct leadership from the co-founders and close collaboration with our clients.
  </h1>
</div>


    </main>
  );
};

export default Gettoknows;
