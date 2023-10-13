import React from 'react';
import Image from 'next/image';
interface ImageRepeatProps {
  count: number;
}

const ImageRepeat: React.FC<ImageRepeatProps> = ({ count }) => {


  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
  );
};

export default ImageRepeat;
