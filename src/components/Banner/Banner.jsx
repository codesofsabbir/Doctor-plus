import React from 'react'
import Image from 'next/image'
import Logo from '@/media/images/login/google.png'
import banner from '@/media/images/banner/banner.png'
import shape from '@/media/images/banner/shape.png'
import { FaStar } from "react-icons/fa";
import Title from '../Title'
function Banner() {
  return (
    <div className='w-full mt-24 mb-10'>
        <div className="w-[90%] mx-auto">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-20 px-5 lg:px-20 lg:pt-5 pt-5 bg-blue-950 rounded-3xl relative overflow-hidden">
                <div className="details w-full lg:w-1/2 mt-20">
                    <Title title={"Your Health, Our Priority"}/>
                    <h2 className='text-4xl lg:text-7xl text-white font-bold py-5'>Doctor Plus Dedication to Excellence</h2>
                    <button className='bg-blue-600 rounded-full py-2 px-7 text-white'>Discover More</button>
                    <div className='mt-10'>
                        <span className='text-white font-semibold'>Patients Feedback</span>
                        <div className='flex gap-3 mt-3'>
                            <Image src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/google.png" width={300} height={300} alt="Logo" className="w-8 lg:w-12"/>
                            <div className=''>
                                <div className='flex gap-2'>
                                    <FaStar className='text-yellow-500 text-xl'/>
                                    <FaStar className='text-yellow-500 text-xl'/>
                                    <FaStar className='text-yellow-500 text-xl'/>
                                    <FaStar className='text-yellow-500 text-xl'/>
                                    <FaStar className='text-yellow-500 text-xl'/>
                                </div>
                                <span className='text-white text-xl font-semibold'>Review 4.9/5.0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 relative flex justify-center lg:justify-end'>
                    <Image 
                        src={banner} 
                        width={500} 
                        height={500} 
                        alt="Banner" 
                        className="relative z-10 w-[80%] lg:w-full"
                    />
                </div>
                <Image 
                    src={shape} 
                    width={600} 
                    height={600} 
                    alt="Shape" 
                    className="absolute top-0 right-0 lg:right-[-20px] -z-1 w-[80%] lg:w-1/2 hidden lg:inline-block"
                />
            </div>
        </div>
    </div>
  )
}

export default Banner