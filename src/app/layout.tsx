import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Navbar from "@/components/NavBar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlueSpace Tech",
  description: "BlueSpace is a branding and tech Services agency",
  other: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
