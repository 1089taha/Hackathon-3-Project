"use client";

import React from "react";
import { Button } from "./ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ModernPagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      {/* Previous Button */}
      <Button
        className={`px-5 py-2.5 text-sm font-semibold transition-all rounded-full shadow-md ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90"
        }`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Go to previous page"
      >
        ← Prev
      </Button>

      {/* Page Numbers */}
      <div className="hidden md:flex gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`px-4 py-2 text-sm font-semibold transition-all rounded-lg ${
              currentPage === index + 1
                ? "bg-yellow-500 text-white shadow-lg transform scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <Button
        className={`px-5 py-2.5 text-sm font-semibold transition-all rounded-full shadow-md ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-green-500 to-green-700 text-white hover:opacity-90"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Go to next page"
      >
        Next →
      </Button>
    </div>
  );
};

export default ModernPagination;
