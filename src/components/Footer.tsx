// import React from "react";
// import { Button } from "./ui/button";
// import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaPinterest, FaSkype } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-[#2A254B] text-white">
//       {/* Desktop and Tablet View */}
//       <div className="hidden w-full tablet:grid tablet:grid-cols-4 gap-4 px-[82px] py-[58px]">
//         {/* Menu Section */}
//         <div>
//           <h1 className="font-clash text-[16px] mb-2">Menu</h1>
//           <ul className="font-satochi text-[14px] space-y-1">
//             <li>New arrivals</li>
//             <li>Best sellers</li>
//             <li>Recently viewed</li>
//             <li>Popular this week</li>
//             <li>All products</li>
//           </ul>
//         </div>
//         {/* Categories Section */}
//         <div>
//           <h1 className="font-clash text-[16px] mb-2">Categories</h1>
//           <ul className="font-satochi text-[14px] space-y-1">
//             <li>Crockery</li>
//             <li>Furniture</li>
//             <li>Homeware</li>
//             <li>Plant pots</li>
//             <li>Chairs</li>
//           </ul>
//         </div>
//         {/* Our Company Section */}
//         <div>
//           <h1 className="font-clash text-[16px] mb-2">Our Company</h1>
//           <ul className="font-satochi text-[14px] space-y-1">
//             <li>About us</li>
//             <li>Vacancies</li>
//             <li>Contact us</li>
//             <li>Privacy</li>
//             <li>Returns policy</li>
//           </ul>
//         </div>
//         {/* Mailing List Section */}
//         <div>
//           <h1 className="font-clash text-[16px] mb-2">Join our mailing list</h1>
//           <div className="flex space-x-2">
//             <input
//               type="email"
//               placeholder="your@email.com"
//               className="w-[509px] h-[56px] bg-[#FFFFFF26] text-black pl-4 placeholder-gray-500 focus:outline-none"
//             />
//             <Button className="w-[118px] h-[56px] bg-white text-black rounded-none hover:bg-bg-[#2A254B] hover:text-white">
//             Sign up
//           </Button>
//           </div>
//         </div>
//       </div>
//       {/* Mobile View */}
//       <div className="tablet:hidden mt-6 grid grid-cols-2 p-4 items-center gap-4 relative">
//         {/* Menu Section */}
//         <div>
//           <h1 className="font-clash text-[16px] mb-4">Menu</h1>
//           <ul className="font-satochi text-[14px] space-y-2">
//             <li>New arrivals</li>
//             <li>Best sellers</li>
//             <li>Recently viewed</li>
//             <li>Popular this week</li>
//             <li>All products</li>
//           </ul>
//         </div>
//         {/* Categories Section */}
//         <div>
//           <h1 className="font-clash text-[16px] mb-4">Categories</h1>
//           <ul className="font-satochi text-[14px] space-y-2">
//             <li>Crockery</li>
//             <li>Furniture</li>
//             <li>Homeware</li>
//             <li>Plant pots</li>
//             <li>Chairs</li>
//           </ul>
//         </div>
//         {/* Our Company Section */}
//         <div>
//           <h1 className="font-clash text-[16px] mb-4">Our Company</h1>
//           <ul className="font-satochi text-[14px] space-y-2">
//             <li>About us</li>
//             <li>Vacancies</li>
//             <li>Contact us</li>
//             <li>Privacy</li>
//             <li>Returns policy</li>
//           </ul>
//         </div>
//       </div>


//       {/* Mailing List Section */}
//       <div className="block tablet:hidden">
//           <h1 className="font-clash text-[16px] mb-4 m-4">Join our mailing list</h1>
//           <div className="flex items-center">
//             <input
//               type="email"
//               placeholder="your@email.com"
//               className="w-[224px] h-[56px] bg-[#FFFFFF26] text-black ml-4 placeholder:pl-5"
//             />
//             <button className="w-[118px] h-[56px] bg-white text-black hover:bg-gray-300">
//               Sign up
//             </button>
//           </div>
//         </div>
//         <hr className="bg-gray-100 w-full mt-2 text-center" />
//         <div className="text-center bg-[#201B37] justify-between laptop-sm:flex px-[82px] mt-2 py-3 ">
//         <p className="font-satochi text-[14px] ">Copyright © 2022 Avion LTD</p>
//         <div className="hidden tablet:flex gap-4">
//           <FaFacebook className="h-6 w-6"/>
//           <FaInstagram className="h-6 w-6"/>
//           <FaLinkedin className="h-6 w-6"/>
//           <FaPinterest className="h-6 w-6"/>
//           <FaSkype className="h-6 w-6"/>
//           <FaTwitter className="h-6 w-6"/>
//         </div>
//       </div>
      
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaPinterest, FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2A254B] text-white overflow-hidden">
      {/* Desktop and Tablet View */}
      <div className="hidden tablet:grid tablet:grid-cols-4 gap-4 px-6 md:px-12 lg:px-[82px] py-[58px]">
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
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full md:w-[400px] lg:w-[509px] h-[56px] bg-[#FFFFFF26] text-black px-4 placeholder-gray-500 focus:outline-none"
            />
            <button className="w-full md:w-[118px] h-[56px] bg-white text-black rounded-none hover:bg-[#2A254B] hover:text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="tablet:hidden mt-6 grid grid-cols-2 px-4 gap-4">
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
        <div className="col-span-2">
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
       <div className="block tablet:hidden px-4">
        <h1 className="font-clash text-[16px] mb-4">Join our mailing list</h1>
        <div className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full h-[48px] bg-[#FFFFFF26] text-black px-4 placeholder-gray-500 focus:outline-none rounded-md"
          />
          <button className="w-[118px] h-[48px] bg-white text-black rounded-md hover:bg-gray-300">
            Sign up
          </button>
        </div>
      </div>
      <hr className="bg-gray-100 w-full mt-4" />
      <div className="text-center bg-[#201B37] justify-between laptop-sm:flex px-[82px] mt-2 py-3">
        <p className="font-satochi text-[14px]">Copyright © 2022 Avion LTD</p>
        <div className="hidden laptop-sm:flex gap-4">
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
