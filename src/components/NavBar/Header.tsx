"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileMenu } from "./mobile/MobileMenu";
import Headroom from "react-headroom";
import { useOnKeyDown } from "./hooks/useOnkeyDown";
import { BurgerIcon } from "./burgerIcon";
import { NavigationItem } from "./navitem";
import { Logo } from "./logo";
import { Container } from "./Container";

export const navItems = [
  {
    href: "/work",
    title: "Work",
  },
  {
    href: "/clients",
    title: "Clients",
  },
  {
    href: "/services",
    title: "Services",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useOnKeyDown("Escape", () => setIsOpen(false));

  const navigationVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom },
    }),
  };

  return (
    <Headroom style={{ zIndex: 50 }}>
      <header className="relative z-50 py-8  bg-black">
        <Container>
          <div className="flex justify-between items-center">
            <Logo />
            <div className="flex items-center">
              <nav className="hidden md:block">
                <ul className="flex gap-12 text-lg">
                  {navItems.map(({ href, title }, i) => (
                    <NavigationItem
                      href={href}
                      title={title}
                      key={href}
                      variants={navigationVariants}
                      initial="hidden"
                      animate="visible"
                      customDelay={(i + 1) * 0.1}
                    />
                  ))}
                </ul>
              </nav>
            </div>
            <button
              className="right-4 top-8 z-50 md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Menu"
            >
              <BurgerIcon isOpen={isOpen} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={isOpen} />
    </Headroom>
  );
};
