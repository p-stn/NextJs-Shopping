"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "@/app/globals.css"
import Header from "@/components/Header/page"


export default function NotFound() {
  return (
    <>
    <Header/>
    <div className='w-full h-[100vh] flex justify-center items-start' >
        <div className='flex justify-center items-center flex-col mt-[100px]'>
            <h1 className='text-[19px] lg:text-[25px] font-[700] text-[#000]'>صفحه‌ای که دنبال آن بودید پیدا نشد!</h1>
            <Link  className='text-[15px] font-[400] my-[20px] text-[#31d9ff]' href="/">
                صفحه اصلی
            </Link>
            <Image src="/page-not-found.webp"  width={400} height={500} alt='NotFound'/>

            
        </div>
    </div>
    </>
  )
}
