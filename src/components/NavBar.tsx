"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div className="w-full h-[132px] p-7 relative bg-white shadow-md">
        <div className="flex items-center justify-between">
          <Image src="/Search.svg" alt="Search Icon" width={20} height={20} className="hidden tablet:block" />
          <h2 className="font-clash text-2xl font-bold text-[#22202E]">Avion</h2>
          <div className="flex gap-4">
            <Link href="/Cart"><Image src="/ShoppingCart.svg" alt="Shopping Cart" height={20} width={20} className="hidden tablet:block" /></Link>
            <Image src="/UserAvatar.svg" alt="User Avatar" height={20} width={20} className="hidden tablet:block" />
            <Image src="/Search.svg" alt="Search Icon" height={20} width={20} className="block tablet:hidden" />
            {/* Menu icon for mobile */}
            <Image
              src="/Menu.svg"
              alt="Menu Icon"
              height={20}
              width={20}
              className="block tablet:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
        <hr className="mt-4 border-gray-300" />

        {/* Dropdown menu for mobile */}
        {menuOpen && (
          <div className="absolute top-[132px] left-0 w-full bg-white shadow-lg z-50">
            <ul className="flex flex-col gap-3 px-5 py-4 font-satochi text-[#22202E] text-[16px]">
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/productlisting">Product Listing</Link>
              </li>
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/shoppingcart">Shopping Cart</Link>
              </li>
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/allproducts">All Products</Link>
              </li>
              
            </ul>
          </div>
        )}

        {/* Tablet/Desktop navigation */}
        <div className="hidden tablet:flex tablet:items-center tablet:justify-center mt-5">
        <Link href="allproducts">
          <ul className="flex gap-5 font-satochi text-[#726E8D] text-[16px]">
            <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tables</li>
            <li>Chairs</li>
            <li>Crockery</li>
            <li>Tableware</li>
            <li>Cutlery</li>
            
          </ul>
          </Link>
        </div>
        {/* <hr className="mt-4 border-gray-300 hidden tablet:block" /> */}
        <div className="hidden tablet:flex tablet:items-center tablet:justify-center mt-10">
          <ul className="flex gap-5 font-satochi text-[#726E8D] text-[16px]">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/productlisting">
              <li>Product Listing</li>
            </Link>
            <Link href="/shoppingcart">
              <li>Shopping Cart</li>
            </Link>
            <Link href="/allproducts">
              <li>All Products</li>
            </Link>
            
               
              
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
