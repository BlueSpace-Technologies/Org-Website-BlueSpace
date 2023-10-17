import Hero from "@/components/hero-section/hero-service"
import BRAND from "@/components/brand/brand"
import INDUSTRY from "@/components/industry/industry"
export default function Home() {
  return (
    <div className="bg-[#0c0c0c]">
      <Hero />
      <main>
        <BRAND />
        <INDUSTRY />
      </main>
    </div>
  )
  
}
    