"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  hideName?: boolean;
}

const Logo = ({ hideName }: LogoProps) => {
  return (
    <Link href="/" passHref>
     
        <Image
          src="/logo.png"
          width={1280}
          height={461}
          alt="logo"
          className="h-25 w-56"
          
        
        />
    </Link>
  );
};

export { Logo };
