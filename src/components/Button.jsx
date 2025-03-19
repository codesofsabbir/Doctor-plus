import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function Button({className = '', buttonTitle}) {
  return (
    <div className={`w-full flex ${className}`}>        
        <button className='flex items-center relative w-60 group transition-all'>
            <i className='w-12 h-12 text-xl bg-[#e9d368] rounded-full flex justify-center items-center absolute left-0 opacity-0 group-hover:opacity-100 duration-700'><FaArrowRightLong /></i>
            <span className='h-12 w-48 bg-[#e9d368] flex items-center justify-center rounded-full px-5 absolute left-0 group-hover:left-12 duration-500 z-10'>{buttonTitle}</span>
            <i className='w-12 h-12 text-xl bg-[#e9d368] rounded-full flex justify-center items-center absolute right-0 opacity-100 group-hover:opacity-0 duration-700'><FaArrowRightLong /></i>
        </button>
    </div>
  )
}

export default Button