// src/components/Layouts/Inspiration.jsx
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { TbArrowRightDashed, TbArrowLeftDashed } from "react-icons/tb";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/slide_1.png";
import img2 from "../assets/slide_2.png";
import img3 from "../assets/slide_3.png";
import inspirationsData from "../json/Inspirations.json";

const images = [img1, img2, img3];
const slides = inspirationsData.slides.map((slide, index) => ({
  ...slide,
  img: images[index]
}));

export default function Inspiration() {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Track window width for responsive sizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    variableWidth: false,
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        // Desktop: ≥1024px - 3 slides
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        // Tablet: 768px-1023px - 2 slides
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        // Mobile: <768px - 1 slide
        breakpoint: 767,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-20 bg-white">
      <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-14 items-stretch">
        {/* LEFT TEXT BLOCK - RESPONSIVE: full width mobile/tablet, max-w-md desktop */}
        <div className="max-w-full lg:max-w-md flex flex-col gap-6 md:gap-8 text-black pt-0 md:pt-4">
          {/* RESPONSIVE: text-3xl mobile, text-4xl tablet, text-5xl desktop */}
          <h1 className="font-semibold leading-tight text-3xl md:text-4xl lg:text-5xl">
            <span className="block">50+ Beautiful</span>
            <span className="block">rooms</span>
            <span className="block">inspiration</span>
          </h1>

          <p className="text-xs md:text-sm lg:text-base text-gray-600 max-w-full lg:max-w-xs">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>

          {/* Navigation arrows - RESPONSIVE: gap-3 mobile, gap-4 tablet+ */}
          <div className="flex items-center gap-3 md:gap-4">
            <TbArrowLeftDashed 
              onClick={() => sliderRef.current?.slickPrev()}
              className="cursor-pointer text-black hover:opacity-70 transition"
              size={20}
            />
            <TbArrowRightDashed 
              onClick={() => sliderRef.current?.slickNext()}
              className="cursor-pointer text-black hover:opacity-70 transition"
              size={20}
            />
          </div>
        </div>

        {/* SLIDER - RESPONSIVE: full width mobile/tablet, 3/4 width desktop */}
        <div className="relative w-full lg:w-3/4 overflow-hidden lg:overflow-visible">
          <style>{`
            .slick-list {
              overflow: hidden !important;
            }
            @media (min-width: 1024px) {
              .slick-list {
                overflow: visible !important;
              }
            }
            .slick-track {
              display: flex !important;
              align-items: center;
            }
            .slick-slide {
              padding-right: 12px;
            }
            @media (min-width: 768px) {
              .slick-slide {
                padding-right: 16px;
              }
            }
            @media (min-width: 1024px) {
              .slick-slide {
                padding-right: 20px;
              }
            }
            .slick-slide:last-child {
              padding-right: 0;
            }
          `}</style>
          <Slider ref={sliderRef} {...settings}>
            {slides.map((s, idx) => {
              const isActive = idx === activeSlide;
              
              // Calculate next and previous indices with wrapping
              const nextIndex = (activeSlide + 1) % slides.length;
              const prevIndex = activeSlide === 0 ? slides.length - 1 : activeSlide - 1;
              
              // Determine scale and opacity based on position
              let scaleClass = "scale-75 opacity-60"; // Default: smaller and faded
              
              if (isActive) {
                // Main image = regular scale
                scaleClass = "scale-100 opacity-100";
              } else if (idx === prevIndex) {
                // Previous image = larger scale (peeking)
                scaleClass = "scale-110 opacity-100";
              } else if (idx === nextIndex) {
                // Next image = slightly smaller (future peek)
                scaleClass = "scale-75 opacity-100";
              }
              
              return (
                <div
                  key={idx}
                  className={`transition-all duration-500 ease-out ${isActive ? '' : 'px-1 md:px-2'}`}
                >
                  <div 
                    className="relative overflow-hidden cursor-grab active:cursor-grabbing"
                    style={{
                      display: isActive ? 'flex' : 'block',
                      width: isActive 
                        ? windowWidth < 768 ? '280px' 
                          : windowWidth < 1024 ? '320px' 
                          : '400px'
                        : windowWidth < 768 ? '260px'
                          : windowWidth < 1024 ? '300px'
                          : '370px',
                      height: isActive 
                        ? windowWidth < 768 ? '400px'
                          : windowWidth < 1024 ? '500px'
                          : '580px'
                        : 'auto',
                      padding: isActive 
                        ? windowWidth < 768 ? '16px'
                          : windowWidth < 1024 ? '20px'
                          : '24px'
                        : '0',
                      alignItems: isActive ? 'flex-end' : 'auto',
                      gap: isActive ? '8px' : '0',
                      borderRadius: '12px',
                      alignSelf: !isActive ? 'stretch' : 'auto',
                      backgroundImage: `url(${s.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: '50%',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: 'lightgray'
                    }}
                    onClick={() => {
                      if (!isActive) {
                        const targetIndex = idx;
                        const currentIndex = activeSlide;
                        if (targetIndex > currentIndex) {
                          sliderRef.current?.slickNext();
                        } else {
                          sliderRef.current?.slickPrev();
                        }
                      }
                    }}
                  >
                    {/* glassmorphism info card at bottom center - RESPONSIVE sizing */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-6 w-[85%] md:w-[82%] lg:w-[70%]">
                      <div className="relative rounded-xl md:rounded-[24px] bg-white/90 backdrop-blur-md px-4 md:px-6 py-3 md:py-4 flex flex-col gap-2">
                        <p className="text-xs text-[#5A6D67] tracking-wide">
                          {s.year}
                        </p>

                        <div className="flex items-center justify-between gap-3">
                          <p className="font-semibold text-xs md:text-sm lg:text-base text-[#061210] leading-snug">
                            {s.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
