import React, { useRef, useState } from 'react'
import Category from "@/app/Category/page"
import TestCo from '@/components/testCo/page'
export default function page() {
  const [info, setInfo] = useState(false)

  const hamRef = useRef()
  return (
    <>
      {/* <TestCo info={info} setInfo={setInfo} /> */}
      <div
        className='w-full  h-[40px] hidden lg:flex justify-between items-end   '>


        <div className=' '>
          <ul className='flex text-[12px] text-[#62666D]'>
            <li
              // onMouseEnter={(e) => { e.target.id == 'ham' ? hamRef.current.style.display = "flex": null }}                            
              onMouseEnter={((e) => { { e.target.id == 'ham' ? hamRef.current.style.display = "flex" : null } document.body.style.overflow = 'hidden' })}
              // onMouseLeave={(e) => { hamRef.current.style.display = "none" }}                            
              onMouseLeave={((e) => { hamRef.current.style.display = "none", document.body.style.overflow = 'auto'; })}
              onMouseMove={(e) => { e.target.id == 'showVal' ? hamRef.current.style.display = "none" : null }}
              // onMouseMove={((e)=>{e.target.id == 'showVal' ? hamRef.current.style.display = "none" : null ,document.body.style.overflow = 'auto';})}

              id='ham'
              className='text-[14px]   font-[700] text-black cursor-pointer before:content-ham before:px-[5px] flex mx-[12px]'>دسته بندی کالاها
              <div
                ref={hamRef} id='showVal' className='absolute z-[99] top-[110px] bottom-0  hidden left-[0px] right-0 w-full h-[100vh] bg-[#000000b1]'>
                {/* right-[-10px] */}
                {/* group-hover:flex */}
                {/* id='showVal' */}

                <div className='transition delay-150 duration-300 mr-[3%] w-[300px] h-[70vh] overflow-y-scroll bg-[#f0f0f1]' onMouseMove={(e) => { e.preventDefault() }}>
                  <Category test={hamRef} />

                </div>
              </div>


            </li>
            <li className='relative  group flex cursor-pointer before:content-wow before:px-[5px]  mx-[12px]'>شگفت‌انگیزها
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#EE384E] duration-150 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className='relative  group flex cursor-pointer before:content-market before:px-[5px]  mx-[12px]'>سوپرمارکت
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#EE384E] duration-150 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className='relative  group flex cursor-pointer before:content-gift before:px-[5px]  mx-[12px]'>کارت هدیه
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#EE384E] duration-150 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className='relative  group flex cursor-pointer before:content-medal before:px-[5px]  mx-[12px]'>پرفروش‌ترین‌ها
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#EE384E] duration-150 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className='relative  group flex cursor-pointer before:content-price before:px-[5px]  mx-[12px]'>تخفیف‌ها و پیشنهادها
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#EE384E] duration-150 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className='relative  group flex cursor-pointer before:content-["|"] before:text-[11px] before:px-[12px] px-[0px]'>سوالی دارید؟
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#EE384E] duration-150 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className='flex cursor-pointer mx-[12px]  relative  group'>
              <span className="absolute  bottom-[-4px] left-0 w-0 h-0.5 bg-[#EE384E] duration-150 group-hover:w-full group-hover:transition-all"></span>در دیجی‌کالا بفروشید!
            </li>


          </ul>

        </div>
        {/* <div className='w-full absolute left-0 h-[400px] bg-slate-900'></div> */}

        {/*  */}
        <div className='hidden lg:flex'>
          <h3 className=' text-[12px] before:content-loc  xl:flex before:px-[5px] hidden'>ارسال به تهران، تهران</h3>
        </div>
      </div>
    </>
  )
}
