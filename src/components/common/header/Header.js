"use client"
import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-pink-600 shadow z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
                {/* Logo */}
                <div className="text-2xl font-serif text-white">Wedding Spot</div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8 font-medium text-gray-800">
                    <div className="group relative">
                        <a href="#home" className="hover:text-whit text-white">HOME</a>
                    </div>
                    <div className="group relative">
                        <a href="#couple" className="hover:text-whit flex items-center text-white">
                            COUPLE <FiChevronDown className="ml-1" />
                        </a>
                        {/* Dropdown */}
                        <div className="absolute drop-down hidden group-hover:block bg-white shadow rounded mt-2 py-2 w-40">
                            <a href="#about" className="block px-4 py-2 hover:bg-gray-100">About</a>
                            <a href="#story" className="block px-4 py-2 hover:bg-gray-100">Our Story</a>
                        </div>
                    </div>
                    <a href="#story" className="hover:text-whit text-white">STORY</a>
                    <a href="#events" className="hover:text-whit text-white">EVENTS</a>
                    <a href="#people" className="hover:text-whit text-white">PEOPLE</a>
                    <a href="#gallery" className="hover:text-whit text-white">GALLERY</a>
                    <a href="#rsvp" className="hover:text-whit text-white">RSVP</a>
                    <a href="#blog" className="hover:text-whit text-white">BLOG</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMobileMenu(!mobileMenu)}
                >
                    {mobileMenu ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenu && (
                <div className="md:hidden bg-white shadow-lg py-4 px-6 space-y-4 font-medium">
                    <a href="#home" className="block">HOME</a>
                    <a href="#couple" className="block">COUPLE</a>
                    <a href="#story" className="block">STORY</a>
                    <a href="#events" className="block">EVENTS</a>
                    <a href="#people" className="block">PEOPLE</a>
                    <a href="#gallery" className="block">GALLERY</a>
                    <a href="#rsvp" className="block">RSVP</a>
                    <a href="#blog" className="block">BLOG</a>
                </div>
            )}
        </header>
    );
};

export default Header;
