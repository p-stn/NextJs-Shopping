"use client";
// import useStoreProduct from "@/app/store/Product";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Product from "@/app/Product/page"
// import Header from "../../../components/Header/page"
import Header from "@/components/Header/page";
export default function Page() {
  // const { initialStateProduct, getDataProduct } = useStoreProduct();
  // const [x, setX] = useState([]);
  // useEffect(()=>{
  //   getMyDataProduct('category')
  //   setX(getApi.categori)
  // },[])
  return (
    <>
      <ul className="flex flex-wrap justify-between">
      <Product />
      </ul>
    </>
  );
}
