const brands = [
  {
    name: "K-PRIX",
    detail: "Abrasives Products — Authorized Dealer (Korea)",
  },
  {
    name: "COMET",
    detail: "Abrasives Products — Authorized Dealer (Europe)",
  },
  {
    name: "MITUTOYO",
    detail: "Measuring Instruments — Authorized Dealer (Japan)",
  },
  {
    name: "INSIZE",
    detail: "Measuring Instruments — Authorized Dealer (China)",
  },
  {
    name: "BAKER & KRISTEEL",
    detail: "Carbide Inserts & Tools (India)",
  },
  {
    name: "KORLOY",
    detail: "Carbide Inserts & Cutting Tools",
  },
  {
    name: "TAEGUTEC",
    detail: "Carbide Inserts & Cutting Tools",
  },
  {
    name: "WIDIA",
    detail: "Carbide Inserts & Cutting Tools",
  },
];

export default function AuthorizedBrandsSection() {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="templateContainer">
        <div className="mb-8 sm:mb-12">
          <p className="mb-3 text-xs font-medium uppercase leading-5 tracking-[0.18em] text-[#f97316]">
            Authorized Dealer
          </p>
          <h2 className="mt-2 sm:mt-3 text-[26px] sm:text-[32px] md:text-[40px] font-light leading-none tracking-[-0.010em] text-[#333333]">
            Our Brands & Partnerships
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl leading-[1.7] text-gray-600 text-[14px] tracking-[0.01em] sm:text-[16px]">
            We are the authorized dealer of globally trusted brands for abrasives,
            measuring instruments and carbide tooling — along with automobile tools,
            power tools and all types of safety products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="rounded-md border border-[#E5E0D8] bg-white px-4 py-5 transition-colors hover:border-[#f97316]"
            >
              <h3 className="text-[16px] sm:text-[18px] font-medium tracking-[0.01em] text-[#333333]">
                {brand.name}
              </h3>
              <p className="mt-1.5 text-[13px] sm:text-[14px] leading-[1.6] tracking-[0.01em] text-gray-600">
                {brand.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
