import React from "react";
import house from "../assets/house.png";
import arrow from "../assets/arrow-bottom.png";
import heroData from "../json/Hero.json";

export default function Hero() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-12 relative">
      <div className="relative bg-custom-text-gradient w-full mx-auto rounded-3xl p-6 lg:p-6 md:p-12">
        {/* Mobile/Tablet background overlay (same as your first code) */}
        <div
          className="absolute inset-0 rounded-3xl lg:hidden z-0"
          style={{
            backgroundImage: `linear-gradient(
              180deg,
              rgba(251,205,97,0.55),
              rgba(14,41,37,0.25)
            ), url(${house})`,
            backgroundSize: "auto",
            backgroundPosition: "center 90%",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
          {/* Left */}
          <div className="max-w-lg pr-4">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-white leading-tight lg:leading-[4rem] lg:w-18">
              {heroData.title}{" "}
              <span className="text-primary">{heroData.titleHighlight}</span>{" "}
              {heroData.emoji}
            </h1>

            {/* Stats (keep layout like your first code) */}
            <div className="flex lg:flex-row sm:flex-row flex-col gap-8 mt-6">
              {heroData.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex lg:flex-row sm:flex-row flex-col lg:items-center sm:items-center"
                >
                  <p className="text-xl md:text-2xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white lg:w-[6rem] sm:w-[6rem] lg:text-center sm:text-center">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Search form (structure same as your first code, but dynamic from JSON) */}
            <div
              className="
                bg-white shadow-xl rounded-xl py-2 px-4 mt-5 
                w-full md:w-36 sm:w-36
                flex flex-col sm:flex-row items-start md:items-center gap-3 
                relative z-20
              "
            >
              {heroData.searchForm.dropdowns.map((dropdown) => (
                <div
                  key={dropdown.id}
                  className="rounded-xl p-0.5 bg-[linear-gradient(135deg,#FBCD61_10.42%,#0E2925_100%)]"
                >
                  <div className="bg-white flex items-center gap-4 px-2 py-2 rounded-lg w-full md:w-auto">
                    <div className="flex flex-col leading-tight">
                      <label className="text-xs">{dropdown.label}</label>
                      <span className="font-semibold text-xs">
                        {dropdown.value}
                      </span>
                    </div>

                    <div className="w-8 h-8 flex items-center justify-center bg-white">
                      <img src={arrow} alt="dropdown" />
                    </div>
                  </div>
                </div>
              ))}

              <button
                className="
                  bg-secondary-500 text-white 
                  px-8 py-4 rounded-xl 
                  text-base font-medium 
                  w-full sm:w-auto
                "
              >
                {heroData.searchForm.buttonText}
              </button>
            </div>
          </div>

          {/* Right image (desktop only) */}
          <div className="relative w-full flex justify-center lg:justify-start items-center">
            <img
              src={house}
              alt="house"
              className="
                hidden lg:block
                w-full
                scale-125
                object-cover
                -mt-8
                -mb-12
                -ml-12
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
