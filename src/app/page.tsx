import Avatar from "@/components/ui/avatar";

import HeroSection from "@/components/hero-section/HeroSection";
import Gettoknow from "@/components/hero-section/CompanyInfo";
import FAQS from "@/components/FAQ/faq";
import HorizontalImageScroll from "@/components/hero-section/imagesscroll";
import DefaultCarousel from "@/components/hero-section/imagesscroll";

export default function Home() {
  return (
    <main className="overflow-hidden bg-black">
      <div className="bg-black">
        <HeroSection />
      </div>
      <Gettoknow />
      <DefaultCarousel />
      <section className="bg-gray-200 py-4 lg:p-28">
        <div className=" mt-18">
          <h1 className=" font-unisans fomt-bold mt-10 backdrop:font-bold text-xl sm:text-xl ml-5 md:text-xl lg:text-3xl">
            Our cross-disciplinary team integrates branding, UX
            <span className="lg:inline hidden">
              <br />
            </span>{" "}
            design, and technology to achieve swift and impactful
            <span className="lg:inline hidden">
              <br />
            </span>{" "}
            results through direct leadership from the co-founders
            <span className="lg:inline hidden">
              <br />
            </span>{" "}
            and close collaboration with our clients.
            <span className="lg:inline hidden">
              <br />
            </span>
          </h1>
        </div>
      </section>
      <FAQS />
    </main>
  );
}
