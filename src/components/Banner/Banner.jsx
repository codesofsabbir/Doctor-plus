import React from 'react'
import Image from 'next/image'
import Logo from '@/media/images/login/google.png'
import banner from '@/media/images/banner/banner.png'
import shape from '@/media/images/banner/shape.png'
import { FaStar } from "react-icons/fa";
import Title from '../Title'
import Button from '../Button'
function Banner() {
  return (
    <div className='w-full my-3'>
        <div className="container mx-auto">
            <div className="bg-blue-950 rounded-3xl px-5  md:pt-0 lg:flex lg:justify-between lg:pt-5 lg:px-20 gap-20 relative overflow-hidden">
                <div className="lg:w-1/2 pt-20">
                    <Title title={"Your Health, Our Priority"} bg="#E1F3CA"/>
                    <h2 className='text-4xl lg:text-7xl text-white font-bold py-5'>Doctor Plus Dedication to Excellence</h2>
                    <Button buttonTitle={"Discover More"} className='mt-5'/>
                    <div className='md:mt-10 my-5'>
                        <span className='text-white md:font-semibold'>Patients Feedback</span>
                        <div className='flex items-center gap-3 mt-3'>
                            <Image src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/google.png" width={300} height={300} alt="Logo" className="w-8 lg:w-12 lg:h-12"/>
                            <div className=''>
                                <div className='flex md:gap-2 md:text-xl text-yellow-500'>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <span className='text-white md:text-xl font-semibold'>Review 4.9/5.0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex lg:justify-end'>
                    <Image 
                        src={banner} 
                        width={500} 
                        height={500} 
                        alt="Banner" 
                        className="relative z-10 w-full md:w-1/2 lg:w-full"
                    />
                </div>
                <Image 
                    src={shape} 
                    width={600} 
                    height={600} 
                    alt="Shape" 
                    className="absolute top-0 right-0 w-[80%] lg:w-1/2 hidden lg:inline-block"
                />
            </div>
        </div>
    </div>
  )
}

export default Banner