import Hero from "@/components/hero-section/hero-service"
import BRAND from "@/components/brand/brand"
import INDUSTRY from "@/components/industry/industry"
import Footer from "@/components/footer/footer"
export default function Home() {
  return (
    <div className="bg-[#0c0c0c] overflow-hidden">
      <Hero />
      <main>
        <BRAND />
        <INDUSTRY />
      </main>
    </div>
  )
  
}
    