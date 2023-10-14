"use client"
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
    <div className="overflow-hidden py-2 sm:py-7 underline border-collapse">
      <Disclosure.Button
  onClick={toggleDisclosure}
  className="flex items-center justify-between w-full  py-3 text-xl font-unisans text-white bg-black rounded-lg  focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75 transition duration-300 ease-in-out"
>
  <span className="text-start font-bold sm:text-1xl lg:text-4xl justify-between">{title}</span>
  <ChevronUpIcon
    className={`${
      isOpen ? "transform rotate-180 " : ""
    } lg:h-10 w-10  item-left sm:h-auto  text-white transition-transform duration-300 ease-in-out`}
  />
</Disclosure.Button>
<Disclosure.Panel
  className={`${
    isOpen ? "block " : "hidden"
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
          "question": "What are your core services as a UX design and branding firm?",
          "answer": "At Clay, user experience is not just a capability but the cornerstone of our approach. We first began as a UX design agency in San Francisco, focusing on mobile apps and enterprise/SaaS software.However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design and development of marketing websites.Today, our projects encompass a wide range, from building new products and defining brands to revitalizing existing mobile apps, websites, and enterprise software. We specialize in crafting digital products that wholeheartedly embody the brand's personality and deliver delightful experiences to your customers.."
        },
        {
          "question": "Why do we use it?",
          "answer": "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
          "question": "Where does it come from?",
          "answer": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature."
        },
        {
          "question": "Is it safe to use?",
          "answer": "Yes, Lorem Ipsum is safe to use in design and typesetting."
        },
        {
          "question": "How can I use Lorem Ipsum?",
          "answer": "You can use Lorem Ipsum as placeholder text in your designs and layouts."
        }
   
    
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
    
    <div className="bg-black py-5 lg:p-28">
      
    <div className="bg-black h-full w-full p-4 lg:p-8 py-2">
    <h1 className="text-2xl font-unisans font-bold text-white lg:text-6xl">
        FAQ
      </h1>
      {disclosures.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <DisclosureItem
                title={item.question}
                content={item.answer}
                isOpen={open && openDisclosure[index]}
                toggleDisclosure={() => toggleDisclosure(index)}
              />
            </motion.div>
          )}
        </Disclosure>
      ))}
    </div>
  </div>
  
   
  );
};

export default HeroAbout;
