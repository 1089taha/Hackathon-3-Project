import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

type NewCeramicsProps ={
    heading?:string,
}

const NewCeramics: React.FC<NewCeramicsProps> = ({heading = "New ceramics"}) => {
  return (
     <>
     <div className='relative w-full mt-20 p-4 tablet:px-[86px]'>
     <h1 className='font-clash font-normal text-[32px] text-[#2A254B]'>{heading}</h1>
        <div className='flex flex-col items-center justify-center'>
            
            {/* Tablet and Desktop */}
            <div className='hidden mt-10 tablet:grid tablet:grid-cols-2 laptop-sm:grid-rows-1 laptop-sm:grid-cols-4 gap-3 tablet:gap-20 laptop-sm:gap-10 desktop:gap-5 relative'>
                <div className='w-[305px] h-[465px] flex flex-col gap-4'>
                    <Image src="/chairTwo.svg" alt='' width={305} height={375}/>
                    <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>The Dandy chair</h4>
                    <p className='font-satochi font-normal text-[18px]'>£250</p>
                </div>
                <div className='w-[305px] h-[465px] flex flex-col gap-4'>
                    <Image src="/VaseSet.svg" alt='' width={305} height={375}/>
                    <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>Rustic Vase Set</h4>
                    <p className='font-satochi font-normal text-[18px]'>£155</p>
                </div>
                <div className='w-[305px] h-[465px] flex flex-col gap-4'>
                    <Image src="/vase.svg" alt='' width={305} height={375}/>
                    <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>The Silky Vase</h4>
                    <p className='font-satochi font-normal text-[18px]'>£125</p>
                </div>
                <div className='w-[305px] h-[465px] flex flex-col gap-4'>
                    <Image src="/lamp.svg" alt='' width={305} height={375}/>
                    <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>The Lucy Lamp</h4>
                    <p className='font-satochi font-normal text-[18px]'>£399</p>
                </div>
            </div>
             {/* Mobile */}
            <div className='tablet:hidden  mt-6 grid grid-cols-2 items-center gap-4 relative'>
                <div className='w-[163px] h-[288px] flex flex-col gap-2'>
                    <Image src="/VaseSet.svg" alt='' width={163} height={201}/>
                    <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>Rustic Vase Set</h4>
                    <p className='font-satochi font-normal text-[18px]'>£155</p>
                </div>
                <div className='w-[163px] h-[288px] flex flex-col gap-2'>
                    <Image src="/lamp.svg" alt='' width={163} height={201}/>
                    <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>The Lucy Lamp</h4>
                    <p className='font-satochi font-normal text-[18px]'>£399</p>
                </div>
                <div className='w-[163px] h-[288px] flex flex-col gap-2'>
                    <Image src="/vase.svg" alt='' width={163} height={201}/>
                    <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>The Silky Vase</h4>
                    <p className='font-satochi font-normal text-[18px]'>£125</p>
                </div>
                <div className='w-[163px] h-[288px] flex flex-col gap-2'>
                    <Image src="/chairTwo.svg" alt='' width={163} height={201}/>
                    <h4 className='font-clash font-normal text-[20px] text-[#2A254B]'>The Dandy chair</h4>
                    <p className='font-satochi font-normal text-[18px]'>£250</p>
                </div>
            </div>
            <div className='flex items-center justify-center mt-10'>
            <Link href="/allproducts"><Button className='w-[342px] tablet:w-[170px] h-[56px] bg-[#F9F9F9] text-[#2A254B] hover:text-white'>View Collection</Button></Link>
            </div>
        </div>
     </div>
     </>
  )
}

export default NewCeramics