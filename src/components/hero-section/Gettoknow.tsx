"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Gettoknows = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current as HTMLDivElement | null;

    if (container) {
      let scrollInterval: string | number | NodeJS.Timer | undefined;
      let isScrolling = false;

      const startScroll = () => {
        scrollInterval = setInterval(() => {
          if (container.scrollLeft !== undefined) {
            container.scrollLeft += 1; // Adjust the scroll speed here
          }
        }, 30); // Adjust the scroll interval here
      };

      const stopScroll = () => {
        clearInterval(scrollInterval);
      };

      container.addEventListener &&
        container.addEventListener("mouseenter", () => {
          if (!isScrolling) {
            startScroll();
            isScrolling = true;
          }
        });

      container.addEventListener &&
        container.addEventListener("mouseleave", () => {
          stopScroll();
          isScrolling = false;
        });
    }
  }, []);

  return (
    <section className="bg-gray-200 py-24 p-24 flex flex-row">
      <div className="text-start md:text-left px-6 md:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 sm:mb-12 md:mb-16">
          We Transform Companies <br /> Through Design Innovation
        </h1>
        <p className="text-lg sm:text-xl text-white">
          A full-service creative agency designing and building inventive
          digital experiences across all platforms and brand touchpoints.
        </p>
      </div>
    </section>
  );
};

export default Gettoknows;
