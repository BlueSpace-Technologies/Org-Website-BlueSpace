import React from "react";
import Image from "next/image";

interface Section {
  title: string;
  text: string;
  list: string[];
  image: string;
}

const sections: Section[] = [
  {
    title: "Branding",
    text: `
      At the core of our approach, we maintain that brand and UX are closely connected and work together. 
      Our team specializes in creating and representing digital brand identities across channels, providing strategy assistance and guidelines to ensure consistency.`,
    list: [
      "Brand Strategy",
      "Brand Architecture",
      "Verbal Identity",
      "Visual Identity",
      "Brand Guidelines",
      "Brand Experiences",
    ],
    image: "/brand.jpg",
  },
  {
    title: "Digital Products",
    text: `
      At Bluespace, we believe everyone deserves an exceptional user experience, whether using a product at work or in their free time. 
      We create memorable enterprise and consumer products as well as provide comprehensive design systems for effortless product iteration.`,
    list: [
      "Consumer & Enterprise Software",
      "User Research & Testing",
      "CX, UX & Interaction Design",
      "UI Design",
      "Motion Design",
      "Design Systems",
    ],
    image: "/logo.png",
  },
];
const Section: React.FC<Section> = ({ title, text, list, image }) => (
  <div className="grid  grid-cols-1 py-14 md:grid-cols-2 gap-8 p-4">
    <div className="flex flex-col justify-center">
      <h2 className="font-unisans text-4xl sm:text-5xl md:text-6xl text-white text-center mb-4">
        {title}
      </h2>
      <p className="text-lg text-white font-unisans mb-8 text-center">{text}</p>
      <ul className="space-y-2 text-white font-unisans">
        {list.map((item, index) => (
          <li key={index} className="border-b border-gray-200 py-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div>
      <Image
        
        width={1280}
        height={461}
       src={image} alt={title} className="w-full h-auto" />
    </div>
  </div>
);
const Brand: React.FC = () => (
  <div className=" w-full p-10 sm:p-28 ">
    {sections.map((section, index) => (
      <Section key={index} {...section} />
    ))}
  </div>
);

export default Brand;
