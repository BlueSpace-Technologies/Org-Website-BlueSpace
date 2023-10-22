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
          width={500}
          height={85}
          alt="logo"
          className="h-12 w-56"
          
        
        />
    </Link>
  );
};

export { Logo };
