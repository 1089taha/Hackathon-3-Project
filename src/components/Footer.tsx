import React from "react";
import { Button } from "./ui/button";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaPinterest, FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2A254B] text-white">
      {/* Desktop and Tablet View */}
      <div className="hidden w-full tablet:grid tablet:grid-cols-4 gap-4 px-[82px] py-[58px]">
        {/* Menu Section */}
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
        {/* Categories Section */}
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
        {/* Our Company Section */}
        <div>
          <h1 className="font-clash text-[16px] mb-2">Our Company</h1>
          <ul className="font-satochi text-[14px] space-y-1">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>
        {/* Mailing List Section */}
        <div>
          <h1 className="font-clash text-[16px] mb-2">Join our mailing list</h1>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-[509px] h-[56px] bg-[#FFFFFF26] text-black pl-4 placeholder-gray-500 focus:outline-none"
            />
            <Button className="w-[118px] h-[56px] bg-white text-black rounded-none hover:bg-bg-[#2A254B] hover:text-white">
            Sign up
          </Button>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="tablet:hidden mt-6 grid grid-cols-2 p-4 items-center gap-4 relative">
        {/* Menu Section */}
        <div>
          <h1 className="font-clash text-[16px] mb-4">Menu</h1>
          <ul className="font-satochi text-[14px] space-y-2">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>
        {/* Categories Section */}
        <div>
          <h1 className="font-clash text-[16px] mb-4">Categories</h1>
          <ul className="font-satochi text-[14px] space-y-2">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
          </ul>
        </div>
        {/* Our Company Section */}
        <div>
          <h1 className="font-clash text-[16px] mb-4">Our Company</h1>
          <ul className="font-satochi text-[14px] space-y-2">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>
      </div>


      {/* Mailing List Section */}
      <div className="block tablet:hidden">
          <h1 className="font-clash text-[16px] mb-4 m-4">Join our mailing list</h1>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-[224px] h-[56px] bg-[#FFFFFF26] text-black ml-4 placeholder:pl-5"
            />
            <button className="w-[118px] h-[56px] bg-white text-black hover:bg-gray-300">
              Sign up
            </button>
          </div>
        </div>
        <hr className="bg-gray-100 w-full mt-2 text-center" />
        <div className="text-center bg-[#201B37] justify-between laptop-sm:flex px-[82px] mt-2 py-3 ">
        <p className="font-satochi text-[14px] ">Copyright © 2022 Avion LTD</p>
        <div className="hidden tablet:flex gap-4">
          <FaFacebook className="h-6 w-6"/>
          <FaInstagram className="h-6 w-6"/>
          <FaLinkedin className="h-6 w-6"/>
          <FaPinterest className="h-6 w-6"/>
          <FaSkype className="h-6 w-6"/>
          <FaTwitter className="h-6 w-6"/>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
