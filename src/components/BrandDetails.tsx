import Image from 'next/image'
import React from 'react'

const BrandDetails = () => {
  return (
    <>
     <div className='relative w-full mt-20 p-4 tablet:px-[86px]'>
        <div className='flex flex-col'>
            <h1 className='tablet:text-center font-clash font-normal text-2xl text-[#2A254B]'>What makes our brand different</h1>
            <div className='mt-16  grid grid-cols-1 tablet:grid-cols-2 laptop-sm:grid-cols-4 gap-16'>
                <div className='flex flex-col gap-2'>
                    <Image src="/Delivery.svg" alt='' height={24} width={24}/>
                    <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>Next day as standard</h4>
                    <p className='font-satochi font-normal text-[16px]'>Order before 3pm and get your order
                    the next day as standard</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <Image src="/CheckmarkOutline.svg" alt='' height={24} width={24}/>
                    <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>Made by true artisans</h4>
                    <p className='font-satochi font-normal text-[16px]'>Handmade crafted goods made with real passion and craftmanship</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <Image src="/Purchase.svg" alt='' height={24} width={24}/>
                    <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>Unbeatable prices</h4>
                    <p className='font-satochi font-normal text-[16px]'>For our materials and quality you won&apos;t find better prices anywhere</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <Image src="/Sprout.svg" alt='' height={24} width={24}/>
                    <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>Recycled packaging</h4>
                    <p className='font-satochi font-normal text-[16px]'>We use 100% recycled packaging to ensure our footprint is manageable</p>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default BrandDetails
