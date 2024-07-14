"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
// import useStore from "@/app/store/Category";
import Link from "next/link";
import Product from "../../app/Product/page"
import { useGlobalContext } from '@/Context/store';

// import { useRef } from "react";
// import { useStoreProduct } from "@/app/store/Category";
export default function page() {

  // console.log(initialStateProduct);
  // const { initialStateCategory } = useStore();

  // const [flagShow, setFlagShos] = 


  return (
    <>
      <div className="flex flex-wrap justify-center">
        <Product />
      </div>
    </>
  );
}
