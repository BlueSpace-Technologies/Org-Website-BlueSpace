"use client";
import React from "react";
import Image from "next/image";
import FAQS from "./faq";
import ImageSection from "./Imagesection";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";

const Gettoknows = () => {
  return (
    <section className="bg-gray-200 py-4 lg:p-28">
      <div className=" mt-24">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl ml-5 lg:text-7xl">
          We transform companies{" "}
          <span className="lg:inline hidden">
            <br />
          </span>
          through design innovation
        </h1>
        <h1 className="mt-10 backdrop:font-bold text-xl sm:text-xl ml-5 md:text-xl lg:text-3xl">
          A full-service creative agency designing and building inventive
          <span className="lg:inline hidden">
            <br />
          </span>
          digital experiences across all platforms and brand touchpoints.
        </h1>
      </div>
    </section>
  );
};

export default Gettoknows;
