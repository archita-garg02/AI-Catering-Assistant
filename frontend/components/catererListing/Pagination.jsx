"use client";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">

      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-xl bg-white px-5 py-3 font-medium text-gray-700 shadow-md transition hover:bg-[#fff0f2] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`h-12 w-12 rounded-xl font-semibold shadow-sm transition ${
            currentPage === index + 1
              ? "bg-gradient-to-r from-[#b91d73] to-[#ee9ca7] text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-[#fff0f2]"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-xl bg-white px-5 py-3 font-medium text-gray-700 shadow-md transition hover:bg-[#fff0f2] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>

    </div>
  );
}