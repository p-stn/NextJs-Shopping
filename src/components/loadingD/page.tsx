import React from 'react'

export default function page(props) {
    
  return (
    <div className="flex flex-col gap-2">
      <div className="animate-pulse bg-gray-300 rounded-[5px]" style={{width:props.width,height:props.height}}></div>
    </div>


  )
}
