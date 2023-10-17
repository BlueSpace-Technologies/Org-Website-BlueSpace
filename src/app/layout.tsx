import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Footer from "@/components/footer/footer";
import { Header } from "@/components/NavBar";


const inter = Inter({ subsets: ["cyrillic-ext"] });
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
      <div className="min-h-screen">
      <div className={`flex flex-col min-h-screen ${inter.className}`}>
        <Header />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
      </body>

    </html>
  );
}
