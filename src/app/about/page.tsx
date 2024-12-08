"use client"
import BrandDetails from '@/components/BrandDetails'
import Club from '@/components/Club'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa'
import React, { useState } from 'react';

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
     <>
     <div>
<header className="w-full h-auto relative">
      <div className="flex flex-col">
        {/* Announcement Bar */}
        <div className="h-[50px] tablet:h-[41px] w-full bg-[#2A254B] flex items-center justify-center gap-2 mb-5 tablet:mb-10">
          <Image src="/Delivery.svg" alt="Delivery Icon" height={16} width={16} />
          <p className="font-satochi font-normal text-[16px] text-white">
            Free delivery on all orders over £50 with code easter checkout
          </p>
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between px-4 laptop-sm:px-10">
          {/* Logo */}
          <h2 className="font-clash text-2xl font-normal text-[#22202E]">Avion</h2>

          {/* Navigation and Icons */}
          <div className="flex gap-4 items-center">
            {/* Desktop Links */}
            <ul className="hidden tablet:flex gap-8 text-[#726E8D]">
            <Link href="/about">
              <li className="hover:text-[#2A254B]">
                About Us
              </li>
              </Link>
              
                <Link href="/about">
                <li className="hover:text-[#2A254B]">Contact us</li>
                </Link>
                
              
                <Link href="/about">
                <li className="hover:text-[#2A254B]">Blog </li>
                </Link>
             
            </ul>

            {/* Icons */}
            <Image src="/Search.svg" alt="Search Icon" width={20} height={20} className="hidden tablet:block" />
            <Image src="/ShoppingCart.svg" alt="Shopping Cart Icon" width={20} height={20} className="hidden tablet:block" />
            <Image src="/UserAvatar.svg" alt="User Avatar Icon" width={20} height={20} className="hidden tablet:block" />
            <Image src="/Search.svg" alt="Search Icon" width={20} height={20} className="block tablet:hidden" />

            {/* Mobile Menu Icon */}
            <Image
              src="/Menu.svg"
              alt="Menu Icon"
              width={20}
              height={20}
              className="block tablet:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>

        {/* Dropdown Menu (Mobile) */}
        {menuOpen && (
          <div className="absolute top-[130px] left-0 w-full bg-white shadow-lg z-50">
            <ul className="flex flex-col gap-3 px-5 py-4 font-satochi text-[#22202E] text-[16px]">
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/about">About us</Link>
              </li>
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/products">All Products</Link>
              </li>
            </ul>
          </div>
        )}

        {/* Sub-navbar */}
        <div className="h-16 w-full flex items-center justify-center px-5 laptop-sm:px-20 mt-4 bg-[#F9F9F9]">
        <Link href="/allproducts">
          <ul className="flex gap-5 font-satochi text-[#726E8D] text-[16px]">
            <li className="hover:text-[#22202E]">
              All Products
            </li>
             
            <li className="hover:text-[#22202E]">
              Plant pots
            </li>
            <li className="hover:text-[#22202E]">
              Ceramics
            </li>
            <li className="hover:text-[#22202E]">
              Tables
            </li>
            <li className="hidden tablet:block hover:text-[#22202E]">
              Chairs
            </li>
            <li className="hidden tablet:block hover:text-[#22202E]">
              Crockery
            </li>
            <li className="hidden tablet:block hover:text-[#22202E]">
              Tableware
            </li>
            <li className="hidden tablet:block hover:text-[#22202E]">
              Cutlery
            </li>
          </ul>
          </Link>
        </div>
      </div>
    </header>

        <main>
         <div className='w-full h-auto laptop-sm:h-[277px] flex flex-col laptop-sm:flex-row items-center justify-evenly p-10 laptop-sm:px-32 laptop-sm:py-[88px]'>
            <h1 className='font-clash font-normal text-3xl leading-[44px] tablet:text-[36px]'>A brand built on the love of craftmanship, quality and outstanding customer service</h1>
            <Button className='w-[342px] h-[56px] text-[#2A254B]  laptop-sm:w-[192px] bg-[#F9F9F9] hover:bg-[#22202E] hover:text-white mt-10 laptop-sm:mt-0'>View Our Product</Button>
         </div>

         <div className='relative w-full h-auto flex flex-col laptop-sm:flex-row items-center justify-evenly gap-5 p-5 laptop-sm:px-20 laptop-sm:py-16 '>
            <div className='w-[342px] h-[281px] tablet:w-[643px] flex flex-col items-center justify-center tablet:h-[478px]   tablet:items-start tablet:justify-start bg-[#2A254B] p-8 tablet:p-16 text-white'>
               <div className='flex flex-col gap-6'>
               <h5 className='font-clash text-[20px] tablet:text-[32px]'>It started with a small idea</h5>
               <p className='font-satochi text-[16px] '>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
               </div>
               <Button className='w-[278px] h-[56px] text-[#2A254B] rounded-none laptop-sm:w-[192px] bg-[#726E8D] hover:bg-[#22202E] hover:text-white mt-10 tablet:mt-40'>View Our Product</Button>
            </div>
            <div>
            <Image
              src="/ImageTwo.svg"
              alt=""
              width={643}
              height={281}
              className="w-full h-auto"
            />
            </div>
         </div>

         <div className='w-full relative h-auto mt-5 tablet:mt-10'>
        <div className='flex flex-col items-center justify-center laptop-sm:flex-row  laptop-sm:justify-start'>
        <Image src="/imageThree.svg" alt='' width={720} height={603} className='hidden laptop-sm:block'/>
        <Image src="/imageThree.svg" alt='' width={720} height={603} className='laptop-sm:hidden'/>
            <div className='p-4 tablet:p-8 laptop-sm:pl-[86px] laptop-sm:py-10 bg-[#F9F9F9] laptop-sm:w-[720px] laptop-sm:h-[603px]'>
                <h1 className='font-clash font-normal text-[20px] tablet:text-[24px] mb-4'>Our service isn&apos;t just personal, it&apos;s actually hyper personally exquisite</h1>
                <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /> <br /> <br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                <Button className="hidden laptop-sm:block w-[150px] mt-56 h-[56px] bg-white rounded-none  text-[#2A254B] hover:bg-[#2A254B] hover:text-white">
              Get in touch
            </Button>
            <Button className='laptop-sm:hidden w-[342px] tablet:w-[170px] h-[56px] mt-8 bg-white text-[#2A254B] hover:text-white'>Get in touch</Button>
            </div>
        </div>
        </div>
        <BrandDetails/>
        <Club/>
        <footer className="w-full bg-[#2A254B] text-white mt-10 tablet:mt-0">
      {/* Grid Layout for all screen sizes */}
      <div className="grid grid-cols-2 gap-6 px-6 py-8 tablet:grid-cols-2 laptop-sm:grid-cols-4 laptop-sm:px-16 laptop-sm:py-12">
        {/* Avion Details */}
        <div>
          <h1 className="font-clash text-[18px] tablet:text-[36px] mb-2">Avion</h1>
          <p className="font-satochi text-[14px] leading-6">21 New York Street</p>
          <p className="font-satochi text-[14px] leading-6">New York City</p>
          <p className="font-satochi text-[14px] leading-6">United States of America</p>
          <p className="font-satochi text-[14px] leading-6">432 34</p>
        </div>

        {/* Social Links */}
        <div>
          <h1 className="font-clash text-[16px] mb-2">Social Links</h1>
          <div className="flex flex-col laptop-sm:flex-row gap-4">
            <div className="flex gap-4">
            <FaLinkedin className="h-6 w-6 cursor-pointer hover:text-gray-300" />
            <FaFacebook className="h-6 w-6 cursor-pointer hover:text-gray-300" />
            <FaInstagram className="h-6 w-6 cursor-pointer hover:text-gray-300" />
            </div>
             <div className="flex gap-4">
             <FaTwitter className="h-6 w-6 cursor-pointer hover:text-gray-300" />
            <FaPinterest className="h-6 w-6 cursor-pointer hover:text-gray-300" />
            <FaSkype className="h-6 w-6 cursor-pointer hover:text-gray-300" />
             </div>
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h1 className="font-clash text-[16px] mb-2">Menu</h1>
          <ul className="font-satochi text-[14px] space-y-1">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h1 className="font-clash text-[16px] mb-2">Categories</h1>
          <ul className="font-satochi text-[14px] space-y-1">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 px-6 flex flex-col items-center laptop-sm:flex-row laptop-sm:justify-between laptop-sm:px-16">
        <p className="font-satochi text-[14px] text-center">
          Copyright © 2022 Avion LTD
        </p>
      </div>
    </footer>

        </main>



     </div>
     </>
  )
}

export default Page
