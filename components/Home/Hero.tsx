import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-auto md:aspect-16/8 -mt-35">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/about/e3354bcc-f629-45cb-98a4-83bdc1b79269.webp"
        />
        <img
          src="/about/Dubai-Skyline-Tools-at-Sunset.webp"
          alt="Bahrainwala Building Materials Trading CO LLC"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-linear-to-b from-black/10 to-transparent"></div>
      <div className="absolute top-1/3 lg:top-32 left-0 w-full">
        <div className="templateContainer">
          <div className="py-4 lg:py-12">
            <div className="w-16 h-1 bg-orange-500 mb-4"></div>
            <h1 className="text-2xl lg:text-6xl font-light text-left leading-tight tracking-tight text-white drop-shadow-2xl">
              Premium Building Materials.
              <br />
              Trusted Quality Since Years.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
