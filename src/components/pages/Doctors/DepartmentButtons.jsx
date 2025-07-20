import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function DepartmentButtons({ selectedDepartment, setSelectedDepartment }) {
  const swiperRef = useRef(null);
  const [departmentButtons, setDepartmentButtons] = useState([]);
  const [selectedButtonId, setSelectedButtonId] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/specializations");
        const buttons = await response.json();
        setDepartmentButtons(buttons);
      } catch (error) {
        console.error("Error fetching department buttons:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative">
      <Swiper
        slidesPerView={8}
        slidesPerGroup={8}
        speed={200}
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-9/10"
      >
        <SwiperSlide key="all">
          <div
            onClick={() => setSelectedDepartment("all")}
            className={`h-30 w-30 flex flex-col justify-center items-center gap-2 rounded-2xl text-black shadow text-center cursor-pointer p-4 transition-all duration-300 mx-5 ${
              selectedButtonId === "all"
                ? "bg-blue-900 shadow-yellow-400 shadow-lg"
                : "bg-blue-900 shadow-black"
            }`}
          >
            <span className="text-xl">🌐</span>
            <h3 className="text-white text-xs">All</h3>
          </div>
        </SwiperSlide>

        {departmentButtons.map((button) => (
          <SwiperSlide key={button.id}>
            <div
              onClick={() => setSelectedDepartment(button.id)}
              className={`h-30 w-30 flex flex-col justify-center items-center gap-2 rounded-2xl text-black shadow text-center cursor-pointer p-4 transition-all duration-300 mx-5 ${
                selectedButtonId === button.id
                  ? "bg-blue-900 shadow-yellow-400 shadow-lg"
                  : "bg-blue-900 shadow-black"
              }`}
            >
              <span className="text-xl">{button.icon}</span>
              <h3 className="text-white text-xs">{button.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="w-10 h-10 text-xl rounded-full flex items-center justify-center text-white bg-blue-950 cursor-pointer absolute top-1/2 -translate-y-1/2 left-5"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="w-10 h-10 text-xl rounded-full flex items-center justify-center text-white bg-blue-950 cursor-pointer absolute top-1/2 -translate-y-1/2 right-5"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default DepartmentButtons;
