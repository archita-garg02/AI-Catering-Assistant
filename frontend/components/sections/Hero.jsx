"use client";

import { useState } from "react";
import Image from "next/image";

import heroFood from "@/assets/images/hero-food.png";
import { Button } from "@/components/ui/button";
import LoginPopup from "@/components/sections/LoginPopup";

export default function Hero() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7]">
        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-16 lg:flex-row lg:px-10">

          {/* LEFT */}
          <div className="max-w-xl">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#b91d73]">
              Your guests are already hungry. Let's give them something legendary.
            </p>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
              Plan Your
              <br />
              Perfect Event
              <br />
              With Us
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-700">
              Weddings, Corporate Events, Birthday Parties,
              Premium Buffets, Live Counters and much more.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                onClick={() => setShowLogin(true)}
                className="h-14 rounded-full bg-gradient-to-r from-[#b91d73] to-[#ee9ca7] px-8 font-semibold text-white shadow-lg transition hover:scale-105 hover:opacity-90"
              >
                Get Started
              </Button>

              <Button
                variant="outline"
                className="h-14 rounded-full border-[#b91d73] bg-white/60 px-8 text-[#b91d73] transition hover:bg-white"
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* Premium Buffet */}
            <div className="absolute -left-10 top-8 rounded-full bg-white px-5 py-3 font-medium text-[#b91d73] shadow-xl">
              Premium Buffet
            </div>

            {/* Live Counter */}
            <div className="absolute -right-12 top-28 rounded-full bg-white px-5 py-3 font-medium text-[#b91d73] shadow-xl">
              Live Counter
            </div>

            {/* AI Recommendation */}
            <div className="absolute bottom-10 left-10 rounded-full bg-white px-5 py-3 font-medium text-[#b91d73] shadow-xl">
              AI Recommendation
            </div>

            {/* Hero Image */}
            <Image
              src={heroFood}
              alt="Premium Catering"
              width={550}
              priority
              className="rounded-[40px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Login Popup */}
      <LoginPopup
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </>
  );
}