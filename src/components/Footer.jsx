import React from "react";
import Logo from '../assets/Logo.png'
import map1 from '../assets/map1.png'
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import footerData from "../json/Footer.json";

export default function Footer () {
    return (
    <section className="bg-black py-8 md:py-10 px-4 md:px-6 lg:px-20">
  <div>

    {/* Logo - RESPONSIVE: h-10 mobile, h-12 tablet+ */}
    <div className="flex justify-center border-b border-gray-800 pb-4 md:pb-6">
      <img className="h-10 md:h-12 w-auto" src={Logo} alt="Logo" />
    </div>

    {/* Mobile/Tablet Layout - visible below lg (<1024px) */}
    <div className="mt-6 text-white lg:hidden">

      {/* Reach us section - RESPONSIVE: mb-6 mobile, mb-8 tablet+ */}
      <div className="mb-6 md:mb-8">
        <h4 className="text-xs md:text-sm font-semibold mb-3 md:mb-4">Reach us</h4>
        <ul className="text-xs md:text-sm space-y-2">
          <li className="flex items-center gap-2"><LuPhoneCall size={14}/> {footerData.contact.phone}</li>
          <li className="flex items-center gap-2"><MdOutlineEmail size={14} /> {footerData.contact.email}</li>
          <li className="flex items-start gap-2">
            <IoLocationOutline size={20} className="mt-0.5 flex-shrink-0" />
            <span>
              {footerData.contact.address.line1}<br/>
              {footerData.contact.address.line2}
            </span>
          </li>
        </ul>
      </div>

      {/* Company & Legal - RESPONSIVE: grid-cols-2 with gap-6 mobile, gap-8 tablet+ */}
      <div className="grid grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
        <div>
          <h4 className="text-xs md:text-sm font-semibold mb-3 md:mb-4">{footerData.company.title}</h4>
          <ul className="text-xs md:text-sm space-y-2">
            {footerData.company.links.map((link, index) => (
              <li key={index} className="cursor-pointer hover:text-gray-300 transition">{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs md:text-sm font-semibold mb-3 md:mb-4">{footerData.legal.title}</h4>
          <ul className="text-xs md:text-sm space-y-2">
            {footerData.legal.links.map((link, index) => (
              <li key={index} className="cursor-pointer hover:text-gray-300 transition">{link}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-6 md:mb-8">
        <h4 className="text-xs md:text-sm font-semibold mb-3 md:mb-4">{footerData.quickLinks.title}</h4>
        <ul className="text-xs md:text-sm space-y-2">
          {footerData.quickLinks.links.map((link, index) => (
            <li key={index} className="cursor-pointer hover:text-gray-300 transition">{link}</li>
          ))}
        </ul>
      </div>

      {/* Map - RESPONSIVE: h-150px mobile, h-180px tablet+ */}
      <div className="w-full h-[150px] md:h-[180px] overflow-hidden rounded-lg">
        <img 
          src={map1} 
          alt="Map" 
          className="w-full h-full object-cover"
        />
      </div>

    </div>

    {/* Desktop Layout - visible on lg (≥1024px) */}
    <div className="hidden lg:grid lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr_1.4fr] gap-6 lg:gap-8 mt-6 text-white">

      <div>
        <h4 className="text-sm font-semibold mb-4">Reach us</h4>
        <ul className="text-sm space-y-2">
          <li className="flex items-center gap-2"><LuPhoneCall size={14}/> {footerData.contact.phone}</li>
          <li className="flex items-center gap-2"><MdOutlineEmail size={14} /> {footerData.contact.email}</li>
          <li className="flex items-start gap-2">
            <IoLocationOutline size={14} className="mt-0.5 flex-shrink-0" />
            <span>
              {footerData.contact.address.line1}<br/>
              {footerData.contact.address.line2}
            </span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-4">{footerData.company.title}</h4>
        <ul className="text-sm space-y-2">
          {footerData.company.links.map((link, index) => (
            <li key={index} className="cursor-pointer hover:text-gray-300 transition">{link}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-4">{footerData.legal.title}</h4>
        <ul className="text-sm space-y-2">
          {footerData.legal.links.map((link, index) => (
            <li key={index} className="cursor-pointer hover:text-gray-300 transition">{link}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-4">{footerData.quickLinks.title}</h4>
        <ul className="text-sm space-y-2">
          {footerData.quickLinks.links.map((link, index) => (
            <li key={index} className="cursor-pointer hover:text-gray-300 transition">{link}</li>
          ))}
        </ul>
      </div>

      <div className="w-full h-[180px] overflow-hidden rounded-lg">
        <img 
          src={map1} 
          alt="Map" 
          className="w-full h-full object-cover"
        />
      </div>

    </div>

  </div>
</section>

    )
}