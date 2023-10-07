import React from "react";

const ImageSection = () => {
  const images = [
    // Add your image URLs here
    "https://cdn.sanity.io/images/r115idoc/production/2b69caa1516c56a3989846a5c483f59eaa8f15cf-290x192.svg?q=75&fit=clip&auto=format",
    "https://cdn.sanity.io/images/r115idoc/production/2b69caa1516c56a3989846a5c483f59eaa8f15cf-290x192.svg?q=75&fit=clip&auto=format",
    "https://cdn.sanity.io/images/r115idoc/production/2b69caa1516c56a3989846a5c483f59eaa8f15cf-290x192.svg?q=75&fit=clip&auto=format",
    "https://cdn.sanity.io/images/r115idoc/production/2b69caa1516c56a3989846a5c483f59eaa8f15cf-290x192.svg?q=75&fit=clip&auto=format",
    "https://cdn.sanity.io/images/r115idoc/production/2b69caa1516c56a3989846a5c483f59eaa8f15cf-290x192.svg?q=75&fit=clip&auto=format",
  ];

  // Define the number of images per row for different screen sizes
  const columns = {
    xs: 1, // Extra small screens (phones)
    sm: 2, // Small screens (tablets)
    md: 3, // Medium screens (small laptops)
    lg: 4, // Large screens (large laptops)
    xl: 5, // Extra-large screens (desktops)
  };

  return (
    <section className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full sm:w-1/${columns.sm} md:w-1/${columns.md} lg:w-1/${columns.lg} xl:w-1/${columns.xl} px-2 mb-4`}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSection;
