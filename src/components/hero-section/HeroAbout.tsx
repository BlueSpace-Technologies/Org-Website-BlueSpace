import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

// Define your DisclosureItem component with TypeScript
interface DisclosureItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleDisclosure: () => void;
}

const DisclosureItem: React.FC<DisclosureItemProps> = ({
  title,
  content,
  isOpen,
  toggleDisclosure,
}) => {
  return (
    <div className="overflow-hidden">
      <Disclosure.Button
        onClick={toggleDisclosure}
        className="flex items-center justify-between w-full px-0 py-4 text-3xl font-medium text-white bg-black rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75 transition duration-300 ease-in-out"
      >
        <span className="text-left">{title}</span>
        <ChevronUpIcon
          className={`${
            isOpen ? "transform rotate-180" : ""
          } h-4 w-4 text-white transition-transform duration-300 ease-in-out`}
        />
      </Disclosure.Button>
      <Disclosure.Panel
        className={`${
          isOpen ? "block" : "hidden"
        } bg-black px-4 pt-3 pb-4 text-base text-white border-t border-white rounded-b-lg transition-opacity duration-300 ease-in-out`}
      >
        {content}
      </Disclosure.Panel>
    </div>
  );
};

const HeroAbout: React.FC = () => {
  const disclosures = [
    {
      title: "Branding",
      content:
        "A brand is more than just a logo and color palette. We'll craft a distinct visual and verbal identity, create necessary assets, and establish clear brand guidelines to maintain consistency across all touchpoints.",
    },
    {
      title: "Digital Products",
      content:
        "Clay concentrates on designing authentic connections through the use of both aesthetics and behavioral science. Our team of senior UI/UX designers delivers engaging digital products that help brands thrive in the modern economy.",
    },
    {
      title: "Websites",
      content:
        "A modern brand is defined by its digital presence, starting with the website. We focus on creating websites that effectively convey the brand's identity and perspective for an enhanced user experience.",
    },
    {
      title: "Digital Products",
      content:
        "Our web developers are committed to achieving both visual and performance excellence. From the backend to the frontend, we prioritize delivering a seamless and enjoyable user experience on all devices.",
    },
    {
      title: "Digital Products",
      content:
        "Content is a crucial aspect of the user experience, and we offer a range of services to support this, including copywriting, illustration, 2D and 3D graphics, iconography, animation, video production, and photography.",
    },
  ];

  const [openDisclosure, setOpenDisclosure] = useState(
    new Array(disclosures.length).fill(false)
  );

  const toggleDisclosure = (index: number) => {
    const updatedOpenDisclosure = [...openDisclosure];
    updatedOpenDisclosure[index] = !updatedOpenDisclosure[index];
    setOpenDisclosure(updatedOpenDisclosure);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row mt-36 m-10"
    >
      <div className="md:w-1/2 md:px-12 lg:px-24 xl:px-32 text-white ">
        <h1 className="text-4xl font-semibold font-unisans mb-4 sm:text-1xl">
          Based in Mumbai, we strengthen brands through exceptional digital
          experiences for companies worldwide.
        </h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-300 text-lg"
        >
          We are a team of strategists, designers, and developers creating
          memorable digital brand experiences that grow businesses.
        </motion.p>
      </div>

      <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
        <div className="mx-auto w-full max-w-lg rounded-xl bg-black">
          {disclosures.map((item, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <DisclosureItem
                  title={item.title}
                  content={item.content}
                  isOpen={open && openDisclosure[index]}
                  toggleDisclosure={() => toggleDisclosure(index)}
                />
              </motion.div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default HeroAbout;
