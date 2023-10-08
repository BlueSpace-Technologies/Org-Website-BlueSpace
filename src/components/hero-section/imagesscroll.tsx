"use client";

import React, { useState, useRef, MouseEvent } from "react";

const ImageSlider: React.FC = () => {
  const totalImages: number = 24; // Total number of images
  const [currentImage, setCurrentImage] = useState<number>(3); // Starting image index

  const imageSliderRef = useRef<HTMLDivElement | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (imageSliderRef.current) {
      const { clientX } = e.nativeEvent;
      const slider = imageSliderRef.current;
      const sliderWidth = slider.offsetWidth;
      const maxScrollLeft = slider.scrollWidth - sliderWidth;
      const scrollSpeedFactor = 0.4; // Adjust this value for the desired speed
      const scrollAmount =
        (clientX / sliderWidth) * maxScrollLeft * scrollSpeedFactor;

      slider.scrollLeft = scrollAmount;
      setScrollLeft(scrollAmount);
    }
  };

  const handlePrev = () => {
    if (currentImage > 3) {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleNext = () => {
    if (currentImage < totalImages) {
      setCurrentImage(currentImage + 1);
    }
  };

  // Define an array of image sizes
  const imageSizes: string[] = [
    "h-20 w-20", // Small
    "h-40 w-40", // Medium
    "h-60 w-60", // Large
    "h-30 w-30", // Small
    "h-50 w-50", // Medium
    "h-70 w-70", // Large
    // Add more size classNamees for other images as needed
  ];

  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      style={{
        overflowX: "auto", // Enable horizontal scrolling
        WebkitOverflowScrolling: "touch",
        whiteSpace: "nowrap", // Prevent content from wrapping to the next line
      }}
      onMouseMove={handleMouseMove}
      ref={imageSliderRef}
    >
      <div className="p-5 flex space-x-4">
        {Array.from({ length: totalImages }, (_, i) => i + 1).map(
          (imageIndex) => (
            <a key={imageIndex} href="#">
              <img
                className={`rounded-t-lg ${
                  imageSizes[imageIndex % imageSizes.length]
                }`}
                src="logo.png" // Replace with the correct path to your image
                alt={`Image ${imageIndex}`}
              />
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
