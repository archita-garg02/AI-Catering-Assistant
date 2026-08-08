"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const menuData = {
  Veg: {
    sections: [
      {
        title: "Starters",
        items: [
          "Paneer Tikka",
          "Hara Bhara Kebab",
          "Veg Spring Roll",
          "Crispy Corn",
          "Veg Manchurian",
          "Cheese Balls",
        ],
      },
      {
        title: "Main Course",
        items: [
          "Paneer Butter Masala",
          "Dal Makhani",
          "Mix Veg",
          "Veg Biryani",
          "Jeera Rice",
          "Butter Naan",
          "Tandoori Roti",
        ],
      },
      {
        title: "Desserts",
        items: [
          "Gulab Jamun",
          "Rasmalai",
          "Ice Cream",
          "Fruit Custard",
        ],
      },
    ],
  },

  "Non-Veg": {
    sections: [
      {
        title: "Starters",
        items: [
          "Chicken Tikka",
          "Chicken Lollipop",
          "Fish Fry",
          "Seekh Kebab",
        ],
      },
      {
        title: "Main Course",
        items: [
          "Butter Chicken",
          "Chicken Curry",
          "Chicken Biryani",
          "Mutton Rogan Josh",
          "Steamed Rice",
          "Butter Naan",
        ],
      },
      {
        title: "Desserts",
        items: [
          "Chocolate Brownie",
          "Ice Cream",
          "Fruit Salad",
        ],
      },
    ],
  },

  Cuisine: {
    sections: [
      {
        title: "Indian",
        items: [
          "Butter Chicken",
          "Paneer Butter Masala",
          "Dal Makhani",
          "Veg Biryani",
        ],
      },
      {
        title: "Chinese",
        items: [
          "Hakka Noodles",
          "Fried Rice",
          "Manchurian",
          "Spring Rolls",
        ],
      },
      {
        title: "Italian",
        items: [
          "White Sauce Pasta",
          "Red Sauce Pasta",
          "Garlic Bread",
          "Lasagna",
        ],
      },
      {
        title: "Continental",
        items: [
          "Grilled Chicken",
          "Herb Rice",
          "Roasted Vegetables",
          "Mashed Potato",
        ],
      },
    ],
  },

  Beverages: {
    sections: [
      {
        title: "Cold Beverages",
        items: [
          "Fresh Lime",
          "Mojito",
          "Cold Coffee",
          "Soft Drinks",
          "Fresh Juice",
          "Mocktails",
        ],
      },
    ],
  },
};

export default function MenuItemsSection() {
  const [activeTab, setActiveTab] = useState("Veg");

  const tabStyles = {
    Veg: {
      button:
        "bg-gradient-to-r from-[#24FE41] to-[#FDFC47] text-black",
      card:
        "bg-gradient-to-r from-[#24FE41] to-[#FDFC47]",
      heading: "text-green-900",
      text: "text-gray-900",
      bullet: "bg-green-700",
    },

    "Non-Veg": {
      button:
        "bg-gradient-to-r from-[#190A05] to-[#870000] text-white",
      card:
        "bg-gradient-to-br from-[#190A05] via-[#4b0d0d] to-[#870000]",
      heading: "text-orange-300",
      text: "text-white",
      bullet: "bg-orange-400",
    },

    Cuisine: {
      button:
        "bg-gradient-to-r from-[#b6fbff] to-[#83a4d4] text-black",
      card:
        "bg-gradient-to-r from-[#b6fbff] to-[#83a4d4]",
      heading: "text-blue-900",
      text: "text-gray-900",
      bullet: "bg-blue-700",
    },

    Beverages: {
      button:
        "bg-gradient-to-r from-[#33001b] to-[#ff0084] text-white",
      card:
        "bg-gradient-to-r from-[#33001b] to-[#ff0084]",
      heading: "text-pink-100",
      text: "text-white",
      bullet: "bg-pink-300",
    },
  };

  return (
    <section className="mx-auto max-w-7xl bg-transparent px-6 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-white">
            Our Menu
          </h2>

          <p className="mt-3 text-red-100">
            Explore our delicious menu specially curated for every occasion.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {Object.keys(menuData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-7 py-3 font-semibold shadow-lg transition-all duration-300 hover:scale-105 ${
                activeTab === tab
                  ? tabStyles[tab].button
                  : "bg-white text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {menuData[activeTab].sections.map((section) => (
            <div
              key={section.title}
              className={`rounded-3xl p-8 shadow-xl ${tabStyles[activeTab].card}`}
            >
              <h3
                className={`mb-6 text-3xl font-bold ${tabStyles[activeTab].heading}`}
              >
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${tabStyles[activeTab].bullet}`}
                    />

                    <span className={tabStyles[activeTab].text}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}