"use client";

import { useState } from "react";
import {
  IndianRupee,
  RotateCcw,
} from "lucide-react";

export default function FilterSidebar() {
  const [budget, setBudget] = useState(1500);

  return (
    <aside className="rounded-3xl bg-white p-6 shadow-lg">

      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Filters
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Refine your caterer search
        </p>
      </div>

      {/* Budget */}
      <div className="mb-8">

        <div className="mb-3 flex items-center justify-between">

          <div className="flex items-center gap-2 text-gray-800">
            <IndianRupee
              size={18}
              className="text-[#b91d73]"
            />

            <span className="font-medium">
              Budget / Plate
            </span>
          </div>

          <span className="rounded-full bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7] px-3 py-1 text-sm font-semibold text-gray-900">
            ₹{budget}
          </span>

        </div>

        <input
          type="range"
          min="200"
          max="3000"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full accent-[#b91d73]"
        />

        <div className="mt-2 flex justify-between text-xs text-gray-400">
          <span>₹200</span>
          <span>₹3000</span>
        </div>

      </div>

      {/* Cuisine */}
      <div className="mb-8">

        <h3 className="mb-4 font-semibold text-gray-900">
          Cuisine
        </h3>

        <div className="space-y-3">

          {[
            "Indian",
            "Chinese",
            "Italian",
            "South Indian",
            "North Indian",
            "Continental",
            "Mexican",
            "Thai",
          ].map((cuisine) => (
            <label
              key={cuisine}
              className="flex cursor-pointer items-center gap-3 text-gray-700 transition hover:text-[#b91d73]"
            >
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#b91d73]"
              />

              {cuisine}
            </label>
          ))}

        </div>

      </div>

      {/* Food Type */}
      <div className="mb-8">

        <h3 className="mb-4 font-semibold text-gray-900">
          Food Type
        </h3>

        <div className="space-y-3">

          {["Veg", "Non-Veg", "Both"].map((type) => (
            <label
              key={type}
              className="flex cursor-pointer items-center gap-3 text-gray-700 transition hover:text-[#b91d73]"
            >
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#b91d73]"
              />

              {type}
            </label>
          ))}

        </div>

      </div>

      {/* Reset */}
      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#b91d73] to-[#ee9ca7] py-3 font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg"
      >
        <RotateCcw size={18} />

        Reset Filters
      </button>

    </aside>
  );
}