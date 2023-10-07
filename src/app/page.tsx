import Avatar from "@/components/ui/avatar";

import Navbar from "@/components/NavBar/Navbar";
import HeroSection from "@/components/hero-section/HeroSection";
import Gettoknow from "@/components/hero-section/Gettoknow";



export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="padding-x padding-y">
        <HeroSection />
      </div>
      <Gettoknow/>
    </main>
  );
}
