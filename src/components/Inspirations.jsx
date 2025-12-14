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
  img: images[index],
}));

export default function Inspiration() {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    variableWidth: true,
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-20 bg-white">
      <div className="flex flex-col lg:flex-row justify-between gap-10 items-stretch">
        {/* LEFT CONTENT */}
        <div className="max-w-full lg:max-w-md flex flex-col gap-8 text-black">
          <h1 className="font-semibold leading-tight text-3xl md:text-4xl lg:text-5xl">
            <span className="block">50+ Beautiful</span>
            <span className="block">rooms</span>
            <span className="block">inspiration</span>
          </h1>

          <p className="text-sm md:text-base text-gray-600 max-w-xs">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>

          <div className="flex items-center gap-4">
            <TbArrowLeftDashed
              size={22}
              className="cursor-pointer hover:opacity-70"
              onClick={() => sliderRef.current?.slickPrev()}
            />
            <TbArrowRightDashed
              size={22}
              className="cursor-pointer hover:opacity-70"
              onClick={() => sliderRef.current?.slickNext()}
            />
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative w-full lg:w-3/4 overflow-hidden">
          <style>{`
            .slick-list {
              overflow: visible !important;
            }
            .slick-track {
              display: flex !important;
              align-items: center;
            }
            .slick-slide {
              padding-right: 20px;
            }
            .slick-slide:last-child {
              padding-right: 0;
            }
            .inspiration-slide-hidden {
              visibility: hidden !important;
              opacity: 0 !important;
              pointer-events: none !important;
              transform: translateX(-100%) !important;
              width: 0 !important;
              min-width: 0 !important;
              padding: 0 !important;
              margin: 0 !important;
            }
          `}</style>
          <Slider ref={sliderRef} {...settings}>
            {slides.map((s, idx) => {
              const isActive = idx === activeSlide;
              const nextIndex = (activeSlide + 1) % slides.length;
              const isNext = idx === nextIndex;
              
              // Hide all slides except active and next
              const shouldHide = !isActive && !isNext;

              return (
                <div 
                  key={idx} 
                  className={`px-2 ${shouldHide ? 'inspiration-slide-hidden' : ''}`}
                >
                  <div
                    className="relative overflow-hidden transition-all duration-500 cursor-pointer"
                    style={{
                      width: isActive 
                        ? (windowWidth < 768 ? '240px' : '400px')
                        : (windowWidth < 768 ? '320px' : '370px'),
                      height: isActive 
                        ? (windowWidth < 768 ? '380px' : '580px')
                        : (windowWidth < 768 ? '370px' : '480px'),
                      borderRadius: "12px",
                    }}
                    onClick={() => {
                      if (isNext) {
                        sliderRef.current?.slickNext();
                      }
                    }}
                  >
                    {/* IMAGE - NO BLUR, NO EFFECTS, CLEAR VISIBILITY */}
                    <img
                      src={s.img}
                      alt={s.title}
                      draggable={false}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                      style={{
                        filter: 'none',
                        transform: isActive ? 'scale(1)' : 'scale(0.95)',
                        opacity: 1,
                      }}
                    />

                    {/* INFO CARD - Only on active slide */}
                    {isActive && (
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-6 w-[85%] md:w-[82%] lg:w-[70%]">
                        <div className="rounded-xl md:rounded-2xl bg-white/90 backdrop-blur-md px-4 md:px-5 py-3 md:py-4">
                          <p className="text-xs text-[#5A6D67]">{s.year}</p>
                          <p className="font-semibold text-xs md:text-sm text-[#061210] mt-1 leading-snug">
                            {s.title}
                          </p>
                        </div>
                      </div>
                    )}
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
