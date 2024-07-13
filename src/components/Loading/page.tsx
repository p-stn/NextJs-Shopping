import React from 'react'
import Image from 'next/image'

export default function page() {
    return (
        <div>
            <div className='w-full absolute top-0 h-[100vh] flex items-center justify-center bg-[#000000b1]'>
                <div className='w-[350px] h-[200px] bg-white rounded-[10px] flex justify-evenly flex-col items-center'>
                    <div>
                        <Image src="/icon/logo.svg" width={200} height={200} />

                    </div>
                    <div className="flex flex-row gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#dc2626] animate-bounce [animation-delay:.7s]"></div>
                        <div class="w-3 h-3 rounded-full bg-[#dc2626] animate-bounce [animation-delay:.3s]"></div>
                        <div class="w-3 h-3 rounded-full bg-[#dc2626] animate-bounce [animation-delay:.7s]"></div>
                    </div>

                </div>
            </div>

        </div>
    )
}
