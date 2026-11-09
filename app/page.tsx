import AboutSection from "@/components/Home/AboutSection";
import BrandsCrausal2 from "@/components/Home/BrandsCrausal2";
import FeaturesSection from "@/components/Home/FeaturesSection";
import Hero from "@/components/Home/Hero";
import Image from "next/image";
import ProductCarousel from "@/components/Home/ProductCarousel";
import ProductCategories from "@/components/Products/ProductCategories";
import { categories } from "@/lib/data";
import Hero2 from "@/components/Home/Hero2";
import StatsSection from "@/components/Home/StatsSection";
import AboutSection2 from "@/components/Home/AboutSection2";
// import Hero3 from "@/components/Home/Hero3";

export default function Home() {
  return (
   <div>
    {/* <Hero/> */}
    <Hero2/>
    {/* <Hero3/> */}
     <ProductCategories categories={categories} />
    <ProductCarousel/>
    {/* <AboutSection/> */}
    <AboutSection2/>
    <StatsSection/>
    <FeaturesSection/>
    <BrandsCrausal2/>
   </div>
  );
}
