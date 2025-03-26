'use client'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { BiSolidQuoteAltRight } from "react-icons/bi";
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ReviewSlider() {
    const swiperRef = useRef(null);

    return (
        <div className='w-full bg-[#e1f3ca] py-14 px-10 rounded-4xl relative'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                speed={2000}
                loop={true}
                modules={[Autoplay, Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {[
                    { name: "Sabbir Ahmed", img: "https://i.ibb.co/FJpDCQp/sabbir.jpg" },
                    { name: "Mamun Or Rashid", img: "https://i.ibb.co.com/qrB3kYq/Imtiaz.jpg" },
                    { name: "Mehedi Hasan", img: "https://i.ibb.co/g3XsQgv/mehedi.jpg" },
                    { name: "Sahariyar Hasan", img: "https://i.ibb.co/5j2ZcgR/sahariyar.jpg" }
                ].map((review, index) => (
                    <SwiperSlide key={index} className='w-full flex flex-col items-center text-center px-5 relative overflow-visible'>
                        <BiSolidQuoteAltRight className="text-7xl text-gray-700" />
                        <p className="text-lg italic my-4 text-justify">
                            The prenatal care was comprehensive, and the support I received from the clinic’s staff was outstanding. Doctor Plus truly prioritizes the well-being of their patients.
                        </p>
                        <div className='flex gap-4 items-center'>
                            <div className='w-12 h-12 rounded-full overflow-hidden'>
                                <Image 
                                    src={review.img}
                                    alt={review.name}
                                    width={48}
                                    height={48}
                                    className='object-cover'
                                />
                            </div>
                            <div>
                                <h3 className="font-bold">{review.name}</h3>
                                <span className="text-gray-600">Patient</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {/* Navigation Buttons */}
            <div className='absolute right-10 bottom-5 flex gap-1 z-[1]'>
                <button 
                    onClick={() => swiperRef.current?.slidePrev()} 
                    className='w-8 h-8 rounded-full flex items-center justify-center bg-white cursor-pointer'
                >
                    <IoIosArrowBack />
                </button>
                <button 
                    onClick={() => swiperRef.current?.slideNext()} 
                    className='w-8 h-8 rounded-full flex items-center justify-center bg-white cursor-pointer'
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
}

export default ReviewSlider;
