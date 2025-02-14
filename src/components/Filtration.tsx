"use client";

import React, { useState, useEffect } from "react";
import { Search as SearchIcon, Filter as FilterIcon } from "lucide-react";
import type { Product } from "@/types/types";


interface Props {
  products: Product[];
  onUpdate: (filtered: Product[]) => void;
}

const Filtration: React.FC<Props> = ({ products, onUpdate }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [priceLimit, setPriceLimit] = useState<number | "">("");

  const uniqueCategories = Array.from(
    new Set(products.map((item) => item.category?.name || ""))
  ).filter(Boolean);

  useEffect(() => {
    let filteredList = [...products];
  
    // Apply search filter
    if (query.trim()) {
      filteredList = filteredList.filter((item) =>
        [item.name, item.description]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase())
      );
    }
  
    // Apply category filter
    if (category !== "All" && category !== "") {
      filteredList = filteredList.filter((item) => item.category?.name === category);
    }
  
    // Apply price filter
    if (priceLimit !== "" && !isNaN(priceLimit)) {
      filteredList = filteredList.filter((item) => item.price <= Number(priceLimit));
    }
  
    // Update the filtered list
    onUpdate(filteredList);
  }, [query, category, priceLimit, products, onUpdate]);
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-5 bg-white shadow-md p-6 rounded-lg mb-8">
      <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-lg px-4 py-2">
        <SearchIcon className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent outline-none"
        />
      </div>

      <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-lg px-4 py-2">
        <FilterIcon className="text-gray-500 mr-2" />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-transparent outline-none"
        >
          <option value="All">All Categories</option>
          {uniqueCategories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-lg px-4 py-2">
        <span className="text-gray-500 mr-2">£</span>
        <input
          type="number"
          placeholder="Max Price"
          value={priceLimit || ""}
          onChange={(e) => setPriceLimit(e.target.value ? Number(e.target.value) : "")}
          className="w-full bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default Filtration;

// "use client";

// import React, { useState, useEffect } from "react";
// import { Search, Filter } from "lucide-react"; // Importing icons
// import type { Product } from "@/types/types"; // Adjust path to Product interface

// interface SearchAndFilterProps {
//   products: Product[];
//   onFilteredProducts: (filtered: Product[]) => void;
// }

// const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
//   products,
//   onFilteredProducts,
// }) => {
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");
//   const [maxPrice, setMaxPrice] = useState<number>(0);

//   // Extract unique categories from the products
//   const categories = Array.from(
//     new Set(products.map((product) => product.category?.name || ""))
//   ).filter((category) => category);

//   useEffect(() => {
//     let filtered = products;

//     // Filter based on search query
//     if (searchQuery) {
//       filtered = filtered.filter(
//         (product) =>
//           product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           product.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Filter based on selected category
//     if (selectedCategory !== "All") {
//       filtered = filtered.filter(
//         (product) => product.category?.name === selectedCategory
//       );
//     }

//     // Filter based on max price
//     if (maxPrice > 0) {
//       filtered = filtered.filter((product) => product.price <= maxPrice);
//     }

//     // Pass the filtered products to the parent component
//     onFilteredProducts(filtered);
//   }, [searchQuery, selectedCategory, maxPrice, products, onFilteredProducts]); // Add 'onFilteredProducts' here

//   return (
//     <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 bg-white shadow-md p-6 rounded-lg mb-8">
//       {/* Search */}
//       <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-lg px-4 py-2">
//         <Search className="text-gray-500 mr-2" />
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full bg-transparent outline-none"
//         />
//       </div>

//       {/* Category Filter */}
//       <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-lg px-4 py-2">
//         <Filter className="text-gray-500 mr-2" />
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="w-full bg-transparent outline-none"
//         >
//           <option value="All">All Categories</option>
//           {categories.map((category, index) => (
//             <option key={index} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Price Filter */}
//       <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-lg px-4 py-2">
//         <span className="text-gray-500 mr-2">£</span>
//         <input
//           type="number"
//           placeholder="Max Price"
//           value={maxPrice || ""}
//           onChange={(e) => setMaxPrice(Number(e.target.value))}
//           className="w-full bg-transparent outline-none"
//         />
//       </div>
//     </div>
//   );
// };

// export default SearchAndFilter;