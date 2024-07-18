"use client";
import React, { useState } from "react";
import Image from "next/image";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import LoadingP from "@/components/loadingPoint/page"

// import useStoreLogin from "@/store/Login";
import getUserInfo from "@/components/getUser";
// import supabase from "@/supabase";
import loginUserClient from "@/components/loginUser";


export default function page() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  // const {getLogin} = useStoreLogin()
  const [email, setEmail] = useState("Pooya9685@gmail.com");
  const [pass, setPass] = useState("66802231PY");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [loading, setLoading] = useState(false)
  const testSupa = (async () => {



  })
  async function getVal() {
    setLoading(true)
    await loginUserClient(email, pass)
    setLoading(false)
    // getUserInfo()
    // revalidatePath('/')
    // redirect(Category)
  }



  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[415px] h-[440px] flex flex-col items-center border rounded-[10px] shadow-lg p-[25px]">
        <div className="flex justify-center">
          <Image src="/logo/logo.svg" width={150} height={150} alt="pic" />
        </div>
        <div className="w-full mr-[25px]">

          <h3 className="text-[20px] font-[700] mt-[5px] mb-[20px]">ورود </h3>
          <h4 className="text-slate-600 text-[15px]">سلام!</h4>
          <h4 className="text-slate-600 text-[15px]">
            لطفا ایمیل و پسورد خود را وارد کنید
          </h4>
        </div>
        <div className="mt-[10px] flex flex-col">
          <input className="my-[5px] w-[335px] border px-[5px]  h-[47px] bg-transparent rounded-[8px] outline-none" placeholder="ایمیل" type="text" value={email} onChange={(e) => { setIsValidEmail(emailRegex.test(e.target.value)), setEmail(e.target.value) }} style={isValidEmail ? {} : { border: '1px solid red' }} />
          {isValidEmail ? null : <span className="w-full mr-[25px] flex justify-start text-[11px]  text-[#dc2626]">لطفا مقدار ایمیل را به درستی وارد کنید</span>}
          <input className="my-[5px] w-[335px] h-[47px] border px-[5px] bg-transparent rounded-[8px]" placeholder="پسورد" type="password" value={pass} onChange={e => setPass(e.target.value)} name="" id="" />
        </div>
        <button className="w-[335px] my-[20px] h-[47px] rounded-[8px] text-white bg-red-600 flex justify-center items-center" onClick={getVal}  >
          {loading ? <LoadingP /> : <span>ورود</span>}
        </button>
        <span className="text-[12px]">ورود شما به معنای پذیرش شرایط دیجی‌کالا و قوانین حریم‌خصوصی است</span>
      </div>
    </div>
  );
}
