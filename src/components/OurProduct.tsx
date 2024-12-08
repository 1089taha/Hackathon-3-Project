import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const OurProduct = () => {
  return (
    <>
      <div className='relative w-full mt-20 p-4 tablet:px-[86px]'>
        <h1 className='font-clash font-normal text-[20px] tablet:text-[32px] text-[#2A254B]'>
          Our popular products
        </h1>
        <div className='flex flex-col items-center justify-center'>

          {/* Desktop Section */}
          <div className='hidden laptop-sm:flex mt-10 relative'>
            <div className='w-[630px] h-[462px] flex flex-col gap-4'>
              <Image src="LargeSofa.svg" alt='' width={630} height={375} />
              <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>The Poplar suede sofa</h4>
              <p className='font-satochi font-normal text-[18px]'>£980</p>
            </div>
            <div className='w-[305px] h-[465px] flex flex-col gap-4 ml-4'>
              <Image src="chairTwo.svg" alt='' width={305} height={375} />
              <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>The Dandy chair</h4>
              <p className='font-satochi font-normal text-[18px]'>£250</p>
            </div>
            <div className='w-[305px] h-[465px] flex flex-col gap-4 ml-5'>
              <Image src="chairThree.svg" alt='' width={305} height={375} />
              <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>The Dandy chair</h4>
              <p className='font-satochi font-normal text-[18px]'>£250</p>
            </div>
          </div>

          {/* Mobile Section */}
          <div className='flex flex-row gap-6 mt-10 laptop-sm:hidden'>
            {/* <div className='w-full flex flex-row gap-4'>
              <Image src="LargeSofa.svg" alt='' width={630} height={375} />
              <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>The Poplar suede sofa</h4>
              <p className='font-satochi font-normal text-[18px]'>£980</p>
            </div> */}
            <div className='w-full flex flex-col gap-4'>
              <Image src="lamp.svg" alt='' width={305} height={375} />
              <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>The Dandy chair</h4>
              <p className='font-satochi font-normal text-[18px]'>£250</p>
            </div>
            <div className='w-full flex flex-col gap-4'>
              <Image src="VaseSet.svg" alt='' width={305} height={375} />
              <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>The Dandy chair</h4>
              <p className='font-satochi font-normal text-[18px]'>£250</p>
            </div>
          </div>
          <div className='flex items-center justify-center mt-10'>
                <Button className='w-[342px] tablet:w-[170px] h-[56px] bg-[#F9F9F9] text-[#2A254B] hover:text-white'>View Collection</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurProduct
