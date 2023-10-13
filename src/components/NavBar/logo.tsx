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
      <motion.div
        className="group relative flex items-center gap-4 whitespace-nowrap text-2xl font-bold transition duration-300 hover:transition"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
      >
        <Image
          src="/logo.png"
          width={500}
          height={85}
          alt="logo"
          className="h-12 w-56"
          
        
        />
      </motion.div>
    </Link>
  );
};

export { Logo };
