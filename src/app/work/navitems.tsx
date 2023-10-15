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

const NavigationItems = ({
  href,
  title,
  variants,
  initial,
  animate,
  customDelay,
}: NavigationItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href; // Check if the current path exactly matches the href.

  return (
    <motion.li
      variants={variants}
      initial={initial}
      animate={animate}
      custom={customDelay}
    >
      <Link href={href}
        
          className={classNames(
            isActive
              ? "font-bold text-white"
              : "font-none text-gray-400",
            "md: relative block whitespace-nowrap text-xl transition md:text-lg"
          )}
        >
        
          {isActive && <span className="ml-2 text-white">●</span>}{"   "}
          {title}
    
      </Link>
    </motion.li>
  );
};

export { NavigationItems };
