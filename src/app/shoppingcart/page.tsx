import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { Button } from '@/components/ui/button'
import { DivideCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <header>
    <NavBar/>
    </header>

    <main>
      <div className='w-full h-auto p-9 laptop-sm:px-[188px] laptop-sm:py-16 relative bg-[#F9F9F9]'>
        <div className='flex flex-col justify-evenly'>
          <h1 className='font-clash text-[24px] tablet:text-[36px] text-[#2A254B] font-normal'>Your shopping cart</h1>
          <div className='hidden tablet:flex text-[#2A254B] items-center justify-between mt-20'>
            <span>Product</span>
            <span className='ml-52'>Quantity</span>
            <span>Total</span>
          </div>
          <hr className='bg-gray-100 mt-4' />


          <div className='mt-4 flex flex-col gap-6 justify-between'>
            <div className='flex items-center gap-4'>
              <Image src="/vaseTwo.svg" alt='' width={109} height={124}/>
              <div className='w-[309px] h-auto p-1 flex flex-col  gap-4'>
                <h2 className='font-clash font-normal text-[20px] text-[#2A254B]'>Graystone vase</h2>
                <p className='font-satochi font-normal text-[14px] text-[#2A254B]'>A timeless ceramic vase with <br />
                a tri color grey glaze.</p>
                <p className='font-satochi font-normal text-[16px] text-[#2A254B]'>£85</p>
                <span className='block tablet:hidden font-satochi font-normal text-[16px] text-[#2A254B] text-center'>1</span>
              </div>
              <span className='hidden tablet:block font-satochi font-normal text-[16px] text-[#2A254B] ml-14 laptop-sm:ml-60'>1</span>
              <span className='hidden tablet:block font-satochi font-normal text-[18px] text-[#2A254B] ml-32 laptop-sm:ml-80'>£85</span>
            </div>

            <div className='flex items-center gap-4'>
              <Image src="/pot.svg" alt='' width={109} height={124}/>
              <div className='w-[309px] h-auto p-1 flex flex-col  gap-4'>
                <h2 className='font-clash font-normal text-[20px] text-[#2A254B]'>Basic white vase</h2>
                <p className='font-satochi font-normal text-[14px] text-[#2A254B]'>Beautiful and simple this is <br /> one for the classics</p>
                <p className='font-satochi font-normal text-[16px] text-[#2A254B]'>£85</p>
                <span className='block tablet:hidden font-satochi font-normal text-[16px] text-[#2A254B] text-center'>1</span>
              </div>
              <span className='hidden tablet:block font-satochi font-normal text-[16px] text-[#2A254B] ml-14 laptop-sm:ml-60'>1</span>
              <span className='hidden tablet:block font-satochi font-normal text-[18px] text-[#2A254B] ml-32 laptop-sm:ml-80'>£85</span>
            </div>

            <hr className='bg-gray-100 mt-4' />
          </div>

          <div className='flex flex-col items-end mt-6'>
            <div className='flex gap-5'>
              <span className='font-clash text-[20px] font-normal  text-[#2A254B]'>Subtotal</span>
              <span className='font-clash text-[24px] font-normal text-[#2A254B]'>£210</span>
            </div>
            <p className='font-satochi text-[14px] font-normal text-[#2A254B]'>Taxes and shipping are calculated at checkout</p>
            <Button className='hidden laptop-sm:block h-[56px] w-[172px] rounded-none bg-[#2A254B] text-white hover:bg-white hover:text-[#2A254B] mt-5'>
              Go to checkout
            </Button>
          </div>
          <div className='flex items-center justify-center'>
          <Button className='laptop-sm:hidden w-[342px] h-[56px]  rounded-none bg-[#2A254B] text-white hover:bg-white hover:text-[#2A254B] mt-5'>
              Go to checkout
            </Button>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <Footer/>
    </footer>
      
    </>
  )
}

export default page
