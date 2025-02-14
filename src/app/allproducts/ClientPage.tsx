"use client";
import { useState } from "react";
import ModernPagination from "@/components/ModernPagination";
import Link from "next/link";
import Filtration from "@/components/Filtration";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { addToCart } from "../actions/CartActions";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import type { Product } from "@/types/types";
import Image from "next/image";

const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, product: Product) => {
  e.stopPropagation();

  const productWithId = {
    ...product,
    id: product.id || crypto.randomUUID()  // Use existing id or generate new one
  };

  addToCart(productWithId);

  Swal.fire({
    position: "center",
    icon: "success",
    title: `${product.name} added to cart`,
    showConfirmButton: false,
    timer: 1500,
  });
};

const ClientPage = ({ products }: { products: Product[] }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="mb-5">
        {/* Banner Section */}
        <div className="relative w-full">
          <Image 
            src="/Banner.svg" 
            alt="Banner" 
            width={1920}
            height={300}
            className="w-full h-auto" 
          />
        </div>

        {/* Filter Section */}
        <section className="my-5">
          <Filtration products={products} onUpdate={setFilteredProducts} />
        </section>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-lg"
              >
                <Image
                  src={product.image.asset.url}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <h4 className="text-lg font-medium text-gray-900">{product.name}</h4>
                <p className="text-md text-gray-700">£{product.price}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {product.description.split(" ").slice(0, 6).join(" ")}...
                </p>
                <div className="flex gap-2 w-full">
                  {/* View Details Button */}
                  <Link href={`/product/${product.slug.current}`} className="w-full">
                    <Button className="w-full bg-[#2A254B] text-white py-2 px-4 rounded-lg ">
                      View Details
                    </Button>
                  </Link>

                  {/* Add to Cart Button */}
                  <Button
                    className="w-full bg-[#2A254B] text-white py-2 px-4 rounded-lg "
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-xl">No products found.</p>
          )}
        </div>

        {/* Pagination */}
        <section className="my-10">
          <ModernPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ClientPage;
