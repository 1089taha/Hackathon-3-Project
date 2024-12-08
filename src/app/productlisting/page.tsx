import BrandDetails from "@/components/BrandDetails";
import Club from "@/components/Club";
import NewCeramics from "@/components/NewCeramics";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from "react-icons/fa";
const Page = () => {
  
  return (
    <>
        {/* Desktop navbar */}
      <div className="w-full h-[132px] relative">
        <div className="hidden tablet:flex flex-col">
          <div className="h-[41px] w-full bg-[#2A254B] flex items-center justify-center gap-2 mb-10">
            <Image src="/Delivery.svg" alt="" height={16} width={16} />
            <p className="font-satochi font-normal text[16px] text-white">
              Free delivery on all orders over £50 with code easter checkout
            </p>
          </div>
          <div className="flex items-center tablet:px-5 px-20 mb-4 justify-between ">
            <h2 className="font-clash text-2xl font-normal text-[#22202E]">
              Avion
            </h2>
            <ul className="flex gap-5 font-satochi text-[#726E8D] text-[16px]">
              <li>Plant pots</li>
              <li>Ceramics</li>
              <li>Tables</li>
              <li>Chairs</li>
              <li>Crockery</li>
              <li>Tableware</li>
              <li>Cutlery</li>
            </ul>
            <div className="flex gap-4 ">
              <Image
                src="/ShoppingCart.svg"
                alt=""
                height={20}
                width={20}
                className="hidden tablet:block"
              />
              <Image
                src="/UserAvatar.svg"
                alt=""
                height={20}
                width={20}
                className="hidden tablet:block"
              />
              <Image
                src="/Search.svg"
                alt=""
                height={20}
                width={20}
                className="block tablet:hidden"
              />
              <Image
                src="/Menu.svg"
                alt=""
                height={20}
                width={20}
                className="block tablet:hidden"
              />
            </div>
          </div>
        </div>
        {/* Mobile navbar */}
        <div className="tablet:hidden bg-[#362F78] text-white text-center py-2 text-sm flex justify-between items-center px-4 tablet:px-8">
          <p>
            Free delivery on all orders over £50 with code{" "}
            <strong>easier checkout</strong>
          </p>
          <button className="text-white hover:text-gray-400">✕</button>
        </div>

        {/* Main Header */}
        <div className="tablet:hidden flex justify-between items-center py-4 px-4 tablet:px-8">
          {/* Logo */}
          <h1 className="font-bold text-2xl text-[#2A254B]">Avion</h1>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Image src="/Search.svg" alt="" width={16} height={16}/>
            <Image src="/ShoppingCart.svg" alt="" width={16} height={16}/>
            <Image src="/UserAvatar.svg" alt="" width={16} height={16}/>
            <Image src="/Menu.svg" alt="" width={16} height={16}/>
          </div>
        </div>
        {/* Product list section responsive */}
        <div className="w-full relative flex flex-col laptop-sm:flex-row">
          <Image
            src="/chairFour.svg"
            alt=""
            width={721}
            height={759}
            className="tablet:w-full"
          />
          <div className="p-5 laptop-sm:p-20 flex flex-col">
            <div className="flex flex-col">
              <h1 className="font-clash text-[34px] text-[#2A254B] ">
                The Dandy Chair
              </h1>
              <p className="font-satochi text-[24px]">£250</p>
            </div>
            <div className="flex flex-col mt-6 gap-3 laptop-sm:gap-10">
              <p className="font-clash text-[16px] text-[#2A254B]">
                Description
              </p>
              <p className="font-satochi text-[16px] text-[#2A254B]">
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The dandy chair is perfect for
                any stylish living space with beech legs and lambskin leather
                upholstery.
              </p>
              <ul className="font-satochi text-[16px] text-[#2A254B]">
                <li className="">. Premium material</li>
                <li>. Handmade upholstery</li>
                <li>. Quality timeless classic</li>
              </ul>
            </div>
            <div className="flex flex-col mt-6 gap-3 laptop-sm:gap-10">
              <p className="font-clash text-[16px] text-[#2A254B]">
                Dimensions
              </p>
              <div className="flex justify-evenly laptop-sm:justify-start gap-10">
                <p className="font-clash text-[14px] text-[#2A254B]">Height</p>
                <p className="font-clash text-[14px] text-[#2A254B]">width</p>
                <p className="font-clash text-[14px] text-[#2A254B]">Depth</p>
              </div>
              <div className="flex justify-evenly laptop-sm:justify-start gap-10">
                <p className="font-clash text-[14px] text-[#2A254B]">110cm</p>
                <p className="font-clash text-[14px] text-[#2A254B]">75cm</p>
                <p className="font-clash text-[14px] text-[#2A254B]">50cm</p>
              </div>
            </div>
            <div className="mt-9 flex flex-col items-center justify-center laptop-sm:flex-row laptop-sm:justify-start">
              <div className="flex flex-col gap-4 laptop-sm:flex-row items-center laptop-sm:gap-5">
                <p>Amount:</p>
                <div className="w-[342px] laptop-sm:w-[122px] h-[46px] bg-[#F9F9F9] flex justify-evenly items-center laptop-sm:gap-2">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
                <div>
                  <Button className="w-[342px] laptop-sm:w-[143px] h-[56px] bg-[#2A254B] text-white hover:bg-white hover:text-black laptop-sm:ml-44 rounded-none">
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewCeramics heading="You might also like"/>
        <BrandDetails/>
        <Club/>

      <footer className="w-full bg-[#2A254B] text-white">
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

      </div>
    </>
  );
};

export default Page;
