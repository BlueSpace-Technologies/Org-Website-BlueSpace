"use client";

import { motion } from "framer-motion";
import { NavigationItems } from "../navitems";

const navItems = [
  {
    href: "/work",
    title: "All",
  },
  {
    href: "/work/web",
    title: "Websites",
  },
  {
    href: "/work/products",
    title: "Products",
  },
  {
    href: "/work/brand",
    title: "Brands",
  },
];
export default function web() {
  const navigationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom },
    }),
  };
  return (
    <main className="bg-black">
      <section className="py-2 px-5">
        <div className="flex flex-col items-end justify-evenly  lg:flex-row lg:p-20 ">
          <h1 className=" p-2 py-6 font-unisans text-white text-4xl sm:text-7xl sm:items-start md:text-7xl md:p-5 lg:text-7xl xl:text-8xl xl:max-w-screen-lg">
            Websites that tell your brand{"’"}s story
          </h1>
          <ul className="justify-end ">
            {navItems.map(({ href, title }, i) => (
              <NavigationItems
                key={href}
                href={href}
                title={title}
                variants={navigationVariants}
                initial="hidden"
                animate="visible"
                customDelay={0.5 + (i + 1) * 0.1}
              />
            ))}
            <motion.li
              className="mt-12 flex justify-center"
              variants={navigationVariants}
              initial="hidden"
              animate="visible"
              custom={0.5 + (navItems.length + 1) * 0.1}
            ></motion.li>
          </ul>
        </div>
      </section>
    </main>
  );
}
