"use client";
import React from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";


const myearingpoints = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-4 mt-20">My Orders</h1>
        <p>Here you will see all your past orders.</p>
      </main>
      <Footer/>
    </>
  );
};

export default myearingpoints;
