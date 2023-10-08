import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

type DisclosureItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  toggleDisclosure: () => void;
};

const DisclosureItem: React.FC<DisclosureItemProps> = ({
  title,
  content,
  isOpen,
  toggleDisclosure,
}) => {
  return (
    <div className="mb-4">
      <Disclosure.Button
        onClick={toggleDisclosure}
        className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-white bg-black rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75 transition duration-300 ease-in-out"
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
        } bg-black px-4 pt-3 pb-4 text-sm text-white border-t border-white rounded-b-lg transition-opacity duration-300 ease-in-out`}
      >
        {content}
      </Disclosure.Panel>
    </div>
  );
};

const HeroAbout: React.FC = () => {
  const disclosures = [
    {
      title: "What is your refund policy?",
      content:
        "A brand is more than just a logo and color palette. We'll craft a distinct visual and verbal identity, create necessary assets, and establish clear brand guidelines to maintain consistency across all touchpoints.",
    },
    {
      title: "What is your return policy?",
      content:
        "We have a 30-day return policy for most items. To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging.",
    },
    // Add more disclosure items here
  ];

  const [openDisclosure, setOpenDisclosure] = useState<boolean[]>(
    new Array(disclosures.length).fill(false)
  );

  const toggleDisclosure = (index: number) => {
    const updatedOpenDisclosure = [...openDisclosure];
    updatedOpenDisclosure[index] = !updatedOpenDisclosure[index];
    setOpenDisclosure(updatedOpenDisclosure);
  };

  return (
    <main className="bg-black py-8 md:py-16 lg:py-24 xl:py-32 flex flex-col md:flex-row justify-center items-center relative">
      <div className="md:w-1/2 md:px-12 lg:px-24 xl:px-32 text-white">
        <h1 className="text-2xl text-ellipsis md:text-4xl lg:text-3xl xl:text-4xl font-semibold font-unisans mb-4">
          Based in Mumbai, we strengthen brands through exceptional digital
          experiences for companies worldwide.
        </h1>
        <p className="text-gray-300 text-base md:text-lg">
          We are a team of strategists, designers, and developers creating
          memorable digital brand experiences that grow businesses.
        </p>
      </div>
 =
      <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
        <div className="mx-auto w-full max-w-md rounded-xl p-4 bg-black">
          {disclosures.map((item, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div>
                  <DisclosureItem
                    title={item.title}
                    content={item.content}
                    isOpen={open && openDisclosure[index]}
                    toggleDisclosure={() => toggleDisclosure(index)}
                  />
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
      
      
      
      
    </main>
  );
};

export default HeroAbout;
