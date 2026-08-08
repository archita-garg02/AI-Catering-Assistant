"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Search,
  MapPin,
  Users,
  IndianRupee,
  SlidersHorizontal,
} from "lucide-react";

export default function SearchFilterBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-10">
      <div className="grid gap-5 lg:grid-cols-5">

        {/* Search */}
        <div className="flex items-center rounded-2xl bg-white px-4 py-4 shadow-md transition hover:shadow-lg">
          <Search
            className="mr-3 text-[#b91d73]"
            size={20}
          />

          <input
            type="text"
            placeholder="Search Caterers..."
            className="w-full bg-transparent text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>

        {/* City */}
        <div className="flex items-center rounded-2xl bg-white px-4 py-2 shadow-md transition hover:shadow-lg">
          <MapPin
            className="mr-3 text-[#b91d73]"
            size={20}
          />

          <Select>
            <SelectTrigger className="w-full border-0 bg-transparent p-0 text-gray-700 shadow-none focus:ring-0">
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>

            <SelectContent className="border border-[#ee9ca7]/40 bg-white text-gray-800 shadow-xl">
              <SelectItem value="all">
                All Cities
              </SelectItem>

              <SelectItem value="mumbai">
                Mumbai
              </SelectItem>

              <SelectItem value="pune">
                Pune
              </SelectItem>

              <SelectItem value="delhi">
                Delhi
              </SelectItem>

              <SelectItem value="bangalore">
                Bangalore
              </SelectItem>

              <SelectItem value="hyderabad">
                Hyderabad
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Guests */}
        <div className="flex items-center rounded-2xl bg-white px-4 py-4 shadow-md transition hover:shadow-lg">
          <Users
            className="mr-3 text-[#b91d73]"
            size={20}
          />

          <input
            type="number"
            placeholder="Guests"
            className="w-full bg-transparent text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Budget */}
        <div className="flex items-center rounded-2xl bg-white px-4 py-4 shadow-md transition hover:shadow-lg">
          <IndianRupee
            className="mr-3 text-[#b91d73]"
            size={20}
          />

          <input
            type="number"
            placeholder="Budget / Plate"
            className="w-full bg-transparent text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Filter Button */}
        <button
          type="button"
          className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#b91d73] to-[#ee9ca7] px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <SlidersHorizontal size={20} />

          Filters
        </button>

      </div>
    </section>
  );
}