"use client";

import {
  Briefcase,
  CalendarCheck,
  Clock3,
  Users,
} from "lucide-react";

const information = [
  {
    icon: Briefcase,
    title: "Experience",
    value: "12+ Years",
  },
  {
    icon: CalendarCheck,
    title: "Events Completed",
    value: "1,250+",
  },
  {
    icon: Clock3,
    title: "Response Time",
    value: "< 30 Minutes",
  },
  {
    icon: Users,
    title: "Team Size",
    value: "50+ Professionals",
  },
];

export default function CatererInformation() {
  return (
    <section className="mx-auto max-w-7xl bg-transparent px-6 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Caterer Information
          </h2>

          <p className="mt-3 max-w-3xl text-gray-700">
            Royal Caterers has been delivering exceptional catering services
            for weddings, corporate gatherings, birthday celebrations, and
            special occasions with a focus on quality, taste, and
            professionalism.
          </p>
        </div>

        {/* Compact Information Buttons */}
        <div className="flex flex-wrap justify-between gap-4">
          {information.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex h-20 min-w-[230px] flex-1 items-center gap-4 rounded-full border border-white/60 bg-white/95 px-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7]">
                  <Icon
                    size={22}
                    className="text-[#b91d73]"
                  />
                </div>

                {/* Information */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    {item.title}
                  </p>

                  <h3 className="text-lg font-bold text-gray-900">
                    {item.value}
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