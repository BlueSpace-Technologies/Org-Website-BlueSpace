import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import Layout from "@/components/layout/footersection";

const Contact = () => {
  const iconColor = "black";
  return (
    <div className="bg-black py-16 ">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6 text-white pl-10">
          Let{"'"}s Talk
        </h1>
        <h6 className="text-2xl font-medium mb-6 pl-10 text-white">
          We{"'"}d love to learn more about you<br></br>
          what we can design and bulid together
        </h6>
        <div className="mt-10">
          <div className="lg:flex lg:justify-start pl-6">
            <div className="p-6">
              <h2 className="text-xl font-light text-white">Become a Client</h2>
              <h1 className="text-2xl underline underline-offset-8 text-white">
                Hey@Bluespace.global
              </h1>
            </div>
            <div className="p-6 mt-6 lg:mt-0">
              <h2 className="text-2xl font-light text-white">
                Work at Bluespace
              </h2>
              <h1 className="text-2xl underline underline-offset-8 text-white">
                Jobs@Bluespace.global
              </h1>
            </div>
          </div>
        </div>

        <div className=" flex mt-10 ">
          <div className="w-full md:w-1/2 p-3 text-white ml-6 underline underline-offset-8 ">
            <h2 className="text-2xl font-light text-white">
              300 Broadway, San Francisco, CA 941113
            </h2>
           
          </div>
          <div className="hidden md:block md:w-1/2 p-4 mt-[-28rem]">
            <Image
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto text-white"
              src="/about.png"
              width={500}
              height={700}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
