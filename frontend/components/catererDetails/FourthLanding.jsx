"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  ShieldCheck,
  Star,
  MapPin,
  ShoppingCart,
  History,
} from "lucide-react";

export default function FourthLanding() {
  return (
    <section className="relative h-[560px] w-full overflow-hidden bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7]">

      {/* Shared Transition Image */}
      <motion.div
        layoutId="caterer-image"
        className="absolute inset-0"
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image
          src="/images/caterers/caterer.jpg"
          alt="Royal Caterers"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffdde1]/90 via-[#ee9ca7]/65 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8 md:px-12 lg:px-20">

        {/* Top Buttons */}
        <div className="flex items-center justify-between">

          {/* Back Button */}
          <Link
            href="/caterer-listing"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#b91d73] shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          {/* Right Buttons */}
          <div className="flex items-center gap-3">

            {/* Order History */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-white/80 px-5 py-3 text-sm font-semibold text-[#b91d73] shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl"
            >
              <History size={18} />
              Order History
            </button>

            {/* Cart */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-white/80 px-5 py-3 text-sm font-semibold text-[#b91d73] shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl"
            >
              <ShoppingCart size={18} />
              Cart
            </button>

            {/* Favorite */}
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#b91d73] shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl"
            >
              <Heart className="h-5 w-5" />
            </button>

          </div>
        </div>

        {/* Bottom Content */}
        <div className="max-w-3xl text-gray-900">

          {/* Verified */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b91d73] to-[#ee9ca7] px-4 py-2 text-sm font-semibold text-white shadow-lg">
            <ShieldCheck size={18} />
            Verified Caterer
          </div>

          {/* Rating */}
          <div className="mb-4 flex items-center gap-2">

            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold text-gray-900">
              4.9
            </span>

            <span className="text-gray-800">
              (245 Reviews)
            </span>

          </div>

          {/* Name */}
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-6xl">
            Royal Caterers
          </h1>

          {/* Location */}
          <div className="mb-3 flex items-center gap-2 text-lg text-gray-800">
            <MapPin
              size={18}
              className="text-[#b91d73]"
            />

            Mumbai, Maharashtra
          </div>

          {/* Price */}
          <p className="mb-2 text-3xl font-bold text-[#b91d73]">
            ₹850 / Plate
          </p>

          {/* Cuisine */}
          <p className="text-lg font-medium text-gray-800">
            Veg • Non-Veg • Multi Cuisine
          </p>

        </div>
      </div>
    </section>
  );
}