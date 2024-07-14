"use client";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Login from "../ui/login";
import getUserInfo from "../getUser";
import { getUser } from "@/action/getUser";
import addToCartClient from "../addToCart";
import Menue from "@/components/Menue/page"
import Category from "@/app/Category/page"
import showToCartClient from "../showCart";
import Loadingd from "@/components/loadingD/page"
import { useGlobalContext } from "@/Context/store";
import { showTocarts } from "@/action/showCart";


export default function page() {


  // const {carts} = useStoreCartsClient()
  const [user, setUser] = useState(false)
  const [userInfo, setUserInfo] = useState()
  const [cart, setCart] = useState([])
  const [flag, setFlag] = useState(false)
  const [loading, setLoading] = useState(false)
  const showHide = useRef()
  const { carts, setCarts, userStatus, setUserStatus } = useGlobalContext()


  useEffect(() => {
    async function getCartNew() {
      const getP = await showTocarts()
      setCarts(getP)
      setLoading(true)
    }
    getCartNew()
  }, [])



  async function getval() {
    // const val = await getUserInfo()
    // console.log(val);
    const val = await addToCartClient()
    // console.log(val);

  }
  // console.log(userInfo);
  // console.log(user);
  // const { getApi }: any = useStoreApi();
  const [s, setX] = useState(0)
  
  useEffect(() => {
    const infoUser = (async () => {
      const val = await getUserInfo()
      setLoading(true)
      setUserInfo(val.user)
      setUser(val.status)
      setUserStatus(val.status)

    })
    infoUser()
  }, [])

  // console.log(userStatus);
  // useEffect(() => {
  //   setX(getApi.carts.length)

  // }, [s])
  function showHam() {
    if (flag) {
      showHide.current.style.display = "none"
    } else {
      showHide.current.style.display = "flex"
    }
    setFlag(!flag)
  }
  const showMiniCart = useRef()
  const shopCarts = useRef()
  const [price, setPrice] = useState(0)
  let myPrice = 0

  return (
    <>
      <div className="flex flex-col w-full h-auto myContainer mx-auto  bg-white pt-[10px]">
        <div className="lg:flex w-full h-full hidden ">
          <div className="grow-[1] h-full  flex flex-row items-center">
            <Link href={"/"}  className="ml-[20px]">
              <Image src="/logo/logo.svg" width={100} height={100} alt="pic" />
            </Link>
            <input
              className="w-[600px] px-[20px] h-[44px] rounded-[8px] bg-[#F0F0F1] outline-none"
              placeholder="جستجو"
              type="text"
              name=""
              
              id=""
            />
          </div>
          <div className="grow-[1] h-full flex justify-end items-center  bg-slate-700-600 ">
            {user ?

              <div className="flex ml-[20px] items-center justify-center w-[40px] h-[40px] border rounded-[7px]">
                <Image src="/icon/user.svg" width={20} height={20} alt="pic" />
              </div> :
              <Link className="ml-[20px] w-[134px] h-[40px] rounded-[9px] border flex justify-center items-center " href={"/Login"}>
                ورود | ثبت نام
                {/* <Image src="/icon/user.svg" width={20} height={20} alt="pic" /> */}
              </Link>

            }

            <div className="relative">
              <div
                onMouseEnter={(e) => { e.currentTarget.id == 'shopID' ? showMiniCart.current.style.display = "flex" : null }}
                id="shopID"
                onMouseLeave={() => { showMiniCart.current.style.display = "none" }}
              >
                <a className="bg-green-700 w-[40px] h-[40px] " href=""
                  ref={shopCarts}>
                  <Image src="/icon/shop.svg" width={20} height={20} alt="pic" />
                  <span className="flex justify-center items-center text-[10px] absolute top-[7px] left-[10px] w-[15px] h-[15px] rounded-[5px] text-white bg-red-600">
                    {userStatus ? carts.length : [].length}
                  </span>
                </a>
                {carts.length==0?
                <div ref={showMiniCart} className="absolute flex-col justify-center items-center top-[20px] hidden z-50 left-[5%] w-[350px] bg-[#fff]  h-[300px] rounded-[10px] shadow-lg border">
                  <Image src="/NoShop.svg" width={150} height={150} alt="NoShop" />
                  <h2 className="text-[20px] mt-[10px] font-[700]">سبد خرید شما خالی است!</h2>
                </div>
                :
                <div ref={showMiniCart} className="absolute  flex-col top-[20px] hidden z-50 left-[5%] w-[450px] bg-[#fff]  h-[450px] rounded-[10px] shadow-lg border">
                  <div className="w-full h-[40px] static p-[10px]"><h5 className="text-[13px] font-[400]">{userStatus ? carts.length : [].length} کالا</h5></div>
                  <div className=" w-full h-full overflow-y-scroll">
                    {
                       carts.map((e,i) => {
                        myPrice = myPrice + e.product_price

                        return (<div key={i} className="w-full h-[200px]  mb-[30px] border-t flex flex-row pt-[10px] pr-[10px]">
                          <div className="w-[40%] h-full ">
                            <Image src={e.product_img} width={150} height={150} alt="pic" />
                          </div>
                          <div className="w-[60%] h-full px-[10px]">
                            <h2 className="text-[14px] font-[700] font-sans ">{e.product_name}</h2>
                            <p className="flex items-center mt-[10px]"><span className="flex w-[20px] ml-[3px] h-[20px] rounded-full bg-[#000]"></span>مشکی</p>

                            <h1 className="flex w-full text-[20px] mt-[80px] font-[700] justify-end">
                              {e.product_price.toLocaleString()}
                              <Image className="mr-[5px]" src="/icon/iconProduct/toman.svg" width={15} height={15} alt="pic" />
                            </h1>
                          </div>
                        </div>)
                      })
                    }

                  </div>
                  <div className="w-full h-[80px] p-[10px] border-t flex flex-row justify-between">
                    <div className="flex flex-col">
                      <p className="text-[12px] font-[400]">مبلغ قابل پرداخت</p>
                      <h3 className="flex flex-row text-[20px] font-[700]">
                        {myPrice.toLocaleString()}
                        <Image className="mr-[5px]" src="/icon/iconProduct/toman.svg" width={15} height={15} alt="pic" />
                      </h3>
                    </div>
                    <div>
                      <button className="w-[110px] text-[13px] h-full rounded-[8px] text-[#fff] bg-[#dc2626]">ثبت سفارش</button>
                    </div>
                  </div>
                </div>
                }
                
              </div>

            </div>


            {/* : <Loadingd width={40} height={35} />} */}



          </div>
        </div>
        <div className="flex items-center mt-[15px] w-full h-full">
          <div className="grow-[1] h-full  flex items-center">
            <ul className="flex w-full items-center justify-between">
              {/* <Category /> */}
              <Menue />
            </ul>
          </div>

        </div>


      </div>


      <div className="w-full myContainer mx-auto h-auto pt-[3px] border-b-2 ">



        {/* ############## */}
        <div ref={showHide} className="absolute z-[99] hidden top-[65px] bottom-0 w-full h-full bg-[#000000b1] ">
          <div className="w-full bg-[#f0f0f1] overflow-y-scroll h-[300px]">
            <Category />
          </div>

        </div>
        {/* ################## */}
        <div className="flex lg:hidden">
          <div className="grow-[2] flex justify-center items-center h-[50px] ">
            <button onClick={showHam}>              
              <Image src="/icon/iconMobile/ham.svg" width={20} height={20} alt="NO" />
            </button>
          </div>
          <div className="grow-[5] h-[50px]  px-[5px] flex items-center justify-center">
            <input
              className="w-full h-[30px] text-[10px] p-[5px] rounded-[8px] bg-[#F0F0F1]"
              placeholder="جستجو در"

              type="text"
              name=""
              id=""

            />
          </div>
          <div className="grow-[2] flex justify-center items-center h-[50px] ">
            <button>
              <Image src="/icon/iconMobile/shop.svg" width={20} height={20} alt="NO" />
            </button>
          </div>

        </div>



      </div>
    </>
  );
}
