import AboutSection from "@/components/Home/AboutSection";
import BrandsCrausal2 from "@/components/Home/BrandsCrausal2";
import FeaturesSection from "@/components/Home/FeaturesSection";
import Hero from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero/>
    <AboutSection/>
    <FeaturesSection/>
    <BrandsCrausal2/>
   </div>
  );
}
