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
  const isActive = pathname === href; // Check if the current path exactly matches the href.

  return (
  
      <Link href={href}
        
          className={classNames(
            isActive
              ? "font-bold text-white "
              : "font-medium text-gray-400",
            "relative block text-3xl transition md:text-lg"
          )}
        >
          {title}
    
      </Link>

  );
};

export { NavigationItem };
