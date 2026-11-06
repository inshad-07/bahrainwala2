"use client";

import { useState, useEffect, useRef, type PointerEvent, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";

interface Brand {
  slug: string;
  image_id: string;
}

function BrandLogo({
  src,
  alt,
  tabIndex,
}: {
  src: string;
  alt: string;
  tabIndex?: number;
}) {
  const [errored, setErrored] = useState(false);

  // Show text placeholder for dummy brands
  if (src === 'placeholder' || errored) {
    return (
      <Link
        href="/brands"
        className="flex items-center justify-center w-full h-full cursor-pointer"
        aria-label={alt}
        tabIndex={tabIndex}
      >
        <div className="flex items-center justify-center h-12.5 sm:h-15 md:h-17.5 rounded-md bg-[#E46231]/20 px-2 sm:px-3 w-full">
          <span className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.01em] font-normal text-[#333333] truncate">
            {alt}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/brands"
      className="flex items-center justify-center w-full h-full cursor-pointer"
      aria-label={alt}
      tabIndex={tabIndex}
    >
      <Image
        src={src}
        alt={alt}
        width={120}
        height={48}
        className="h-auto max-h-12.5 sm:max-h-15 md:max-h-17.5 max-w-full w-auto object-contain transition-all duration-300"
        onError={() => setErrored(true)}
        unoptimized
      />
    </Link>
  );
}

export default function BrandsCrausal2() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const dragRef = useRef<{
    track: HTMLDivElement;
    pointerId: number;
    startX: number;
    moved: boolean;
  } | null>(null);
  const draggedRef = useRef(false);

  const handleDragStart = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    const track = event.currentTarget;
    dragRef.current = {
      track,
      pointerId: event.pointerId,
      startX: event.clientX,
      moved: false,
    };
  };

  const handleDragMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.startX;
    if (Math.abs(distance) > 4) {
      if (!drag.moved) {
        drag.track.setPointerCapture(event.pointerId);
        drag.track.style.transition = "none";
        drag.track.style.animationPlayState = "paused";
      }
      drag.moved = true;
      draggedRef.current = true;
    }
    drag.track.style.translate = `${distance}px 0`;
  };

  const handleDragEnd = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    if (drag.moved && drag.track.hasPointerCapture(event.pointerId)) {
      drag.track.releasePointerCapture(event.pointerId);
    }
    if (drag.moved) {
      drag.track.style.transition = "translate 180ms ease-out";
      drag.track.style.translate = "0px 0";
      drag.track.style.animationPlayState = "";
      window.setTimeout(() => {
        drag.track.style.transition = "";
      }, 180);
      // A drag may not produce a click event, so don't let the next real click
      // inherit the drag suppression flag.
      window.setTimeout(() => {
        draggedRef.current = false;
      }, 0);
    }
    dragRef.current = null;
  };

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!draggedRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    draggedRef.current = false;
  };

  // Fetch brands from API
  useEffect(() => {
    const brandImages = [
      '/brand/10001.png',
      '/brand/10002.png',
      '/brand/10003.png',
      '/brand/10004.png',
      '/brand/10005.png',
      '/brand/10006.png',
      '/brand/10007.png',
      '/brand/10008.png',
    ];

    const brandNames = [
      'K-PRIX',
      'COMET',
      'MITUTOYO',
      'INSIZE',
      'BAKER & KRISTEEL',
      'KORLOY',
      'TAEGUTEC',
      'WIDIA',
    ];

    const dummyBrands: Brand[] = Array.from({ length: 4 }, () =>
      brandImages.map((image_id, index) => ({
        slug: brandNames[index] ?? `Brand ${index + 1}`,
        image_id,
      }))
    ).flat();

    setBrands(dummyBrands);
  }, []);

  const brandRows = [
    brands.filter((_, index) => index % 2 === 0),
    brands.filter((_, index) => index % 2 === 1),
  ].filter((row) => row.length > 0);

  return (
    // <section className="pb-14 md:pb-16">
    <section className="py-10 md:py-10">
      <div className="templateContainer">
        {/* Heading */}
        <div className="mb-6 sm:mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <p className="text-[10px] sm:text-xs font-normal uppercase leading-5 tracking-[0.18em] text-[#333333]">
                Our Partners
              </p>
              <h2 className="mt-2 sm:mt-3 text-[26px] sm:text-[32px] md:text-[40px] font-light leading-none tracking-[-0.010em] text-[#333333]">
                Brands We Deal With
              </h2>
              <p className="mt-2 sm:mt-3 max-w-md leading-[1.7] text-gray-600 text-[14px] tracking-[0.01em] sm:text-[16px]">
                Authorized dealer of K-PRIX, COMET, MITUTOYO, INSIZE and more.
              </p>
            </div>
            <Link
              href="/brands"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 rounded-full border border-[#E46231] bg-transparent px-5 py-2.5 sm:px-7 sm:py-3 text-[10px] sm:text-xs font-normal uppercase tracking-[0.08em] text-[#E46231] transition hover:bg-[#E46231] hover:text-white shrink-0 w-auto justify-start sm:justify-center"
            >
              View All
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Carousel */}
        {brands.length === 0 ? null : (
          <div className="brand-marquee space-y-0.5 overflow-hidden">
            {brandRows.map((row, rowIndex) => (
              <div className="overflow-hidden" key={rowIndex}>
                <div
                  className={`brand-marquee-track ${rowIndex === 0 ? "brand-marquee-right" : "brand-marquee-left"}`}
                  onPointerDown={handleDragStart}
                  onPointerMove={handleDragMove}
                  onPointerUp={handleDragEnd}
                  onPointerCancel={handleDragEnd}
                  onClickCapture={handleClickCapture}
                >
                  {[0, 1].map((copy) => (
                    <div className="brand-marquee-group" key={copy} aria-hidden={copy === 1}>
                      {row.map((brand) => (
                        <div className="brand-marquee-item" key={brand.slug}>
                          <div className="flex h-15 sm:h-18 md:h-22 w-full items-center justify-center overflow-hidden rounded-md border border-[#E5E0D8] bg-transparent px-2 sm:px-3 hover:border-[#E46231] transition-colors">
                            <BrandLogo
                              src={brand.image_id}
                              alt={brand.slug}
                              tabIndex={copy === 1 ? -1 : undefined}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <style jsx>{`
        .brand-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          touch-action: pan-y;
          cursor: grab;
        }
        .brand-marquee-group {
          display: flex;
          shrink: 0;
          width: max-content;
        }
        .brand-marquee-item {
          display: flex;
          width: 120px;
          flex-shrink: 0;
          align-items: center;
          padding: 6px;
        }
        .brand-marquee-right {
          animation: brand-marquee-right 60s linear infinite;
        }
        .brand-marquee-left {
          animation: brand-marquee-left 60s linear infinite;
        }
        .brand-marquee-track:active {
          cursor: grabbing;
        }
        .brand-marquee:hover .brand-marquee-track {
          animation-play-state: paused;
        }
        @media (min-width: 480px) {
          .brand-marquee-item { width: 140px; padding: 7px; }
        }
        @media (min-width: 640px) {
          .brand-marquee-item { width: 160px; padding: 8px; }
        }
        @media (min-width: 768px) {
          .brand-marquee-item { width: 180px; }
        }
        @media (min-width: 1024px) {
          .brand-marquee-item { width: 200px; }
        }
        @keyframes brand-marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @keyframes brand-marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .brand-marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
