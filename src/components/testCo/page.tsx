import React, { useEffect, useRef, useState } from 'react'

export default function page({ info, setInfo }) {
    const myt = useRef()
    useEffect(() => {
        { info ? myt.current.style.display = "flex" : myt.current.style.display = "none" }


    }, [info])
    // { info ? myt.current.style.display = "flex" : myt.current.style.display = "none" }
    return (
        <div
            // onMouseMove={(e) => { e.target.id == 'showVal' ? hamRef.current.style.display = "none" : null }}
            onMouseMove={(e) => { e.target.id == "showMyVal" ? setInfo(false) : null }}
            id='showMyVal' className='absolute top-[100px] z-40  left-0 bottom-0  w-full h-[100vh] bg-red-600' ref={myt}>
            <div className='w-[500px] h-[300px] absolute z-50 bg-white' onMouseMove={(e)=>{e.preventDefault()}}>

            </div>

        </div>
    )
}
