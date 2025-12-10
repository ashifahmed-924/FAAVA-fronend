import React, { useState } from "react";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import faqData from "../json/FAQ.json";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const data = faqData.faqs;

  return (
    <section className="p-4 md:p-6 lg:p-10 py-8 md:py-10">
      <div className="lg:px-20">
 
        {/* Desktop Header - visible on tablet+ (md:block) */}
        <div className="text-center lg:px-10 hidden md:block mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-xl md:text-2xl font-semibold">
            What our happy <span className="text-primary">client say</span>
          </h2>
          <p className="text-black text-xs md:text-sm max-w-md mx-auto mt-2">
            Several selected clients, who already believe in our service.
          </p>
        </div>

        {/* Mobile Header - visible on mobile only */}
        <div className="text-center block md:hidden mb-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            Frequently asked <span className="text-primary">"questions"</span>
          </h2>
        </div>

        {/* Intro text - hidden on mobile, visible tablet+ */}
        <div className="hidden md:block mb-6 md:mb-8">
          <h5 className="text-lg md:text-xl mb-2">You asked, we answered! ✋</h5>
          <p className="text-xs md:text-sm max-w-3xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo lorem Ipsum is simply dummy text of the printing and typesetting.
          </p>
        </div>

        {/* FAQ Items - RESPONSIVE: space-y-4 mobile, space-y-5 tablet+ */}
        <div className="space-y-4 md:space-y-5 mt-6 md:mt-8">
          {data.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-4 md:pb-5 last:border-b-0">
              <button
                className="w-full flex justify-between items-center text-left gap-4 hover:opacity-80 transition"
                onClick={() => toggle(i)}
              >
                {/* RESPONSIVE: text-sm mobile, text-base tablet+ */}
                <p className="text-sm md:text-base font-medium pr-4">
                  {faq.question}
                </p>

                {/* RESPONSIVE: icon size */}
                {openIndex === i ? (
                  <HiOutlineChevronUp className="text-lg md:text-xl flex-shrink-0" />
                ) : (
                  <HiOutlineChevronDown className="text-lg md:text-xl flex-shrink-0" />
                )}
              </button>

              {/* RESPONSIVE: text-xs mobile, text-sm tablet+ */}
              {openIndex === i && (
                <p className="text-gray-600 text-xs md:text-sm mt-3 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
