import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const GetInTouch = () => {
  return (
    <>
      <div className='w-full relative h-auto mt-20'>
        <div className='flex flex-col items-center justify-center laptop-sm:flex-row  laptop-sm:justify-start'>
            <div className='p-4 tablet:p-8 laptop-sm:pl-[86px] laptop-sm:py-10 laptop-sm:w-[720px] laptop-sm:h-[603px]'>
                <h1 className='font-clash font-normal text-[20px] tablet:text-[24px] mb-4'>From a studio in London to a global brand with over 400 outlets</h1>
                <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /> <br /> <br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                <Button className="hidden laptop-sm:block w-[150px] mt-56 h-[56px] bg-white rounded-none  text-[#2A254B] hover:bg-[#2A254B] hover:text-white">
              Sign up
            </Button>
            </div>
            <Button className='laptop-sm:hidden w-[342px] tablet:w-[170px] h-[56px] mt-8 bg-white text-[#2A254B] hover:text-white'>Get in touch</Button>
            <Image src="/GetInTouch.svg" alt='' width={720} height={603} className='hidden laptop-sm:block'/>
            <Image src="/GetInTouch.svg" alt='' width={720} height={603} className='laptop-sm:hidden mt-20'/>
            
        </div>


      </div>
    </>
  )
}

export default GetInTouch
