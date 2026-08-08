"use client";

import { useState } from "react";

import Header from "@/components/catererListing/Header";
import WelcomeSection from "@/components/catererListing/WelcomeSection";
import SearchFilterBar from "@/components/catererListing/SearchFilterBar";
import FilterSidebar from "@/components/catererListing/FilterSidebar";
import CatererGrid from "@/components/catererListing/CatererGrid";
import AIAssistant from "@/components/catererDetails/AIAssistant";

import caterers from "@/data/caterers";

export default function CatererListingPage() {
  const [filteredCaterers, setFilteredCaterers] =
    useState(caterers);

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7]">

      {/* Page Content */}
      <div className="w-full pr-0 lg:pr-[380px]">

        <Header />

        <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8">

          {/* Welcome */}
          <WelcomeSection />

          {/* Search */}
          <SearchFilterBar
            caterers={caterers}
            setFilteredCaterers={setFilteredCaterers}
          />

          {/* Main Listing Area */}
          <section className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-12">

            {/* Sidebar */}
            <aside className="xl:col-span-3">
              <FilterSidebar
                caterers={caterers}
                setFilteredCaterers={setFilteredCaterers}
              />
            </aside>

            {/* Caterer Grid */}
            <div className="min-w-0 xl:col-span-9">
              <CatererGrid
                caterers={filteredCaterers}
              />
            </div>

          </section>

        </div>

      </div>

      {/* Fixed AI Assistant */}
      <AIAssistant />

    </main>
  );
}