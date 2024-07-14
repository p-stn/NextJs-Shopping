"use client"
import React, { useEffect, createContext, useState } from 'react'

import Header from "../components/Header/page"
import Body from "../components/Body/page"
import "./globals.css"
export default function page() {
    return (
    <div className='myContainer mx-auto  h-[100vh]'>
      <Header />      
      <Body />
    </div>
  )
}
