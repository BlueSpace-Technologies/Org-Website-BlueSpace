import React from 'react';
import Image from 'next/image'


const Award = () => {
  return (
    <div className="bg-[#17191F]  text-white">
      <div className="container mx-auto py-8">
        <h1 className="lg:text-6xl md:ml-[12px] p-[70px] font-semibold  text-5xl">Awards</h1>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 space-x-[10px]  lg:ml-[200px] md:ml-0]">
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 1"
            width={200} height={300}
            className="w-full h-auto cursor-pointer hover:opacity-80"
            layout='responsive'
          />
        </div>
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 2"
            width={200} height={300}
            className="w-full h-auto cursor-pointer hover:opacity-80"
            layout='responsive'
          />
        </div>
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 3"
            width={200} height={300}
            className="w-full h-auto cursor-pointer hover:opacity-80"
            layout='responsive'
          />
        </div>
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 4"
            width={200} height={300}
            className="w-full h-auto cursor-pointer hover:opacity-80"
            layout='responsive'
          />
        
        </div>
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 5"
            width={200} height={300}
            className="w-full h-auto cursor-pointer hover:opacity-80"
            layout='responsive'
          />
         
        </div>
      </div>
      </div>
    </div>
  );
};

export default Award;
