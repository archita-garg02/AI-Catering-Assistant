"use client";

import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Premium quality ingredients sourced fresh every day.",
  "Customized menus for weddings, corporate events, and parties.",
  "Professional chefs and experienced serving staff.",
  "Timely delivery and hassle-free event management.",
  "Vegetarian, Non-Vegetarian & Multi-Cuisine specialists.",
  "Complete catering setup with live food counters.",
];

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl bg-transparent px-6 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            About Royal Caterers
          </h2>

          {/* About Description */}
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Royal Caterers has built a reputation for delivering exceptional
            catering experiences for over a decade. From intimate family
            celebrations to grand weddings and large-scale corporate events,
            our dedicated team ensures every dish is prepared with care,
            creativity, and the finest ingredients.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-700">
            Our goal is to provide memorable dining experiences that delight
            every guest. We combine authentic flavors, elegant presentation,
            and outstanding hospitality to make every event truly special.
          </p>
        </div>

        {/* Highlights */}
        <div>
          <h3 className="mb-6 text-2xl font-semibold text-gray-900">
            Why Choose Us?
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-xl border border-white/60 bg-white/95 p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#ee9ca7] hover:shadow-xl"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7]">
                  <CheckCircle2
                    size={22}
                    className="text-[#b91d73]"
                  />
                </div>

                <p className="pt-1 text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}