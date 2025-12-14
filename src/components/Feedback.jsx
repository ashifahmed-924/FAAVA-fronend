import React from "react";
import Pattern from "../assets/feedback_bg.png";

import img from "../assets/user.png";
import img1 from "../assets/user_1.png";
import img2 from "../assets/user_2.png";
import img3 from "../assets/user_3.png";
import img4 from "../assets/user_4.png";

import feedbackData from "../json/Feedback.json";

const users = [img, img1, img2, img3, img4];

export default function Feedback() {
  return (
    <section className="px-6 md:px-20 mb-4">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold lg:w-full w-14 mx-auto mb-2">
          {feedbackData.header.title}{" "}
          <span className="text-primary">{feedbackData.header.titleHighlight}</span>
        </h2>

        <p className="text-black text-sm lg:w-full w-16 mx-auto mb-10">
          {feedbackData.header.description}
        </p>
      </div>

      {/* Main Box */}
      <div className="relative w-full rounded-xl overflow-hidden bg-feedback-bg sm:px-10 md:px-20">
        <img
          src={Pattern}
          alt="pattern"
          className="absolute right-0 top-0 h-full opacity-60 object-cover"
        />

        <div className="relative p-10 md:py-14 md:px-10 flex flex-row flex-wrap md:flex-nowrap justify-between items-center">
          <div>
            <h4 className="w-full sm:w-[14rem] lg:w-[20rem] text-white text-2xl md:text-3xl font-semibold leading-snug mb-2">
              {feedbackData.content.heading}
            </h4>

            <p className="text-white text-sm mb-5">{feedbackData.content.subText}</p>

            <div className="flex items-center mb-3">
              <div className="flex -space-x-3">
                {users.map((u, i) => (
                  <img key={i} src={u} alt={`user ${i + 1}`} />
                ))}
              </div>

              <p className="text-white text-sm ml-3">{feedbackData.content.othersText}</p>
            </div>
          </div>

          <button className="mt-6 md:mt-0 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition">
            {feedbackData.content.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
