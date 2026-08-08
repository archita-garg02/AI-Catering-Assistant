"use client";

import { useState } from "react";
import CatererCard from "./CatererCard";
import Pagination from "./Pagination";

export default function CatererGrid({ caterers }) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentItems = caterers.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(
    caterers.length / itemsPerPage
  );

  return (
    <>
      {/* Caterer Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((caterer) => (
          <CatererCard
            key={caterer.id}
            caterer={caterer}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}