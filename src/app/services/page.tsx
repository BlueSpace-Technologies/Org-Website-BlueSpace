import Hero from "@/components/hero-section/hero-service"
import BRAND from "@/components/brand/brand"
import INDUSTRY from "@/components/industry/industry"
export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
    
        <BRAND />
        <INDUSTRY />
 
    </div>
  )
  
}
