"use client"
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function ScrollButton() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
    }
  return (
    <div className='fixed bottom-5 right-5 h-12 w-12 cursor-pointer flex justify-center items-center rounded-full bg-blue-950 hover:bg-yellow-600 transition-all duration-500 text-white text-lg' onClick={scrollToTop}>
        <FaArrowUpLong />
    </div>
  )
}

export default ScrollButton