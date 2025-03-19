import React from 'react'
import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";
import shape from '@/media/images/banner/shape.png'
function Card({color, icon, title, description}) {
  const ColorText = `text-[${color}]`;
  const fullHover = `hover:text-white`;
  return (
    <div className={`box w-full md:w-1/3 p-5 rounded-xl relative overflow-hidden group transition-all before:content-[''] before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-500 before:h-[2px] before:bg-yellow-500 before:bottom-0 before:left-0`} style={{ backgroundColor: color }}>
        <div className='relative z-10'>
          <i className='arrow absolute right-0 top-0 '><MdArrowOutward className='text-3xl group-hover:text-5xl transition-all duration-200'/></i>
          {/* style={{ color }} */}
          <i className={`icon text-4xl bg-white ColorText w-20 h-20 flex items-center justify-center rounded-full mb-5 transition-all duration-300 group-hover:text-white`}>{icon}</i>
          <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
          <span className='text-lg'>{description}</span>
        </div>
        <Image 
          src={shape} 
          width={600} 
          height={600} 
          alt="Shape" 
          className="absolute top-0 right-0 -z-1 w-full"
        />
    </div>
  )
}

export default Card