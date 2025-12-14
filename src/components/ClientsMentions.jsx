import React from "react";
import clientsMentionsData from "../json/ClientsMentions.json";

// auto import logos (Vite)
const logosMap = import.meta.glob("../assets/*.png", { eager: true });

export default function ClientsMentions() {
  const logos = clientsMentionsData.logoFiles
    .map((file) => logosMap[`../assets/${file}`]?.default)
    .filter(Boolean);

  return (
    <div className="bg-[#F4F6F6] p-6 md:p-8 lg:px-20 py-8 md:py-10">
      <h4 className="font-semibold text-center mb-6 md:mb-8 text-sm md:text-base">
        {clientsMentionsData.title}
      </h4>

      {/* ONLY mobile swipe added */}
      <div
        className="
          flex
          flex-nowrap md:flex-wrap
          overflow-x-auto md:overflow-visible
          justify-start md:justify-center
          items-center
          gap-4 md:gap-4 lg:gap-12
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
            "
          />
        ))}
      </div>
    </div>
  );
}
