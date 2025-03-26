import React from 'react'
import Title from '../Title'
import TitleDes from '../TitleDes'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import Button from '../Button';
import Image from 'next/image';
import Link from 'next/link';
import Counter from '../counter';
function About() {
  return (
    <div className='w-full py-5 bg-[#f1f1f1]'>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className='relative lg:flex justify-center items-center hidden'>
                <Image 
                    src={"https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/about1.jpg"}
                    alt='Image'
                    width={500}
                    height={500}
                    className='object-contain w-3/5 rounded-4xl absolute left-1/8 z-[1]'
                />
                <div className='w-3/7 p-5 rounded-4xl absolute top-5 right-16 bg-white z-10'>
                    <div className="relative overflow-hidden rounded-2xl">
                        <img 
                        src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/wrap.jpg" 
                        alt="Video Thumbnail" 
                        className="w-full rounded-2xl"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white w-14 h-14 flex justify-center items-center rounded-full shadow-md cursor-pointer">
                                <FaPlay className="text-yellow-500 text-3xl" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 h-3 w-3/4 bg-gray-200 rounded-full"></div>
                    <div className="mt-2 h-3 w-2/3 bg-gray-200 rounded-full"></div>
                </div>
                <Image 
                    src={"https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/about-shape1.png"}
                    alt='Image'
                    width={500}
                    height={500}
                    className='object-contain w-3/7 rounded-4xl absolute left-0 top-0'
                />
                <Image 
                    src={"https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/about-shape3.png"}
                    alt='Image'
                    width={500}
                    height={500}
                    className='object-contain w-3/7 rounded-4xl absolute left-0 -bottom-10'
                />
                <Image 
                    src={"https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/about-shape2.png"}
                    alt='Image'
                    width={500}
                    height={500}
                    className='object-contain w-1/3 rounded-4xl absolute right-1/12 top-4/9'
                />
                <div className='absolute right-10 bottom-5 z-[2] w-fit h-fit bg-white rounded-4xl p-5 flex items-center gap-5'>
                    <i className='h-16 w-16 rounded-full bg-[#eebcff] flex justify-center items-center'>
                        <FaAward className='text-3xl'/>
                    </i>
                    <div>
                        <Counter target={40} className='text-4xl text-blue-900 font-bold'/>
                        <span className='text-base text-blue-950'>Global Healthcare Awards</span>
                    </div>
                </div>
            </div>

            <div className='lg:mt-1'>
                <Title title={"About Us"} />
                <TitleDes titleDes={"Unveiling Mavis: The Heartbeat of Healthcare"} className='text-start'/>
                <p className='text-lg font-thin py-5 text-blue-950'>At Mavis Clinic, your health and well-being are at the heart of everything we do. We understand that each patient is unique, and we are dedicated to providing personalized, compassionate care tailored to your specific needs.</p>
                <div className='w-full p-5 rounded-4xl bg-white lg:hidden'>
                    <div className="relative overflow-hidden rounded-2xl">
                        <img 
                        src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/wrap.jpg" 
                        alt="Video Thumbnail" 
                        className="w-full rounded-2xl"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white w-14 h-14 flex justify-center items-center rounded-full shadow-md cursor-pointer">
                                <FaPlay className="text-yellow-500 text-3xl" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 h-3 w-3/4 bg-gray-200 rounded-full"></div>
                    <div className="mt-2 h-3 w-2/3 bg-gray-200 rounded-full"></div>
                </div>
                <ul className='flex flex-col gap-2 mb-5 text-blue-950'>
                    <li className='flex gap-5 items-center text-xl'><i><IoIosCheckmarkCircle className='text-3xl'/></i><span>Comprehensive Medical Services</span></li>
                    <li className='flex gap-5 items-center text-xl'><i><IoIosCheckmarkCircle className='text-3xl'/></i><span>Patient-Centric Approach</span></li>
                    <li className='flex gap-5 items-center text-xl'><i><IoIosCheckmarkCircle className='text-3xl'/></i><span>State-of-the-Art Facilities</span></li>
                    <li className='flex gap-5 items-center text-xl'><i><IoIosCheckmarkCircle className='text-3xl'/></i><span>Convenient Appointment Booking</span></li>
                </ul>
                <h3 className='text-lg text-blue-950'>Our dedicated team of medical professionals is here to guide you on your health journey. From our experienced doctors to our skilled support staff.</h3>
                <Button buttonTitle={"More About Us"} className='my-12'/>
            </div>
        </div>
        <div className="mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14">
            <div className='w-full px-16 py-20 bg-[#e1f3ca] rounded-4xl'>
                <h2 className='text-2xl font-bold text-blue-950'>Unlock Your Wellness Journey</h2>
                <span className='text-lg text-blue-950'>Your Health, Your Way. Secure Your Consultation Appointment!</span>
                <Link href={""} className='flex items-center gap-3 font-bold mt-20 hover:tracking-wider hover:text-blue-500 transition-all duration-500'>Book An Appoinment <i><FaArrowRightLong /></i></Link>
            </div>
            <div className='w-full px-16 py-20 bg-blue-200 rounded-4xl'>
                <h2 className='text-2xl font-bold text-blue-950'>Unlock Your Wellness Journey</h2>
                <span className='text-lg text-blue-950'>Your Health, Your Way. Secure Your Consultation Appointment!</span>
                <Link href={""} className='flex items-center gap-3 font-bold mt-20 hover:tracking-wider hover:text-blue-500 transition-all duration-500'>Book An Appoinment <i><FaArrowRightLong /></i></Link>
            </div>
        </div>
    </div>
  )
}

export default About