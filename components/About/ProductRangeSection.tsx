const categories = [
  "CNC & Lathe Machine Tools",
  "Measuring Instruments",
  "Taps & Dies",
  "Carbide Inserts",
  "Tool Holders & Tips",
  "Welding Tools",
  "Drill Bits & End Mills",
  "Construction Materials",
  "Power Tools",
  "Hand Tools",
  "Safety Products",
  "Paints & Painting Accessories",
  "Adhesives",
  "Abrasives",
];

export default function ProductRangeSection() {
  return (
    <section className="py-14 md:py-16 bg-[#faf9f7]">
      <div className="templateContainer">
        <div className="mb-8 sm:mb-12">
          <p className="mb-3 text-xs font-medium uppercase leading-5 tracking-[0.18em] text-[#f97316]">
            What We Offer
          </p>
          <h2 className="mt-2 sm:mt-3 text-[26px] sm:text-[32px] md:text-[40px] font-light leading-none tracking-[-0.010em] text-[#333333]">
            Our Product Range
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl leading-[1.7] text-gray-600 text-[14px] tracking-[0.01em] sm:text-[16px]">
            A wide range of items for use in CNC and lathe machines, workshops,
            construction sites and maintenance departments.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((item) => (
            <div
              key={item}
              className="flex items-center rounded-md border border-[#E5E0D8] bg-white px-4 py-3.5 sm:py-4 text-[14px] sm:text-[15px] leading-snug tracking-[0.01em] text-gray-700 transition-colors hover:border-[#f97316]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
