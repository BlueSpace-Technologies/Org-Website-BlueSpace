"use client";

import classNames from "classnames";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavigationItemProps {
  href: string;
  title: string;
  variants: Variants;
  initial: string;
  animate: string;
  customDelay?: number;
}

const NavigationItem = ({
  href,
  title,
  variants,
  initial,
  animate,
  customDelay,
}: NavigationItemProps) => {
  const pathname = usePathname();
  const isActive = pathname?.startsWith(href);

  return (
    <motion.li
      variants={variants}
      initial={initial}
      animate={animate}
      custom={customDelay}
    >
      <Link
        href={href}
        className={classNames(
          isActive
            ? "font-bold text-off-black custom-underline"
            : "font-medium text-white",
          "md:underlined relative block whitespace-nowrap text-3xl transition md:text-lg"
        )}
      >
        {title}
      </Link>
    </motion.li>
  );
};

export { NavigationItem };