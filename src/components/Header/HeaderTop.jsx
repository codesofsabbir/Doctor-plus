import Link from 'next/link'
import React from 'react'
import { MdLocalPhone, MdOutlineLocationOn, MdArrowRightAlt } from "react-icons/md";
function HeaderTop() {
  return (
    <div className='bg-[#e1f3ca] w-full text-blue-950'>
        <div className="mx-auto w-[90%] py-[15px] md:flex justify-between items-center">
            <div className='md:flex gap-5 text-[15px] text-[#20265b]'>
                <p className=''>We understand that each patient is unique</p>
                <Link href={""} className='flex items-center gap-2 font-semibold'>Learn More <span><MdArrowRightAlt className='text-2xl'/></span></Link>
            </div>
            <div className='flex flex-wrap gap-3 md:gap-10 text-[14px] text-[#20265b] mt-3 md:mt-0'>
                <Link href={""} className='flex gap-2.5 items-center'><i><MdLocalPhone /></i><span className='font-semibold'>+88013-03142498</span></Link>
                <Link href={""} className='flex gap-2.5 items-center'><i><MdOutlineLocationOn /></i><span>Find Location</span></Link>
                <Link href={""} className='items-center '><span>Pay Your Bill</span></Link>
            </div>
        </div>

    </div>
  )
}

export default HeaderTop