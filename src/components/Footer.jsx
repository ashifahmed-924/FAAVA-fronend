import React from "react";
import Logo from "../assets/Logo.png";
import map1 from "../assets/map1.png";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import footerData from "../json/Footer.json";

export default function Footer() {
  return (
    <section className="bg-black py-8 md:py-10 px-4 md:px-6 lg:px-20">
      <div>
        {/* Logo */}
        <div className="flex justify-center border-b border-gray-800 pb-4 md:pb-6">
          <img className="h-10 md:h-12 w-auto" src={Logo} alt="Logo" />
        </div>

        {/* MOBILE / TABLET */}
        <div className="mt-6 text-white lg:hidden">
          {/* Reach us */}
          <div className="mb-6 md:mb-8">
            <h4 className="text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Reach us
            </h4>
            <ul className="text-xs md:text-sm space-y-2">
              <li className="flex items-center gap-2">
                <LuPhoneCall size={14} /> {footerData.contact.phone}
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineEmail size={14} /> {footerData.contact.email}
              </li>
              <li className="flex items-start gap-2">
                <IoLocationOutline size={20} className="mt-0.5 flex-shrink-0" />
                <span>
                  {footerData.contact.address.line1}
                  <br />
                  {footerData.contact.address.line2}
                </span>
              </li>
            </ul>
          </div>

          {/* Company + Legal + Quick Links (ONE ROW) */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Company */}
            <div>
              <h4 className="text-xs md:text-sm font-semibold mb-3 md:mb-4">
                {footerData.company.title}
              </h4>
              <ul className="text-xs md:text-sm space-y-2">
                {footerData.company.links.map((link, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-gray-300 transition"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs md:text-sm font-semibold mb-3 md:mb-4">
                {footerData.legal.title}
              </h4>
              <ul className="text-xs md:text-sm space-y-2">
                {footerData.legal.links.map((link, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-gray-300 transition"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs md:text-sm font-semibold mb-3 md:mb-4">
                {footerData.quickLinks.title}
              </h4>
              <ul className="text-xs md:text-sm space-y-2">
                {footerData.quickLinks.links.map((link, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-gray-300 transition"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[150px] md:h-[180px] overflow-hidden rounded-lg">
            <img src={map1} alt="Map" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr_1.4fr] gap-6 lg:gap-8 mt-6 text-white">
          {/* Reach us */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Reach us</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <LuPhoneCall size={14} /> {footerData.contact.phone}
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineEmail size={14} /> {footerData.contact.email}
              </li>
              <li className="flex items-start gap-2">
                <IoLocationOutline size={14} className="mt-0.5 flex-shrink-0" />
                <span>
                  {footerData.contact.address.line1}
                  <br />
                  {footerData.contact.address.line2}
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4">
              {footerData.company.title}
            </h4>
            <ul className="text-sm space-y-2">
              {footerData.company.links.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-gray-300 transition"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4">
              {footerData.legal.title}
            </h4>
            <ul className="text-sm space-y-2">
              {footerData.legal.links.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-gray-300 transition"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">
              {footerData.quickLinks.title}
            </h4>
            <ul className="text-sm space-y-2">
              {footerData.quickLinks.links.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-gray-300 transition"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div className="w-full h-[180px] overflow-hidden rounded-lg">
            <img src={map1} alt="Map" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
