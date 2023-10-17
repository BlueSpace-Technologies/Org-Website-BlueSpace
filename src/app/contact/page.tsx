import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedinIn,
} from 'react-icons/fa';
import Image from "next/image";


const Contact = () => {
  const iconColor = "black";
  return (
    <div className="bg-gray-100 py-16 md:h-[1000px] ">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6 text-black pl-10">Let's Talk</h1>
        <h6 className="text-2xl font-medium mb-6 pl-10 text-black"
        >
        We'd love to learn more about you<br></br>
        what we can design and bulid together</h6>
         

    <div className="mt-10">
      <div className="lg:flex lg:justify-start pl-6">
        <div className="p-6">
          <h2 className="text-xl font-light text-black">Become a Client</h2>
          <h1 className="text-2xl underline underline-offset-8 text-black">Hey@Bluespace.global</h1>
        </div>
        <div className="p-6 mt-6 lg:mt-0">
          <h2 className="text-2xl font-light text-black">Work at Bluespace</h2>
          <h1 className="text-2xl underline underline-offset-8 text-black">Jobs@Bluespace.global</h1>
        </div>

      </div>
    </div>

    <div className='flex justify-between md:w-[25%] my-6 pl-10 '>
            <FaFacebookSquare style={{ color: iconColor }} size={30} />
            <FaLinkedinIn style={{ color: iconColor }} size={30} />
            <FaInstagram  style={{ color: iconColor }}size={30} />
            <FaTwitterSquare style={{ color: iconColor }} size={30} />
            <FaGithubSquare  style={{ color: iconColor }}size={30} />
        </div>


    <div className="container mx-auto flex mt-10 ">
      <div className="w-full md:w-1/2 p-3 text-black ml-6 underline underline-offset-8 ">
        <h2 className="text-2xl font-light text-black">
          300 Broadway, San Francisco, CA 941113
        </h2>
        <div className="mt-4 flex space-x-4">
        <h2 className="mr-4">Privacy</h2>
        <h2 className="mr-4">Terms</h2>
        <h2 className="mr-4">Sitemap</h2>
       </div>

      </div>

        <div className="hidden md:block md:w-1/2 p-4 mt-[-28rem]">  
        <img className="mx-auto rounded-lg shadow-lg max-w-full h-auto text-black"
        src = '/contact1.jpg'
        alt="Image"/>  
      </div>
    </div>
    </div>
    </div>
  );
};

export default Contact;
