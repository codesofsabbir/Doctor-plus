'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { BiSolidQuoteAltRight } from "react-icons/bi";
import Image from 'next/image';

function ReviewSlider() {
  return (
    <div className='w-full bg-yellow-200 py-10'>
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={2000}
            loop={true}
            modules={[Autoplay]}
        >
            {[
                { name: "Sabbir Ahmed", img: "https://i.ibb.co.com/FJpDCQp/sabbir.jpg" },
                { name: "Mamun Or Rashid", img: "https://i.ibb.co.com/qrB3kYq/Imtiaz.jpg" },
                { name: "Mehedi Hasan", img: "https://i.ibb.co.com/g3XsQgv/mehedi.jpg" },
                { name: "Sahariyar Hasan", img: "https://i.ibb.co.com/5j2ZcgR/sahariyar.jpg" }
            ].map((review, index) => (
                <SwiperSlide key={index} className='w-full flex flex-col items-center text-center px-5 relative overflow-visible'>
                    <BiSolidQuoteAltRight className="text-4xl text-gray-700" />
                    <p className="text-lg italic my-4">The prenatal care was comprehensive, and the support I received from the clinic’s staff was outstanding. Doctor Plus truly prioritizes the well-being of their patients.</p>
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
                        <div className='absolute right-5 -bottom-5 flex gap-1'>
                            <div className='w-8 h-8 rounded-full bg-red-500'></div>
                            <div className='w-8 h-8 rounded-full bg-red-500'></div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
}

export default ReviewSlider;
