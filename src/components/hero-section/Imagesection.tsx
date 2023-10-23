import React from 'react';
import Image from 'next/image';
interface ImageRepeatProps {
  count: number;
}

const ImageRepeat: React.FC<ImageRepeatProps> = ({ count }) => {


  return (
    <section>
    <div className="grid grid-cols-2 py-28 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="p-2">
          <Image
            src="https://pngimg.com/uploads/apple_logo/apple_logo_PNG19675.png"
            alt={`Image ${index + 1}`}
            width={290} // Set the width of your image
            height={192} // Set the height of your image
          />
        </div>
      ))}
      
    </div>
    <div className="flex justify-center items-center transform hover:scale-105 hover:text-gray-400 transition-transform mt-4 sm:mt-8 md:mt-12 lg:mt-6 px-4 sm:px-8 md:px-12 xl:px-16 cursor-pointer">
        <h3 className="text-2xl hover:text-gray-400 sm:text-4xl md:text-5xl  text-center sm:text-left font-bold lg:text-2xl text-white ">
          View All Clients
        </h3>
      </div>
    </section>
  );
};

export default ImageRepeat;
