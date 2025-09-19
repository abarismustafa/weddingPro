"use client";
import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { navMenus } from "@/data/menuData";
import Link from "next/link"; // Import Link from next/link

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-pink-600 shadow z-50">
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        <div className="text-2xl font-serif text-white">
          <a href="/">Wedding Spot</a>
        </div>

        {/* Desktop Menu (centered) */}
        <nav className="hidden md:flex space-x-8 font-medium text-white text-xl mx-auto">
          {navMenus.map((menu, index) => (
            <div key={index} className="group relative">
              <button className="flex items-center gap-1">
                {menu.title}
                {menu.dropdown && <FiChevronDown />}
              </button>
              {menu.dropdown && (
                <div
                  className="absolute left-0 top-full hidden group-hover:grid bg-white text-gray-800 shadow-lg rounded-lg p-6 z-50 transition-all duration-200"
                  style={{
                    gridTemplateColumns: `repeat(${Math.min(
                      menu.dropdown.columns.length + (menu.dropdown.images ? 1 : 0),
                      4
                    )}, minmax(150px, 1fr))`,
                    gap: "2rem",
                    minWidth: "900px",
                  }}
                >
                  {menu.dropdown.columns.map((col, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-pink-600 mb-2">{col.heading}</h4>
                      <ul className="space-y-1">
                        {col.links.map((link, j) => (
                          <li key={j}>
                            <a href="#" className="hover:text-pink-600 transition-colors">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {menu.dropdown.images && (
                    <div className="grid grid-cols-2 gap-4">
                      {menu.dropdown.images.map((imgItem, k) => (
                        <div key={k} className="text-center">
                          <img
                            src={imgItem.img}
                            alt={imgItem.name}
                            className="rounded-lg shadow-md object-cover h-32 w-full"
                          />
                          <p className="text-sm mt-1">{imgItem.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex space-x-4">

          <Link href="/login">
            <button className="bg-black text-white px-4 py-2 rounded cursor-pointer font-medium">Login</button>
          </Link>
          <Link href="/signup">
            <button className="bg-black text-white px-4 py-2 rounded cursor-pointer font-medium">Signup</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 space-y-4 font-medium">
          {navMenus.map((menu, i) => (
            <div key={i} className="border-b pb-2">
              <button
                className="w-full flex justify-between items-center text-gray-800 font-semibold"
                onClick={() => toggleDropdown(i)}
              >
                {menu.title}
                {menu.dropdown &&
                  (openDropdown === i ? (
                    <FiChevronUp className="text-gray-600" />
                  ) : (
                    <FiChevronDown className="text-gray-600" />
                  ))}
              </button>
              {menu.dropdown && openDropdown === i && (
                <div className="ml-4 mt-2 space-y-2">
                  {menu.dropdown.columns.map((col, j) => (
                    <div key={j}>
                      <p className="font-semibold text-pink-600">{col.heading}</p>
                      {col.links.map((link, k) => (
                        <a
                          href="#"
                          key={k}
                          className="block text-gray-600 hover:text-pink-600 ml-2"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  ))}
                  {menu.dropdown.images && (
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      {navMenus.map((imgItem, k) => (
                        <div key={k} className="text-center">
                          <img
                            src={imgItem.img}
                            alt={imgItem.name}
                            className="rounded-lg shadow-md object-cover h-24 w-40"
                          />
                          <p className="text-sm mt-1">{imgItem.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;