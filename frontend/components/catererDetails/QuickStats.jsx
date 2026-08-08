"use client";

import {
  Star,
  UtensilsCrossed,
  Users,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
  },
  {
    icon: UtensilsCrossed,
    value: "150+",
    label: "Menu Items",
  },
  {
    icon: Users,
    value: "25K+",
    label: "Guests Served",
  },
  {
    icon: Trophy,
    value: "98%",
    label: "Customer Satisfaction",
  },
];

export default function QuickStats() {
  return (
    <section className="mx-auto max-w-7xl bg-transparent px-6 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Quick Stats
          </h2>

          <p className="mt-3 text-gray-700">
            A quick overview of our catering performance and achievements.
          </p>
        </div>

        {/* Compact Stats */}
        <div className="flex flex-wrap justify-between gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group flex h-20 min-w-[230px] flex-1 items-center gap-4 rounded-full border border-white/60 bg-white/95 px-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#b91d73] to-[#ee9ca7]">
                  <Icon
                    size={22}
                    className="text-white"
                  />
                </div>

                {/* Stat Information */}
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-gray-500">
                    {stat.label}
                  </p>

                  <h3 className="text-xl font-bold text-[#b91d73]">
                    {stat.value}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}