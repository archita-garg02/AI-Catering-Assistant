"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Building2,
  Cake,
  Home,
  Trees,
  ChefHat,
  Soup,
  PartyPopper,
} from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Wedding Catering",
    description:
      "Elegant catering services for weddings with customized menus and premium hospitality.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Professional catering for conferences, meetings, seminars, and corporate celebrations.",
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description:
      "Delicious menus and creative food presentations for birthdays and family celebrations.",
  },
  {
    icon: Home,
    title: "Housewarming",
    description:
      "Traditional and modern catering options to make your housewarming memorable.",
  },
  {
    icon: Trees,
    title: "Outdoor Catering",
    description:
      "Complete outdoor catering setup with quality food and experienced service staff.",
  },
  {
    icon: ChefHat,
    title: "Live Food Counters",
    description:
      "Interactive live cooking stations serving fresh dishes prepared in front of your guests.",
  },
  {
    icon: Soup,
    title: "Buffet Setup",
    description:
      "Beautiful buffet arrangements with a wide variety of vegetarian and non-vegetarian dishes.",
  },
  {
    icon: PartyPopper,
    title: "Event Management",
    description:
      "Complete event coordination including catering, service staff, and dining setup.",
  },
];

export default function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl bg-transparent px-6 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-700">
            We provide complete catering solutions for every occasion with
            exceptional food quality, professional staff, and flawless event
            execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/60 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7]">
                  <Icon
                    size={32}
                    className="text-[#b91d73]"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="leading-7 text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}