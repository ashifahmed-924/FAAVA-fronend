import React from "react";
import img1 from "../assets/image_1.png"
import img2 from "../assets/image_2.png"
import img3 from "../assets/image_3.png"
import img4 from "../assets/image_4.png"
import img5 from "../assets/image_5.png"
import img6 from "../assets/image_6.png"
import { FiMapPin } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { MdOutlineSquareFoot } from "react-icons/md";
import { TbArrowRightDashed } from "react-icons/tb";
import projectsData from "../json/Projects.json";

const images = [img1, img2, img3, img4, img5, img6];
const data = projectsData.projects.map((project, index) => ({
    ...project,
    img: images[index]
}));
export default function Projects() {
    return(
        <section className="p-4 md:p-6 lg:p-20 py-8 md:py-10 lg:py-12">
            <div>
                {/* Header - RESPONSIVE: remove hardcoded widths */}
                <div className="justify-center items-center mb-6 md:mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-center max-w-full mx-auto">
                        Latest offplan projects in <span className="text-primary">Dubai</span>
                    </h2>
                </div>
                
      {/* RESPONSIVE: 1 column mobile, 2 columns tablet (iPad Mini), 3 columns desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden"
          >
            {/* RESPONSIVE: h-40 mobile, h-48 tablet+ */}
            <img
              src={item.img}
              alt={item.title}
              className="rounded-lg w-full h-40 md:h-48 object-cover"
            />
            {/* RESPONSIVE: p-3 mobile, p-4 tablet+ */}
            <div className="p-3 md:p-4">
            <h3 className="font-semibold mt-2 md:mt-4 leading-snug text-sm md:text-base">{item.title}</h3>

            <p className="font-bold mt-2 text-base md:text-lg">{item.price}</p>

            <div className="flex items-center gap-2 mt-2 text-xs md:text-sm text-black">
              <FiMapPin className="text-black flex-shrink-0" />
              <span className="truncate">{item.location}</span>
            </div>

            <p className="text-gray-500 text-xs md:text-sm mt-2 line-clamp-2">
              {item.description}
            </p>

            {/* RESPONSIVE: flex-wrap on mobile, normal flex on tablet+ */}
            <div className="flex items-center justify-between mt-4 text-black text-xs md:text-sm gap-2 flex-wrap">
              <div className="flex items-center gap-1 md:gap-2">
                <LuBath className="text-base md:text-lg" />
                <span>{item.baths}</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <IoBedOutline className="text-base md:text-lg" />
                <span>{item.beds}</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <MdOutlineSquareFoot className="text-base md:text-lg" />
                <span>{item.sqft}</span>
              </div>

              <button className="text-black ml-auto bg-white border border-black px-3 md:px-4 py-1 rounded-lg text-xs md:text-sm hover:bg-black hover:text-white transition whitespace-nowrap">
                Book Now
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>


{/* RESPONSIVE: mt-8 mobile, mt-12 tablet+ */}
<div className="flex justify-center mt-8 md:mt-12">
  <button className="flex items-center font-semibold gap-2 relative pl-10 md:pl-12 text-sm md:text-base">

    {/* RESPONSIVE: 40px mobile, 48px tablet+ */}
    <span 
      className="bg-custom-text-gradient shadow-lg flex items-center justify-center"
      style={{
        width: '40px',
        height: '40px',
        position: 'absolute',
        left: '0',
        borderRadius: '20px'
      }}
    >
      <span className="flex items-center justify-center text-black font-semibold text-xs md:text-sm">All</span>
    </span>

    <span className="ml-1 flex items-center gap-1">ads <TbArrowRightDashed className="text-base md:text-lg" /></span>

  </button>
</div>


      </div>
    </section>
  );
}