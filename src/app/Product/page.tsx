"use client"
import React, { useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useGlobalContextShowProduct } from '@/Context/showProductContext'
import Loading from "@/components/Loading/page"
import Header from "@/components/Header/page"

export default function page() {
  
  const { loading,products, ShowProduct } = useGlobalContextShowProduct()
  
  useEffect(() => {
    const existingValue = localStorage.getItem('selectedCategory');
    // _showProduct(JSON.parse(existingValue))
    ShowProduct(JSON.parse(existingValue))
    

  }, [])
  
  return (
    <>
      {/* <Header /> */}
      {loading?
      products.map((e: any, i: number) => {
        // let mySrc = `../Product/${e.id}`;
        let mySrc = `../Product/${e.id}?category=${e.title_fa}`;
        return (
          <Link key={i} href={mySrc} as={mySrc} >
            <div key={i} className="w-full h-auto lg:w-[315px] lg:h-[450px] hover:shadow-xl border-l border-t py-[12px] px-[8px] flex flex-col justify-around">
              <div className='flex flex-row lg:flex-col'>

                {/* main image product */}
                <div className='flex justify-start lg:justify-center'>
                  {/* <Image src={e.images.main} width={100} height={100} alt="pic" /> */}
                  <Image src={e.images.main} width={230} height={230} alt="pic" />
                </div>

                <div>
                  {e.product_class_badges[0] ? <h4 className='text-[9px] lg:text-[11px] font-[700] text-[#81858D]  flex items-center'>
                    {/* bg-[#F8F8F8] rounded-[10px] */}
                    {/* free delivery */}
                    { }
                    <Image className='ml-[5px]' src={e.product_class_badges[0].icon} width={17} height={17} alt="pic" />
                    {e.product_class_badges[0].title}
                  </h4> : null}

                  {/* title product */}
                  <h2 className='text-[9px] lg:text-[12px] font-sans lg:font-[700]'>
                    {e.title_fa}
                  </h2>
                  <div className='w-full h-[26px] mt-[5px] flex justify-between items-center'>
                    {/* rating product */}
                    <h6 className='text-[8px] lg:text-[12px] flex items-center'>
                      <Image className='ml-[5px]' src="/icon/iconProduct/send.svg" width={17} height={17} alt="pic" />
                      {e.properties.warehouse_label ? e.properties.warehouse_label : "ارسال فردا"}

                    </h6>
                    <h6 className='text-[11px] text-[700] flex items-center'>
                      {e.rating.rate.toString()[0]}
                      <Image className='ml-[5px]' src="/icon/iconProduct/star.svg" width={20} height={20} alt="pic" />
                    </h6>
                  </div>
                  {/* price product */}
                  <h2 className='text-[16px] mt-[15px] font-[700] flex items-center justify-end'>
                    {e.price.selling_price.toLocaleString()}
                    <Image className='mr-[5px]' src="/icon/iconProduct/toman.svg" width={20} height={20} alt="pic" />
                  </h2>

                </div>
              </div>


            </div>
          </Link>
        );
      })
      :<Loading/>}
      
    </>
  )
}
