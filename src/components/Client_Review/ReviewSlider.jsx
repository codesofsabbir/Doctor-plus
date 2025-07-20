"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

function ReviewSlider({ reviews }) {
  const swiperRef = useRef(null);
  return (
    <div className="w-full relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        slidesPerGroup={2}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={2000}
        loop={true}
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="w-full flex flex-col items-center text-center px-16 relative overflow-visible bg-[#e1f3ca] py-14 rounded-4xl"
          >
            <BiSolidQuoteAltRight className="text-7xl text-gray-700" />
            <p className="text-lg italic my-4 text-justify">
              The prenatal care was comprehensive, and the support I received
              from the clinic’s staff was outstanding. Doctor Plus truly
              prioritizes the well-being of their patients.
            </p>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={408}
                  height={408}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-bold">{review.name}</h3>
                <span className="text-gray-600">Patient</span>
                <div className="flex mt-2 gap-1">
                  {Array(review.rating)
                    .fill()
                    .map((_, index) => (
                      <FaStar
                        key={`yellow-${index}`}
                        className="md:text-lg text-yellow-500"
                      />
                    ))}
                  {Array(5 - review.rating)
                    .fill()
                    .map((_, index) => (
                      <FaStar
                        key={`gray-${index}`}
                        className="md:text-lg text-gray-600"
                      />
                    ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute right-10 bottom-5 flex gap-1 z-[1]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-white cursor-pointer"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-white cursor-pointer"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default ReviewSlider;
