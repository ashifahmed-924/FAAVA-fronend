import React from "react";
import Pattern from "../assets/feedback_bg.png"
import img from  "../assets/user.png"
import img1 from "../assets/user_1.png"
import img2 from "../assets/user_2.png"
import img3 from "../assets/user_3.png"
import img4 from "../assets/user_4.png"

export default function Feedback(){
    return (
        <section className="px-4 md:px-6 lg:px-20 mb-4 md:mb-6">
            <div>
                {/* Header - RESPONSIVE: remove hardcoded widths */}
                <div className="text-center mb-6 md:mb-8 lg:mb-10">
                <h2 className="text-xl md:text-2xl font-semibold max-w-full mx-auto mb-2">
                    What our happy <span className="text-primary">client say</span>
                </h2>
                <p className="text-black text-xs md:text-sm max-w-md mx-auto">
                    Several selected clients, who already believe in our service.
                </p>
                </div>
            </div>
        {/* RESPONSIVE: rounded-lg mobile, rounded-xl tablet+ */}
        <div className="relative w-full rounded-lg md:rounded-xl overflow-hidden bg-feedback-bg">
            <img src={Pattern} alt="pattern" className="absolute right-0 top-0 h-full opacity-60 object-cover w-full md:w-auto" />
            {/* RESPONSIVE: p-6 mobile, p-10 tablet, p-14 desktop */}
            <div className="relative p-6 md:p-8 lg:p-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-4 lg:gap-6">
                <div className="flex-1">
                    {/* RESPONSIVE: text-xl mobile, text-2xl tablet, text-3xl desktop */}
                    <h4 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold leading-snug mb-2">
                        We will solve these problems for you. 😍
                    </h4>

                    <p className="text-white text-xs md:text-sm mb-4 md:mb-5">
                        Join with more 1200+ happy customers
                    </p>

                    {/* User avatars - RESPONSIVE: smaller on mobile */}
                    <div className="flex items-center mb-3">
                        <div className="flex -space-x-2 md:-space-x-3">
                            <img src={img} alt="user" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" />
                            <img src={img1} alt="user 1" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" />
                            <img src={img2} alt="user 2" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" />
                            <img src={img3} alt="user 3" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" />
                            <img src={img4} alt="user 4" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" />
                        </div>
                        <p className="text-white text-xs md:text-sm ml-2 md:ml-3">and others</p>
                    </div>
                </div>

                {/* Button - RESPONSIVE: full width mobile, auto tablet+ */}
                <button className="w-full md:w-auto bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition text-sm md:text-base">
                    Registration
                </button>
            </div>
        </div>

        </section>
    )
}