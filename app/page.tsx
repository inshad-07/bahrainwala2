import AboutSection from "@/components/Home/AboutSection";
import BrandsCrausal2 from "@/components/Home/BrandsCrausal2";
import FeaturesSection from "@/components/Home/FeaturesSection";
import Hero from "@/components/Home/Hero";
import Image from "next/image";
import ProductCarousel from "@/components/Home/ProductCarousel";
import ProductCategories from "@/components/Products/ProductCategories";
import { categories } from "@/lib/data";

export default function Home() {
  return (
   <div>
    <Hero/>
     <ProductCategories categories={categories} />
    <ProductCarousel/>
    <AboutSection/>
    <FeaturesSection/>
    <BrandsCrausal2/>
   </div>
  );
}
