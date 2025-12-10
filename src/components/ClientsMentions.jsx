import React from "react";
import open from '../assets/open.png'
import oracle from '../assets/oracle.png'
import morpheus from '../assets/morpheus.png'
import monday from '../assets/monday.png'
import protonet from '../assets/protonet.png'
import samsung from '../assets/samsung.png'
import segment from '../assets/segment.png'
import clientsMentionsData from '../json/ClientsMentions.json'

export default function Logos() {
  const logos = [open, oracle, morpheus, samsung, monday, segment, protonet];
  return (
    <div className="bg-[#F4F6F6] p-6 md:p-8 lg:px-20 py-8 md:py-10">
        {/* RESPONSIVE: text-sm mobile, text-base tablet+ */}
        <h4 className="font-semibold text-center mb-6 md:mb-8 text-sm md:text-base">{clientsMentionsData.title}</h4>
    {/* RESPONSIVE: gap-4 mobile, gap-6 tablet, gap-12 desktop */}
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-4 lg:gap-12">
      {logos.map((src, i) => (
        <img key={i} src={src} alt={`brand-${i}`} className="h-4 md:h-5 lg:h-[20px] w-auto max-w-[60px] md:max-w-[73px] object-contain opacity-70 hover:opacity-100 transition" />
      ))}
    </div>
    </div>
  );
}
