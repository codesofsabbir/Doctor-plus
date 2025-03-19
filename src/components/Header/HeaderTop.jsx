import Link from 'next/link'
import React from 'react'
import { MdLocalPhone, MdOutlineLocationOn, MdArrowRightAlt } from "react-icons/md";
function HeaderTop() {
  return (
    <div className='bg-[#e1f3ca] w-full text-blue-950'>
        <div className="mx-auto w-[90%] h-12 flex justify-between items-center">
            <div className='flex gap-5'>
                <p className='text-lg text-[#20265b]'>We understand that each patient is unique</p>
                <Link href={""} className='flex items-center gap-2 text-lg text-[#20265b]'>Learn More <span><MdArrowRightAlt className='text-2xl'/></span></Link>
            </div>
            <div className='flex gap-10'>
                <Link href={""} className='flex gap-2.5 items-center text-lg text-[#20265b]'><i><MdLocalPhone /></i><span className='font-semibold'>+88013-03142498</span></Link>
                <Link href={""} className='flex gap-2.5 items-center text-lg text-[#20265b]'><i><MdOutlineLocationOn /></i><span>Find Location</span></Link>
                <Link href={""} className='flex gap-2.5 items-center text-lg text-[#20265b]'><span>Pay Your Bill</span></Link>
            </div>
        </div>

    </div>
  )
}

export default HeaderTop