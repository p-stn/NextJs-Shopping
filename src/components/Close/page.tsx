"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page({valClose , setValClose}) {    
    useEffect(()=>{
        showM.current.style.display = valClose    
    },[valClose])
  const showM = useRef()
  function hidemodal(){
    setValClose("none")
    showM.current.style.display = valClose
  }

  return (
    <div className='w-full absolute z-[99] top-0 h-[100vh] bg-[#0000008a] hidden justify-center items-center' onClick={hidemodal} ref={showM} >
        <div className='w-[450px] h-[300px] rounded-[5px] bg-[#fff] p-[10px] flex flex-col items-center justify-evenly' onClick={(e)=>{e.stopPropagation()}} >  
        {/* stopPropagation */}
        {/* (e)=>{e.preventDefault()} */}
          <Image src="/icon/logo.svg" width={200} height={200}  alt='First Loging'/>
          <h1 className='text-center text-[16px]'>برای ادامه و خرید محصول، لطفاً ابتدا وارد حساب کاربری خود شوید یا ثبت‌نام کنید.</h1>
          <h3>
            
            <Link className='text-[17px] text-[#dc2626] font-[700]' href={"/Signup"}>
            ثبت نام  
            </Link>
            <span className='px-[5px]'>|</span>
            <Link className='text-[17px] text-[#dc2626] font-[700]' href={"/Login"}>
            ورود
            </Link>                                  
          </h3>
        </div>
    </div>
  )
}
