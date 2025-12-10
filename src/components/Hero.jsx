import React from "react";
import house from "../assets/house.png";
import arrow from "../assets/arrow-bottom.png";
import heroData from "../json/Hero.json";

export default function Hero() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-20 py-8 md:py-10 lg:py-12 relative">
      {/* RESPONSIVE: p-4 mobile, p-6 tablet (iPad Mini), p-8 desktop */}
      <div className="relative bg-custom-text-gradient w-full mx-auto rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8">

        {/* Background image for mobile/tablet - hidden on desktop */}
        <div
          className="absolute inset-0 rounded-2xl md:rounded-3xl lg:hidden z-0"
          style={{backgroundImage: `linear-gradient(
              180deg,
              rgba(251,205,97,0.55),
              rgba(14,41,37,0.25)
            ), url(${house})`,
            backgroundSize: "cover",        
            backgroundPosition: "center 90%",  
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* RESPONSIVE: Single column mobile/tablet, 2 columns desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 relative z-10">

          {/* Left content column */}
          <div className="max-w-full lg:max-w-lg lg:pr-4">
            {/* RESPONSIVE: text-2xl mobile, text-3xl tablet, text-4xl desktop */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight md:leading-snug lg:leading-[4rem]">
              {heroData.title} <span className="text-primary">{heroData.titleHighlight}</span> {heroData.emoji}
            </h1>

            {/* Stats section - RESPONSIVE: column on mobile, row on tablet+ */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-6">
              {heroData.stats.map((stat) => (
                <div key={stat.id} className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs md:text-sm text-white md:ml-2">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Search form - RESPONSIVE: column on mobile, row on tablet+ (iPad Mini) */}
            <div
              className="
              bg-white shadow-xl rounded-xl py-3 md:py-2 px-3 md:px-4 mt-4 md:mt-5 
              w-full
              flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-2 lg:gap-3 
              relative z-20 
            "
            >

              {heroData.searchForm.dropdowns.map((dropdown) => (
                <div 
                  key={dropdown.id}
                  className="rounded-xl p-[1px] flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #FBCD61 10.42%, #0E2925 100%)'
                  }}
                >
                  <div className="bg-white flex items-center gap-2 md:gap-2 lg:gap-4 px-2 md:px-2 lg:px-3 py-2 rounded-[11px] w-full md:w-auto min-w-[100px] md:min-w-[120px]">
                    <div className="flex flex-col leading-tight">
                      <label className="text-xs">{dropdown.label}</label>
                      <span className="font-semibold text-xs">{dropdown.value}</span>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-white ml-auto md:ml-0">
                      <img src={arrow} alt="dropdown" className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </div>
                </div>
              ))}

              {/* Search Button - RESPONSIVE: full width mobile, auto tablet+ */}
              <button
                className="
                bg-secondary-500 text-white 
                px-4 md:px-6 lg:px-8 py-3 md:py-3 lg:py-4 rounded-xl 
                text-sm md:text-base font-medium 
                w-full md:w-auto
                hover:opacity-90 transition
              "
              >
                {heroData.searchForm.buttonText}
              </button>
            </div>
          </div>

          {/* Right image column - hidden on mobile/tablet, visible on desktop */}
          <div className="relative w-full flex justify-center lg:justify-start items-center hidden lg:flex">
            <img
              src={house}
              alt="house"
              className="
                w-full
                scale-110 lg:scale-125
                object-cover
                -mt-4 lg:-mt-8
                -mb-8 lg:-mb-12
                -ml-0 lg:-ml-12
                drop-shadow-2xl
                z-0
              "
            />
          </div>

        </div>

      </div>
    </section>
  );
}
