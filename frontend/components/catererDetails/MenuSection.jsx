"use client";

import { Check } from "lucide-react";

const packages = [
  {
    id: 1,
    name: "Silver Package",
    price: "₹650",
    description:
      "Perfect for small family gatherings and birthday celebrations.",
    features: [
      "15+ Menu Items",
      "2 Starters",
      "2 Main Course",
      "1 Dessert",
      "Soft Drinks",
      "Service Staff",
    ],
    featured: false,
  },
  {
    id: 2,
    name: "Gold Package",
    price: "₹850",
    description:
      "Ideal for weddings, receptions and corporate events.",
    features: [
      "25+ Menu Items",
      "4 Starters",
      "4 Main Course",
      "2 Desserts",
      "Live Counter",
      "Professional Service",
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Platinum Package",
    price: "₹1200",
    description:
      "Luxury catering experience with premium menu selection.",
    features: [
      "40+ Menu Items",
      "6 Starters",
      "6 Main Course",
      "Premium Desserts",
      "Live Food Stations",
      "Dedicated Event Manager",
    ],
    featured: false,
  },
];

export default function MenuSection() {
  return (
    <section className="mx-auto max-w-7xl bg-transparent px-6 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Menu Packages
          </h2>

          <p className="mt-4 text-gray-700">
            Choose a catering package that perfectly matches your event.
          </p>
        </div>

        {/* Packages */}
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl border bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                pkg.featured
                  ? "border-[#b91d73] ring-2 ring-[#ee9ca7]"
                  : "border-white/60"
              }`}
            >

              {/* Popular Badge */}
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#b91d73] to-[#ee9ca7] px-5 py-2 text-sm font-semibold text-white shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Package Name */}
              <h3 className="text-2xl font-bold text-gray-900">
                {pkg.name}
              </h3>

              {/* Price */}
              <p className="mt-4 text-4xl font-extrabold text-[#b91d73]">
                {pkg.price}

                <span className="text-lg font-medium text-gray-500">
                  {" "}
                  / Plate
                </span>
              </p>

              {/* Description */}
              <p className="mt-5 text-gray-600">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={18}
                      className="text-[#b91d73]"
                    />

                    <span className="text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                type="button"
                className={`mt-10 w-full rounded-xl py-3 font-semibold transition-all duration-300 ${
                  pkg.featured
                    ? "bg-gradient-to-r from-[#b91d73] to-[#ee9ca7] text-white shadow-md hover:scale-[1.02] hover:shadow-lg"
                    : "border border-[#b91d73] bg-white text-[#b91d73] hover:bg-[#fff0f2]"
                }`}
              >
                Select Package
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}