import React, { useEffect, useRef } from 'react'

export default function alert(props) {
    const alertdiv = useRef(null)
    // const interval = setInterval(pollDOM, 3000);
    // useEffect(()=>{
    //     setTimeout(() => {
    //         alertdiv.current.style.display = "none"
    //     }, 3000); 

    // },[])

    function closeAlert() {
        alertdiv.current.style.display = "none"
    }
    return (
        <div className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50 absolute top-[20px] " ref={alertdiv} >
            <div
                className="error-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg  px-[10px]"
            style={{background:props.background}}>
                <div className="flex items-center gap-2">
                    <div className="text-[#d65563] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                            ></path>
                        </svg>
                    </div>
                    <div >
                        <p className="text-[15px] text-white">{props.title}</p>
                    </div>
                </div>
                <button
                    className="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear"
                    onClick={closeAlert}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>

    )
}
