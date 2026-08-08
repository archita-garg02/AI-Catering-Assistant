"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Heart,
  MapPin,
  Star,
  UtensilsCrossed,
} from "lucide-react";

export default function CatererCard({ caterer }) {
  return (
    <Link
      href={`/caterers/${caterer.id}`}
      className="block overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative">

        <motion.div
          layoutId={`caterer-image-${caterer.id}`}
          className="overflow-hidden"
        >
          <Image
            src={caterer.image}
            alt={caterer.name}
            width={400}
            height={250}
            className="h-56 w-full object-cover"
          />
        </motion.div>

        {/* Favorite */}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute right-4 top-4 rounded-full bg-white/90 p-2 shadow transition hover:bg-white"
        >
          <Heart
            size={18}
            className="text-[#b91d73]"
          />
        </button>

        {/* Verified */}
        {caterer.verified && (
          <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7] px-3 py-1 text-xs font-semibold text-gray-900 shadow">
            <BadgeCheck
              size={14}
              className="text-[#b91d73]"
            />

            Verified
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Name + Rating */}
        <div className="mb-2 flex items-center justify-between">

          <h2 className="text-xl font-bold text-gray-900">
            {caterer.name}
          </h2>

          <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-sm">
            <Star
              size={14}
              className="fill-yellow-400 text-yellow-400"
            />

            {caterer.rating}
          </div>

        </div>

        {/* Location */}
        <div className="mb-3 flex items-center gap-2 text-gray-500">
          <MapPin
            size={16}
            className="text-[#b91d73]"
          />

          {caterer.city}
        </div>

        {/* Cuisine + Food Type */}
        <div className="mb-4 flex flex-wrap gap-2">

          <span className="rounded-full bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7] px-3 py-1 text-sm font-medium text-gray-900">
            {caterer.cuisine}
          </span>

          <span className="rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-[#b91d73]">
            <UtensilsCrossed
              size={14}
              className="mr-1 inline"
            />

            {caterer.foodType}
          </span>

        </div>

        {/* Price + Reviews */}
        <div className="mb-5 flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h3 className="text-2xl font-bold text-[#b91d73]">
              ₹{caterer.price}
            </h3>

            <p className="text-sm text-gray-500">
              per plate
            </p>
          </div>

          <div className="text-right text-sm text-gray-500">
            <p>{caterer.reviews} Reviews</p>
            <p>{caterer.orders}+ Orders</p>
          </div>

        </div>

        {/* View Details */}
        <button
          onClick={(e) => e.preventDefault()}
          className="w-full rounded-xl bg-gradient-to-r from-[#b91d73] to-[#ee9ca7] py-3 font-semibold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg"
        >
          View Details
        </button>

      </div>
    </Link>
  );
}