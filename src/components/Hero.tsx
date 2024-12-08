import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full flex pt-10 items-center justify-center tablet:my-[60px] relative">
      <div className="w-full laptop-sm:w-[1280px] flex relative items-stretch">
        {/* Left Section */}
        <div className="laptop-sm:w-[60%] bg-[#2A254B] flex flex-col items-center justify-center p-3 tablet:p-[60px] tablet:justify-start tablet:items-start">
          <h2 className="font-clash text-3xl font-normal text-white">
            The furniture brand for the future, with timeless designs
          </h2>
          <Button className="hidden tablet:block w-[170px] h-[56px] bg-gray-800 rounded-none tablet:mt-10 hover:bg-white hover:text-black">
            View Collection
          </Button>
          <p className="laptop-sm:w-[602px] mt-20 tablet:mt-52 font-satochi text-white text-[18px] font-normal">
            A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
          </p>
          <Button className="tablet:hidden mt-8 w-[342px] h-[56px] bg-gray-800 rounded-none hover:bg-white hover:text-black">
            View Collection
          </Button>
        </div>

        {/* Right Section */}
        <div className="hidden  laptop-sm:w-[40%] laptop-sm:flex laptop-sm:items-center laptop-sm:justify-center">
          <Image src="/chair.svg" alt="Chair" width={800} height={1000} className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

