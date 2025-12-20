import React from "react";
import clientsMentionsData from "../json/ClientsMentions.json";

// auto import logos (Vite)
const logosMap = import.meta.glob("../assets/*.png", { eager: true });

export default function ClientsMentions() {
  const logos = clientsMentionsData.logoFiles
    .map((file) => logosMap[`../assets/${file}`]?.default)
    .filter(Boolean);

  return (
    <div className="bg-[#F4F6F6] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-8 md:py-10">
      <div className="px-6 md:px-8 lg:px-20 max-w-7xl mx-auto">
        <h4 className="font-semibold text-center mb-6 md:mb-8 text-sm md:text-base">
          {clientsMentionsData.title}
        </h4>

        {/* ONLY mobile swipe added */}
        <div
          className="
            flex
            flex-nowrap
            overflow-x-auto md:overflow-visible
            justify-start md:justify-center
            items-center
            gap-3 md:gap-4 lg:gap-6
            scrollbar-hide
          "
        >
        {logos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`brand-${i}`}
            className="
              opacity-70 hover:opacity-100 transition
              flex-shrink-0
              h-9 md:h-11 lg:h-12
              max-w-[110px] md:max-w-[140px] lg:max-w-[160px]
              w-auto
              object-contain
            "
          />
        ))}
        </div>
      </div>
    </div>
  );
}
