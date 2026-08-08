"use client";

import {
  UtensilsCrossed,
  Building2,
  Cake,
  Heart,
  PartyPopper,
  Soup,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "All",
    icon: UtensilsCrossed,
    active: true,
  },
  {
    id: 2,
    name: "Wedding",
    icon: Heart,
  },
  {
    id: 3,
    name: "Birthday",
    icon: Cake,
  },
  {
    id: 4,
    name: "Corporate",
    icon: Building2,
  },
  {
    id: 5,
    name: "Party",
    icon: PartyPopper,
  },
  {
    id: 6,
    name: "Traditional",
    icon: Soup,
  },
];

export default function WelcomeSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to CaterHUB
        </h1>

        <p className="mt-3 text-gray-700">
          Browse premium caterers for every celebration.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.id}
              className={`flex items-center gap-3 rounded-2xl px-6 py-4 transition-all duration-300 ${
                category.active
                  ? "bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7] text-gray-900 shadow-lg"
                  : "border border-white/60 bg-white/60 text-gray-800 shadow-sm backdrop-blur-sm hover:bg-white"
              }`}
            >
              <Icon
                size={20}
                className={
                  category.active
                    ? "text-[#b91d73]"
                    : "text-[#b91d73]"
                }
              />

              <span className="font-medium">
                {category.name}
              </span>
            </button>
          );
        })}
      </div>

    </section>
  );
}