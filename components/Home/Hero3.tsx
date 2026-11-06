import React from 'react';

export default function Hero3() {
  return (
    <section className="relative w-full h-[90vh] md:h-auto md:aspect-16/8 -mt-35">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/about/Industrial-Toolkit-on-Textured-Concretes.webp"
        />
        <img
          src="/about/112.jpeg"
          alt="Bahrainwala Building Materials Trading CO LLC"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black/5"></div>
      <div className="absolute top-50 lg:top-48 left-0 w-full">
        <div className="templateContainer">
          <div className="py-4 lg:py-12">
            <h1
              className="text-[26px] lg:text-6xl font-light text-left leading-tight tracking-tight text-white drop-shadow-2xl"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Premium Building Materials.
              <br />
              Trusted Quality Since Years.
            </h1>
            <div
              className="w-16 h-1 bg-orange-500 mt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
