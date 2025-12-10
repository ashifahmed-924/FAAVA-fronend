import React from "react";
import man from "../assets/man.png";
import peoples from "../assets/peoples.png";
import happyClientData from "../json/HappyClient.json";

export default function HappyClient() {
  return (
    <section className="pb-8 md:pb-10">
      <div>
        {/* Header - RESPONSIVE: remove hardcoded widths */}
        <div className="text-center px-4 md:px-6 lg:px-10">
          <h2 className="text-xl md:text-2xl font-semibold max-w-full mx-auto mb-2">
            {happyClientData.header.title} <span className="text-primary">{happyClientData.header.titleHighlight}</span>
          </h2>
          <p className="text-black text-xs md:text-sm max-w-md mx-auto mb-6 md:mb-10">
            {happyClientData.header.description}
          </p>
        </div>

        {/* RESPONSIVE: 1 column mobile, 3 columns tablet+ (centered layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 lg:gap-4 px-4 md:px-6 lg:px-20 justify-center items-center">
          
          {/* Left image - hidden on mobile, visible tablet+ */}
          <div className="flex justify-center hidden md:flex">
            <img className="w-full max-w-[200px] lg:max-w-none object-contain" src={man} alt="Client testimonial" />
          </div>

          {/* Center content - full width mobile, centered tablet+ */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              {happyClientData.testimonial.name}
            </h3>
            <p className="text-black text-xs md:text-sm max-w-full md:max-w-[15rem] mx-auto md:mx-0">
              {happyClientData.testimonial.text}
            </p>
            {/* Dots indicator - RESPONSIVE: centered mobile, left tablet+ */}
            <div className="flex items-center gap-2 mt-4 justify-center md:justify-start">
              <span className="w-6 h-3 rounded-xl bg-primary"></span>
              <span className="w-3 h-3 rounded-full bg-circle"></span>
              <span className="w-3 h-3 rounded-full bg-circle"></span>
              <span className="w-3 h-3 rounded-full bg-circle"></span>
              <span className="w-3 h-3 rounded-full bg-circle"></span>
            </div>
          </div>

          {/* Right image - hidden on mobile, visible tablet+ */}
          <div className="flex justify-center hidden md:flex">
            <img className="w-full max-w-[200px] lg:max-w-none object-contain" src={peoples} alt="Happy clients" />
          </div>

        </div>
      </div>
    </section>
  );
}
