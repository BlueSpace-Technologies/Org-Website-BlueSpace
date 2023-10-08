import Avatar from "@/components/ui/avatar";

import Navbar from "@/components/NavBar/Navbar";
import HeroSection from "@/components/hero-section/HeroSection";
import Gettoknow from "@/components/hero-section/Gettoknow";
import FAQS from "@/components/hero-section/faq";



export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="padding-x padding-y bg-black">
        <HeroSection />
      </div>
      <Gettoknow/>
      <FAQS/>

    
    </main>
  );
}
