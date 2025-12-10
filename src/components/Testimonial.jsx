import React from "react";
import { FiActivity } from "react-icons/fi";
import { MdKeyboardCommandKey } from "react-icons/md";
import { IoTrendingUp } from "react-icons/io5";
import { FiNavigation } from "react-icons/fi";
import testimonialData from "../json/Testimonial.json";

const iconMap = {
  FiActivity: FiActivity,
  MdKeyboardCommandKey: MdKeyboardCommandKey,
  IoTrendingUp: IoTrendingUp,
  FiNavigation: FiNavigation
};

export default function Testimonial() {
    return(
        <section className="px-4 md:px-6 lg:px-20 py-8 md:py-10 lg:py-12">
            <div>
                {/* Header section */}
                <div className="justify-center items-center mb-6 md:mb-8 lg:mb-10">
                    {/* RESPONSIVE: text-xl mobile, text-2xl tablet+, remove hardcoded widths */}
                    <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold text-center max-w-full mx-auto mb-2">
                        {testimonialData.header.title} <span className="text-primary">{testimonialData.header.titleHighlight}</span>
                    </h2>
                    {/* RESPONSIVE: text-xs mobile, text-sm tablet+, max-w for better readability */}
                    <p className="text-center text-secondary text-xs md:text-sm max-w-md lg:max-w-2xl mx-auto">
                        {testimonialData.header.description}
                    </p>
                </div>
                {/* RESPONSIVE: 1 column mobile, 2 columns tablet (iPad Mini), 4 columns desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 lg:gap-6 mb-8 md:mb-10">
                    {testimonialData.cards.map((card) => {
                        const IconComponent = iconMap[card.icon];
                        return (
                            <div key={card.id} className="p-4 md:p-5 rounded-xl hover:shadow-lg cursor-pointer transition-shadow">
                                <div 
                                    className="p-[1px] rounded-2xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3"
                                    style={{
                                        background: 'linear-gradient(135deg, #FBCD61 10.42%, #0E2925 100%)'
                                    }}
                                >
                                    <div className="bg-white rounded-[15px] w-full h-full flex items-center justify-center">
                                        {IconComponent && <IconComponent className="text-primary text-lg md:text-xl"/>}
                                    </div>
                                </div>
                                <h4 className="font-semibold mb-2 text-sm md:text-base">
                                    {card.title}
                                </h4>
                                <p className="text-xs leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
                {/* Stats grid - RESPONSIVE: 2 columns mobile/tablet, 4 columns desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden border-t-2">
                    {testimonialData.stats.map((stat) => (
                        <div key={stat.id} className="items-center justify-center border-r-2 lg:border-r-2 border-b-2 last:border-r-0 p-6 md:p-8 lg:p-10">
                            <p className="text-secondary text-xs text-center mb-2">
                                {stat.label}
                            </p>
                            <h4 className="font-semibold text-lg md:text-xl text-center">
                                {stat.value}
                            </h4>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}