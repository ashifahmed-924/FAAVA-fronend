import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { TfiSearch } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import navData from "../json/Navbar.json";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = navData.navItems;

  return (
    <>
      <nav className="w-full">
        {/* RESPONSIVE: px-4 on mobile, px-6 on tablet, px-6 on desktop */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 py-3 md:py-4 flex items-center justify-between">

          {/* Logo - responsive sizing */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Faava" className="h-10 md:h-12 w-auto" />
          </div>

          {/* Spacer for desktop layout */}
          <div className="flex-1 hidden lg:block"></div>

          {/* Desktop Navigation - only visible on lg (≥1024px) - iPad Mini should show hamburger */}
          <ul className="hidden lg:flex gap-6 xl:gap-9 font-medium items-center">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActiveItem(item)}
                className={`cursor-pointer transition-all duration-200 relative pb-1 ${
                  activeItem === item
                    ? "bg-custom-text-gradient bg-clip-text text-transparent"
                    : "hover:bg-custom-text-gradient hover:bg-clip-text hover:text-transparent"
                }`}
              >
                {item}
                {activeItem === item && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-custom-text-gradient"></span>
                )}
              </li>
            ))}
          </ul>

          {/* Search Icon - desktop only */}
          <div className="ml-4 lg:ml-8 hidden lg:flex bg-black cursor-pointer h-10 w-10 rounded-lg justify-center items-center">
            <TfiSearch className="text-xl text-white" />
          </div>

          {/* Mobile/Tablet Menu Button - visible below lg (<1024px) - includes iPad Mini at 768px */}
          <button
            className="block lg:hidden text-black text-2xl md:text-3xl"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        >
          {/* RESPONSIVE: w-64 on mobile, w-80 on tablet, full width on very small screens */}
          <div
            className="absolute right-0 top-0 w-64 md:w-80 max-w-[85vw] h-full bg-white shadow-lg p-4 md:p-6 flex flex-col justify-between animate-slideIn"
            onClick={(e) => e.stopPropagation()}
          >

            <div>
              {/* Close button with responsive sizing */}
              <button
                className="text-2xl md:text-3xl mb-4 md:mb-6 text-gray-600 hover:text-gray-800 transition"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <IoClose />
              </button>

              {/* Navigation items with responsive spacing */}
              <ul className="flex flex-col gap-4 md:gap-6 font-medium text-gray-800">
                {navItems.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setActiveItem(item);
                      setOpen(false);
                    }}
                    className={`cursor-pointer transition-all duration-200 relative pb-1 text-base md:text-lg ${
                      activeItem === item
                        ? "bg-custom-text-gradient bg-clip-text text-transparent"
                        : "hover:text-gray-600"
                    }`}
                  >
                    {item}
                    {activeItem === item && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-custom-text-gradient"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Search icon in mobile menu */}
            <div className="bg-black cursor-pointer h-10 w-10 rounded-lg flex justify-center items-center self-start hover:bg-gray-800 transition">
              <TfiSearch className="text-xl text-white" />
            </div>
          </div>
        </div>
      )}


      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
