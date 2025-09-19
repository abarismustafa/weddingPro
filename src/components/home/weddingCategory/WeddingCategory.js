
"use client";
import React from "react";

const WeddingCategory = () => {
    const categories = [
        {
            title: "Venues",
            desc: "Banquet Halls, Marriage Garden / Lawn",
            img: "/assets/banner/p1.jpeg",
            color: "from-purple-100 to-purple-50",
        },
        {
            title: "Photographers",
            desc: "Wedding Photographers",
            img: "/assets/banner/ps3.jpg",
            color: "from-orange-100 to-orange-50",
        },
        {
            title: "Makeup",
            desc: "Bridal Makeup, Family Makeup",
            img: "/assets/banner/c1.jpg",
            color: "from-pink-100 to-pink-50",
        },
        {
            title: "Planning & Decor",
            desc: "Wedding Planners, Decorators",
            img: "/assets/banner/ps6.jpg",
            color: "from-yellow-100 to-yellow-50",
        },
        {
            title: "Virtual Planning",
            desc: "Online Planning Tools",
            img: "/assets/banner/c2.jpg",
            color: "from-rose-100 to-rose-50",
        },
        {
            title: "Mehndi",
            desc: "Mehndi Artist",
            img: "/assets/banner/c3.jpg",
            color: "from-green-100 to-green-50",
        },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Wedding Categories
                    </h2>
                    <a
                        href="#"
                        className="text-pink-600 font-semibold hover:underline text-sm md:text-base"
                    >
                        View all Categories →
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className={`flex justify-between items-center rounded-xl p-6 bg-gradient-to-r ${cat.color} shadow-md hover:shadow-lg transition`}
                        >
                            {/* Left Content */}
                            <div className="max-w-[60%]">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                                    {cat.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2">{cat.desc}</p>
                            </div>

                            {/* Right Image */}
                            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 shadow-md">
                                <img
                                    src={cat.img}
                                    alt={cat.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeddingCategory;
