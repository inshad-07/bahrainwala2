const projects = [
  "Dubai Mall",
  "Burj Khalifa",
  "Dubai Airport Terminal 3",
  "Midfield Airport Abu Dhabi",
  "Royal Atlantis Dubai",
];

const markets = [
  "Saudi Arabia",
  "Kuwait",
  "Iraq",
  "Qatar",
  "Bahrain",
  "Oman",
  "Africa",
  "Seychelles",
  "Afghanistan",
  "Pakistan",
  "Iran",
];

export default function ProjectsSection() {
  return (
    <section className="py-14 md:py-16 bg-[#faf9f7]">
      <div className="templateContainer space-y-12 md:space-y-16">

        {/* Project Supplies */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase leading-5 tracking-[0.18em] text-[#f97316]">
            Project Supplies
          </p>
          <h2 className="mt-2 sm:mt-3 mb-4 text-[26px] sm:text-[32px] md:text-[40px] font-light leading-none tracking-[-0.010em] text-[#333333]">
            Workshops & Maintenance Departments
          </h2>
          <p className="max-w-3xl leading-[1.7] text-gray-600 text-[14px] tracking-[0.01em] sm:text-[16px]">
            Our Project Supplies Division sets up complete workshops and furnishes
            maintenance departments with tools and accessories. We are a registered
            supplier to many hotels and resorts in Dubai, Abu Dhabi and Sharjah.
          </p>
        </div>

        {/* Prestige Projects */}
        <div>
          <h3 className="mb-4 text-[20px] sm:text-[24px] md:text-[28px] font-light leading-none tracking-[-0.010em] text-[#333333]">
            Approved Supplier for Prestigious Projects
          </h3>
          <p className="mb-6 max-w-3xl leading-[1.7] text-gray-600 text-[14px] tracking-[0.01em] sm:text-[16px]">
            Bahrainwala has been an approved supplier for many prestigious projects
            all over the UAE, including:
          </p>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {projects.map((project) => (
              <span
                key={project}
                className="rounded-full border border-[#E5E0D8] bg-white px-4 py-2 text-[13px] sm:text-[14px] tracking-[0.01em] text-gray-700 transition-colors hover:border-[#f97316]"
              >
                {project}
              </span>
            ))}
          </div>
        </div>

        {/* Export Markets */}
        <div>
          <h3 className="mb-4 text-[20px] sm:text-[24px] md:text-[28px] font-light leading-none tracking-[-0.010em] text-[#333333]">
            Serving Clients Across the Region & Beyond
          </h3>
          <p className="mb-6 max-w-3xl leading-[1.7] text-gray-600 text-[14px] tracking-[0.01em] sm:text-[16px]">
            We serve local construction companies, industries, resorts and trade
            houses — with a strong market presence in:
          </p>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {markets.map((market) => (
              <span
                key={market}
                className="rounded-full border border-[#E5E0D8] bg-white px-4 py-2 text-[13px] sm:text-[14px] tracking-[0.01em] text-gray-700 transition-colors hover:border-[#f97316]"
              >
                {market}
              </span>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="rounded-md border border-[#E5E0D8] bg-white px-6 py-8 sm:px-10 sm:py-10">
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-light leading-[1.6] tracking-[0.01em] text-[#333333]">
            “The highest quality delivered in the fastest possible time at the lowest
            possible price is the key to our success. Our profit is hidden in our
            client’s progress and prosperity.”
          </p>
        </div>

      </div>
    </section>
  );
}
