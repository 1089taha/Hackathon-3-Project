import React from 'react'
import { Button } from './ui/button'

const Club = () => {
  return (
    <>
      <div className='w-full relative h-auto mt-20'>
        {/* Desktop/Tablet Section */}
        <div className='hidden tablet:flex w-full h-[481px] bg-[#F9F9F9] items-center justify-center'>
          <div className='w-[700px] laptop-sm:w-[1273px] h-[365px] bg-white flex flex-col items-center justify-center gap-4'>
            <h1 className='font-normal font-clash text-[36px]'>
              Join the club and get the benefits
            </h1>
            <p className='w-[470px] text-center font-satochi text-[16px] font-normal'>
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
            </p>
            <div className='flex items-center'>
              <input
                type="email"
                placeholder='your@email.com'
                className='w-[355px] h-[56px] bg-[#F9F9F9] placeholder:pl-16'
              />
              <Button className="w-[118px] h-[56px] bg-gray-800 rounded-none hover:bg-white hover:text-black">
                Sign up
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Section */}
        <div className='flex flex-col items-center justify-center gap-6 mt-10 tablet:hidden'>
          <h1 className='font-normal text-center font-clash text-[20px]'>
            Join the club and get the benefits
          </h1>
          <p className='w-[90%] text-center font-satochi text-[14px] font-normal'>
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </p>
          <div className='flex items-center'>
            <input
              type="email"
              placeholder='your@email.com'
              className='w-[224px] h-[56px] bg-[#F9F9F9] placeholder:pl-16'
            />
            <Button className="w-[118px] h-[56px] bg-gray-800 rounded-none hover:bg-white hover:text-black">
              Sign up
            </Button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Club;

