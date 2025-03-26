import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function DoctorCard({DoctorName, DoctorTitle, DoctorImageURL}) {
  return (
    <div className='group'>
        <div className="relative overflow-hidden rounded-3xl">
            <Image 
                src={DoctorImageURL}
                alt={DoctorName}
                width={500}
                height={500}
                className="object-contain group-hover:scale-110 transition-all duration-300 ease-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 w-4/5 bg-[#ffffffbd] rounded-full py-2 flex justify-between px-5 text-2xl text-xl lg:text-2xl transition-all duration-300 ease-out transform translate-y-5 group-hover:-translate-y-14">
                <FaFacebookF className="cursor-pointer"/>
                <FaXTwitter className="cursor-pointer"/>
                <FaInstagram className="cursor-pointer"/>
                <FaLinkedinIn className="cursor-pointer"/>
            </div>
        </div>

        <h2 className='mt-5 mb-3 text-xl text-blue-950 font-semibold hover:text-yellow-500 cursor-pointer'>{DoctorName}</h2>
        <span className='text-blue-950'>{DoctorTitle}</span>
    </div>
  )
}

export default DoctorCard