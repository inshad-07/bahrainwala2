import Image from "next/image";

const brands = [
  { src: "/brand/10001.png", alt: "Brand 1" },
  { src: "/brand/10002.png", alt: "Brand 2" },
  { src: "/brand/10003.png", alt: "Brand 3" },
  { src: "/brand/10004.png", alt: "Brand 4" },
  { src: "/brand/10005.png", alt: "Brand 5" },
  { src: "/brand/10006.png", alt: "Brand 6" },
  { src: "/brand/10007.png", alt: "Brand 7" },
  { src: "/brand/10008.png", alt: "Brand 8" },
];

export default function BrandSection() {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="templateContainer">
        <div className="mb-8 sm:mb-12 text-center">
        
          <h1 className="mt-2 sm:mt-3 text-[26px] sm:text-[32px] md:text-[40px] font-light leading-none tracking-[-0.010em] text-[#333333]">
            Brands We Deal With
          </h1>
          <p className="mt-3 sm:mt-4 mx-auto max-w-2xl leading-[1.7] text-gray-600 text-[14px] tracking-[0.01em] sm:text-[16px]">
            Authorized dealer of K-PRIX, COMET, MITUTOYO, INSIZE, BAKER &amp;
            KRISTEEL, KORLOY, TAEGUTEC and WIDIA — plus automobile tools, power
            tools and safety products.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {brands.map((brand) => (
            <div
              key={brand.src}
              className="flex h-15 sm:h-18 md:h-22 w-30 sm:w-35 md:w-50 items-center justify-center overflow-hidden rounded-md border border-[#E5E0D8] bg-white px-2 sm:px-3 hover:border-[#E46231] transition-colors"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={120}
                height={48}
                className="h-auto max-h-12.5 sm:max-h-15 md:max-h-17.5 max-w-full w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
