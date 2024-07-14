"use client";
import React, { useState } from "react";
import Image from "next/image";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'


// import useStoreLogin from "@/store/Login";
import getUserInfo from "@/components/getUser";
// import supabase from "@/supabase";
import loginUserClient from "@/components/loginUser";


export default function page() {
  // const {getLogin} = useStoreLogin()
  const [email, setEmail] = useState("Pooya9685@gmail.com");
  const [pass, setPass] = useState("66802231PY");
  const testSupa=(async()=>{
    


  })
  function getVal(){
    loginUserClient(email,pass)
    // getUserInfo()
    // revalidatePath('/')
    // redirect(Category)
  }



  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[400px] h-[440px] border rounded-[10px] shadow-lg p-[25px]">
        <div className="flex justify-center">
          <Image src="/logo/logo.svg" width={150} height={150} alt="pic" />
        </div>
        <h3 className="text-[20px] mt-[5px] mb-[20px]">ورود </h3>
        <h4 className="text-slate-600 text-[15px]">سلام!</h4>
        <h4 className="text-slate-600 text-[15px]">          
          لطفا ایمیل و پسورد خود را وارد کنید
        </h4>
        <div className="mt-[10px]">
          <input className="my-[5px] w-[335px] h-[47px] border bg-transparent rounded-[8px]" type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="my-[5px] w-[335px] h-[47px] border bg-transparent rounded-[8px]" type="password" value={pass} onChange={e => setPass(e.target.value)} name="" id="" />
        </div>
        <button className="w-[335px] my-[20px] h-[47px] rounded-[8px] text-white bg-red-600" onClick={getVal}  >ورود</button>        
        <span className="text-[12px]">ورود شما به معنای پذیرششرایط دیجی‌کالاوقوانین حریم‌خصوصیاست</span>
      </div>
    </div>
  );
}
