"use client";
// import useStoreProduct from "@/app/store/GetPruduct";
import { useEffect, useRef, useState, useContext } from "react";

import Image from "next/image";
import Remove from "@/../public/icon/iconProduct/remove"
import Loading from '@/components/Loading/page'
// import useStoreCart from "@/app/store/cart";
import Header from "../../../components/Header/page";
// import useStoreApi from "@/store/Pro";
// import useStoreProductInfo from "@/store/getProductInfo";
import addToCartClient from "@/components/addToCart";
import removeToCartsClient from "@/components/removeTocarts";
// import useStoreCartsClient from "@/store/showCarts";
import showToCartClient from "@/components/showCart";
import { showTocarts } from "@/action/showCart";
import { useGlobalContext } from "@/Context/store";
import deleteFromCart from "@/action/removeTocart"
import { addToCart } from "@/action/addTocart"
import Close from "@/components/Close/page"

export default function Page({ params, searchParams }: any) {
  const { carts, setCarts, userStatus }: any = useGlobalContext();
  const [loading, setLoading] = useState(false)
  const [getProduct, setgetProduct] = useState({})
  // const getVal = JSON.parse(localStorage.getItem("selectedCategory"))
  const [flagT, setFlagT] = useState(false)
  const [pval, setPval] = useState([])
  const [valClose, setValClose] = useState("none")


  useEffect(() => {
    async function getCartNew() {
      const getP = await showTocarts()
      // console.log(getP);

      setCarts(getP)
    }
    getCartNew()
  }, [])

  // http://localhost:3000/Product/7845?category=%D8%B3%D9%84%D8%A7%D9%85%D9%85
  useEffect(() => {
    const getValPro = (async (id: any) => {
      try {
        const response = await fetch(`https://one-api.ir/digikala/?token=${process.env.NEXT_PUBLIC_API_KEY}&action=product&id=${id}`);
        if (!response.ok) {
          // ok
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const getD = await response.json()
        setgetProduct(getD.result)
        setLoading(true)
      } catch (error) {
        console.error('There was an error!', error);
      }

    })
    getValPro(params.slug)
    // getValPro(13714776)
    // http://localhost:3000/Product/7845?category=%D8%B3%D9%84%D8%A7%D9%85%D9%85
  }, [])


  const [count, setCount] = useState(0);

  // const data = getData(params.slug);

  const btnShow = useRef();

  const getBtn = useRef()
  const showPr = useRef()
  async function getData() {
    // ProName,ProId,ProImg,Pro_Price
    if (userStatus) {
      await addToCart(getProduct.title_fa, getProduct.id, getProduct.images.main, getProduct.price.selling_price)
      getBtn.current.style.display = "none"
      showPr.current.style.display = "flex"
      setCount(count + 1)
      const getP = await showTocarts()
      setCarts(getP)

    } else {
      // const  product  = { product_name: getProduct.title_fa, product_id: getProduct.id, product_img: getProduct.images.main, product_price: getProduct.price.selling_price }      
      setValClose("flex")
    }




  }
  async function removShow() {

    await deleteFromCart(getProduct.id)
    setCount(count - 1)
    getBtn.current.style.display = "flex"
    showPr.current.style.display = "none"
    const getP = await showTocarts()
    setCarts(getP)


  }
  return (
    <>

      <Close valClose={valClose} setValClose={setValClose} />
      {loading ?
        <div className="flex myContainer mx-auto flex-col">
          <div className='w-full h-[30px] px-[20px] flex justify-between my-[10px]'>
            <h4 className="text-[14px]">دیجی‌کالا/موبایل/گوشی موبایل</h4>
            {/* <h4>{e.title_fa}/{e.category_title}</h4> */}
            <h4 className="text-[14px] hidden lg:flex">ثبت آگهی در پیندو فروش در دیجی‌کالا</h4>

          </div>

          <div className='flex w-[100%] flex-col px-[5px] lg:px-0 lg:flex-row'>
            <div className="grow-[1] w-full m-[10px] lg:w-[20%] flex flex-col items-center justify-center lg:justify-start ">
              {/* <Image src="/icon/iconProduct/shopTest.webp" width={500} height={500} alt="pic" /> */}
              <Image src={getProduct.images.main} width={500} height={500}
                // className="w-[300px] h-[2/50px] lg:w-[500px] lg:h-[500px]"

                alt="pic" />

              <div className='w-full h-[81px] mt-[20px] ml-[12px] hidden lg:flex'>
                <ul className='w-full h-full flex flex-wrap justify-around'>
                  {
                    getProduct.images.image_list.map((e, i) => {
                      if (i >= 6) return null
                      return (
                        <li className='w-[71px] h-[71px] border rounded-[8px]'><Image src={e} width={69} height={69} alt="pic" /></li>
                      )
                    })

                  }
                </ul>
                {/* <li className='w-[71px] h-[71px] bg-amber-400'></li> */}
                {/* <li className='w-[71px] h-[71px] bg-amber-400'><Image src={e} width={71} height={71} alt="pic" /></li> */}
              </div>


            </div>

            <div className='flex grow-[2] w-full lg:w-[50%] h-full flex-col'>

              <div className='grow h-auto '>
                <h4 className="flex items-center text-[10px] lg:text-[15px]"><span>{getProduct.brand.title_fa}</span> / <span>{getProduct.category_title}</span></h4>
                <h1 className='lg:mt-[8px] text-[10px] lg:text-[20px] py-[15px] text-[#000] font-[700]'>{getProduct.title_fa}</h1>
              </div>

              <div className='flex grow-[4] h-[100vh] flex-col m-[5px] lg:flex-row'>
                <div className="grow-[3] w-full lg:w-[50%] m-[10px] h-[100vh] ">
                  <div className='w-auto lg:w-[100%] pl-[10px]   flex flex-col'>
                    <div className='w-full h-[191px] '>
                      <div className="flex items-center ">
                        <span className="w-[100%] lg:text-nowrap text-[12px]   text-[#C0C2C5]">{getProduct.title_en} </span>
                        <div className="grow bg-[#C0C2C5] hidden lg:flex mx-[3px] h-[1px] w-full"></div>
                        
                      </div>
                      {/* toString()[0] */}
                      {/* rating */}
                      {/* rate
                            count */}

                      <h5 className="my-[15px] flex flex-row items-center">
                        <span className="text-[12px] pl-[5px] text-[#000] flex flex-row">
                        <Image src="/icon/iconProduct/star.svg" width={15} height={15} alt="NOPic"/>
                          {getProduct.rating.rate.toString()[0]}</span>
                        <span className="text-[11px] pl-[5px] text-[#C0C2C5]">
                          
                          (امتیاز خریدار{getProduct.rating.count})</span>
                          <span className="flex mx-[7px] w-[4px] h-[4px] rounded-full bg-[#C0C2C5]" ></span>
                          
                        <span className="text-[12px] flex items-center flex-row text-[#19BFD3]">{getProduct.comments.count} دیدگاه<span className="flex mx-[7px] w-[4px] h-[4px] rounded-full bg-[#C0C2C5]" ></span> {getProduct.questions ?  <span> {getProduct.questions.count}پرسش</span> : null}  </span>

                      </h5>

                      <h4 className="text-[12px] flex text-[#62666D]">
                        <Image className="ml-[5px]" src={getProduct.product_badges[0].payload.svg_icon} width={14} height={14} alt="pic" />
                        {getProduct.product_badges[0].payload.text}
                      </h4>
                      <div className="mt-[10px]">
                        <h6>رنگ:آبی</h6>
                        <div className="flex">
                          <div className="w-[40px] ml-[8px] p-[3px] h-[40px] rounded-full flex border justify-center items-center">
                            <span className="w-[30px] h-[30px] bg-[#FF80AB] rounded-full"></span>
                          </div>
                          <div className="w-[40px] h-[40px] ml-[8px] p-[3px] rounded-full flex border justify-center items-center">
                            <span className="w-[30px] h-[30px] bg-[#2196F3] rounded-full"></span>
                          </div>
                          <div className="w-[40px] h-[40px] ml-[8px] p-[3px] rounded-full flex border justify-center items-center">
                            <span className="w-[30px] h-[30px] bg-[#fff] rounded-full"></span>
                          </div>
                          <div className="w-[40px] h-[40px] ml-[8px] p-[3px] rounded-full flex border justify-center items-center">
                            <span className="w-[30px] h-[30px] bg-[#000] rounded-full"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=''>
                      {getProduct.variants[0].insurance ?
                        <>
                          <p className='py-[12px]'>بیمه</p>
                          <div className='w-full h-[77px] p-[8px] border rounded-[8px]'>
                            <h4 className="text-[12px] font-[700] text-[#000]">{getProduct.variants[0].insurance.title}</h4>
                            <div className="flex justify-between mt-[15px]">
                              <h5 className="flex items-center">
                                <span className="flex items-center justify-center h-[20px] w-[34px] py-[4px] text-[10px] text-[#fff] rounded-[16px] bg-[#D32F2F]">
                                  {getProduct.variants[0].insurance.discount_percent}%

                                </span>
                                <del className="text-[12px] text-[#C0C2C5] mx-[5px]">
                                  {getProduct.variants[0].insurance.before_discount.toLocaleString()}

                                </del>
                                <span className="flex items-center text-[14px] font-[700] text-[#000]">
                                  {/* <Image src={} width={15} height={15} alt="pic" /> */}
                                  {getProduct.variants[0].insurance.base_premium.toLocaleString()}
                                </span>
                              </h5>
                              <h5 className="text-[12px] font-[700] text-[#19BFD3]">جزییات</h5>
                            </div>
                          </div>
                        </> : null
                      }


                    </div>
                    <div className='w-full h-[197px] mt-[10px]'>ویژگی
                      <ul className="flex flex-wrap items-center justify-between mt-[8px]">
                        {getProduct.review.attributes.map((e) => {
                          return (
                            <li className="w-auto h-[41px] lg:w-[152px] lg:h-[60px] mt-[10px] rounded-[5px] text-[10px] font-[400] lg:font-[700] lg:text-[12px] bg-[#F0F0F1] p-[8px]">
                              <div>
                                <p className="text-[#81858B]">{e.title}</p>
                                <p className="text-[#000]">{e.values[0]}</p>
                              </div>
                            </li>
                          )
                        })}

                      </ul>
                    </div>
                  </div>

                </div>
                <div className="grow-[2] w-full lg:w-[30%] h-[100vh] m-[10px]  flex justify-center">
                  <div className='w-full max-w-[430px] h-[515px] p-[10px] bg-[#F7F7F7] border rounded-[10px]'>
                    <div className='w-full h-[57px]'>
                      <h4 className="flex justify-between items-center">
                        <span className="text-[16px] font-[700]">فروشنده</span>
                        <span className="text-[12px] text-[#19BFD3]">{getProduct.variants.length} فروشنده دیگر</span>
                      </h4>

                    </div>
                    <div className='w-full h-[78px]  border-b'>
                      <div className="flex w-full items-center">
                        <div className="flex relative w-[33px] h-[33px] ">
                          <Image src="/icon/iconProduct/shop.svg" width={33} height={33} alt="pic" />
                          <div className="flex absolute left-[0px] bottom-0 w-[20px] bg-white rounded-full h-[00px2 ">
                            <Image src="/icon/iconProduct/tick.svg" width={23} height={23} alt="pic" />
                          </div>
                        </div>

                        <p className="text-[15px] mr-[12px] ml-[10px] text-[#000]">{getProduct.variants[0].seller.title_fa}</p>
                        <p className="text-[11px] text-[#19BFD3]">منتخب</p>
                      </div>
                      <div>
                        <p className="text-[12px]"><span className="mr-[5px]">{getProduct.variants[0].rate}%</span> رضایت از کالا <span className="ml-[5px]" >عملکرد {getProduct.variants[0].seller.grade.label}</span></p>
                      </div>
                    </div>
                    <div className='w-full h-[200px] '>
                      <h3 className="flex items-center justify-end text-[19px] text-end">
                        {getProduct.variants[0].price.selling_price.toLocaleString() ? getProduct.variants[0].price.selling_price.toLocaleString() : getProduct.price.selling_price.toLocaleString()}
                        <Image className="mr-[10px]" src="/icon/iconProduct/toman.svg" width={15} height={15} alt="pic" />
                      </h3>
                      <p className="flex items-center text-[12px] text-red-600">
                        <Image className="ml-[5px] " src={getProduct.product_badges[0].payload.svg_icon} width={15} height={15} alt="pic" />
                        {getProduct.product_badges[0].payload.text}
                      </p>

                      <button onClick={getData} ref={getBtn} className="w-full flex items-center justify-center mt-[20px] h-[40px] rounded-[10px] bg-[#EF4056] text-[#fff] text-[12px]">افزودن به سبد</button>
                      <div ref={showPr} className="justify-around items-center w-[100px] mt-[15px] h-[44px] rounded-[10px] shadow-lg hidden  bg-[#fff]">
                        <button disabled className="text-[20px] text-[#dc2626] ">+</button>
                        <span className="flex flex-col items-center justify-center ">
                          <span className="text-[#dc2626]">{count}</span>
                          <span className="text-[11px] text-[#C0C2C5]">حداکثر</span>
                        </span>

                        <button onClick={removShow}><Remove /></button>
                      </div>

                      <div className='w-full h-[50px] mt-[20px]  border-b flex items-center'>
                        <Image className="ml-[10px]" src="/icon/iconProduct/tick-w.svg" width={30} height={30} alt="pic" />
                        <h3 className="text-[12px] font-[700]">{getProduct.variants[0].warranty.title_fa}</h3>
                      </div>
                    </div>
                    <div className='w-full h-[76px]'>
                      <p className="flex items-center text-[12px]">
                        <Image className="ml-[10px]" src={getProduct.variants[0].shipment_methods.providers[0].image} width={20} height={20} alt="pic" />
                        {getProduct.variants[0].shipment_methods.providers[0].title}
                      </p>
                      <p className="flex items-center text-[12px] mt-[5px]">
                        {/* <Image className="ml-[10px]" src={getProduct.variants[0].shipment_methods.providers[1].image} width={20} height={20} alt="pic" /> */}
                        {/* {getProduct.variants[0].shipment_methods.providers[1].title} */}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        : <Loading />}
    </>

  );
}
