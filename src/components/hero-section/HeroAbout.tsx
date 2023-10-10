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
  className="flex items-center justify-start w-full  py-3 text-xl font-unisans text-white bg-black rounded-lg  focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75 transition duration-300 ease-in-out"
>
  <span className="text-start font-bold sm:text-1xl lg:text-2xl">{title}</span>
  <ChevronUpIcon
    className={`${
      isOpen ? "transform rotate-180" : ""
    } lg:h-10 w-10 ml-4  sm:h-auto  text-white transition-transform duration-300 ease-in-out`}
  />
</Disclosure.Button>
<Disclosure.Panel
  className={`${
    isOpen ? "block" : "hidden"
  } bg-black text-xl text-white  rounded-b-lg transition-opacity duration-300 ease-in-out`}
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
      title: "Development",
      content:
        "Our web developers are committed to achieving both visual and performance excellence. From the backend to the frontend, we prioritize delivering a seamless and enjoyable user experience on all devices.",
    },
    {
      title: "Content",
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
      className="flex flex-col md:flex-row mt-32"
    >
      <div className="md:w-1/2 md:px-12 lg:px-24 xl:px-32 text-white ">
        <h1 className="text-2xl py-5 p-5 font-semibold font-unisans mb-4 sm:text-1xl lg:text-3xl">
          Based in Mumbai, we strengthen brands through exceptional digital
          experiences for companies worldwide.
        </h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-300 text-lg p-4"
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
