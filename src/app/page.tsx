import Avatar from "@/components/ui/avatar";

import Navbar from "@/components/NavBar/Navbar";
import HeroSection from "@/components/hero-section/HeroSection";

export default function Home() {
  return (
    <main className="overflow-hidden bg-black">
      <div className="padding-x padding-y">
        <HeroSection />
      </div>
    </main>
  );
}
