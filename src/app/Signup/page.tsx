"use client";
import React, { useState } from "react";
import Image from "next/image";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import Alert from "@/components/alert/page";
import LoadingP from "@/components/loadingPoint/page"
// import useStoreLogin from "@/store/Login";
import getUserInfo from "@/components/getUser";
// import supabase from "@/supabase";
import loginUserClient from "@/components/loginUser"
import singUserClient from "@/components/singupUser";
import { signup } from "@/action/singUp";


export default function page() {
  // const {getLogin} = useStoreLogin()
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [fullName, setFullName] = useState(null)
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);
  const [myAlert, setMyAlert] = useState(false)
  const [showAlert, setShowAlert] = useState({ title: '', backGround: '' })
  const [loading, setLoading] = useState(false)
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const passwordRegex = /^.{8,}$/;



  // const testSupa=(async()=>{
  // })

  // function handleChange (e){
  //   setIsValid(emailRegex.test(e.target.value));



  //   // setEmail(e.target.value)

  // }



  async function getVal() {
    setLoading(true)
    if (isValidEmail && isValidPass) {
      const val = await singUserClient(email, pass, fullName)
      setLoading(false)
      setMyAlert(true)
      console.log(val);
      if (val >= 400 && val < 499) {
        setShowAlert({ title: "شما قبلاً ثبت‌نام کرده‌اید.", backGround: "#FFC107" })
      } else if (val >= 200 && val < 299) {
        setShowAlert({ title: "ثبت‌نام با موفقیت انجام شد", backGround: "#28A745" })
      } else if (val >= 500 && val < 599) {
        setShowAlert({ title: "مشکلی پیش آمد، لطفاً دوباره امتحان کنید", backGround: "#DC3545" })
      } else {
        setShowAlert({ title: "ثبت‌نام با موفقیت انجام شد", backGround: "#28A745" })
      }

    }


    // 
    // getUserInfo()
    // revalidatePath('/')
    // redirect(Category)
  }



  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      {myAlert ? <Alert title={showAlert.title} background={showAlert.backGround} /> : null}
      <div className="w-[415px] flex flex-col items-center  h-[490px] border rounded-[10px] shadow-lg p-[25px]">
        <div className="flex justify-center">
          <Image src="/logo/logo.svg" width={150} height={150} alt="pic" />
        </div>
        <div className="w-full flex flex-col items-start mr-[25px]">

          <h3 className="text-[20px] mt-[5px] mb-[20px] text-[#dc2626] font-[700]">ثبت نام</h3>
          <h4 className="text-slate-600 text-[15px]">سلام!</h4>
          <h4 className="text-slate-600 text-[15px]">
            لطفا ایمیل و پسورد خود را وارد کنید
          </h4>
        </div>
        <div className="w-full flex flex-col items-center  mt-[10px]">
          <input className="my-[5px] w-[335px] border px-[5px]  h-[47px] bg-transparent rounded-[8px] outline-none" value={fullName} onChange={(e) => { setFullName(e.target.value) }} placeholder="نام کاربری" type="text" />
          <input className="my-[5px] w-[335px] border px-[5px]  h-[47px] bg-transparent rounded-[8px] outline-none" placeholder="ایمیل" type="text" value={email} onChange={(e) => { setIsValidEmail(emailRegex.test(e.target.value)), setEmail(e.target.value) }} style={isValidEmail ? {} : { border: '1px solid red' }} />
          {isValidEmail ? null : <span className="w-full mr-[25px] flex justify-start text-[11px]  text-[#dc2626]">لطفا مقدار ایمیل را به درستی وارد کنید</span>}
          <input className="my-[5px] w-[335px] border px-[5px] h-[47px] bg-transparent rounded-[8px] outline-none" type="password" placeholder="پسورد" value={pass} onChange={(e) => { setIsValidPass(passwordRegex.test(e.target.value)), setPass(e.target.value) }} name="" id="" style={isValidPass ? {} : { border: '1px solid red' }} />
          {isValidPass ? null : <span className="w-full mr-[25px] flex justify-start text-[11px]  text-[#dc2626]">رمز عبور باید حداقل ۸ کاراکتر باشد</span>}
        <button className="w-[335px] my-[20px] h-[47px] rounded-[8px] text-white bg-red-600 flex justify-center items-center" onClick={getVal}  >
          {loading ? <LoadingP /> : <span>ادامه</span>}
        </button>
        </div>
        <span className="text-[12px]">ورود شما به معنای پذیرش شرایط دیجی‌کالا و قوانین حریم‌خصوصی است</span>
      </div>
    </div>
  );
}
