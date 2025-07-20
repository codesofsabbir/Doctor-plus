"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

function Filter({ onSearchChange, onSpecializationChange }) {
  const swiperRef = useRef(null);
  const [selectButtons, setSelectButtons] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5001/specializations");
        const data = await response.json();
        setSelectButtons(data);
      } catch (error) {
        console.error("Failed to fetch specializations:", error);
      }
    }

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    onSearchChange(value);
  };

  const handleButtonClick = (id) => {
    setSelectedId(id);
    onSpecializationChange(id);
  };

  return (
    <div className="container mx-auto relative flex flex-col items-center gap-7 py-10 bg-cover bg-center bg-no-repeat rounded-4xl text-blue-950">
      <div className="relative w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Search by Name"
          className="border py-2 pl-10 pr-5 rounded-full w-full focus:outline focus:outline-amber-500"
          onChange={handleSearchChange}
        />
        <FaSearch className="absolute top-1/2 left-3 text-xl text-blue-950 -translate-y-1/2" />
      </div>

      <div className="w-full relative">
        <Swiper
          slidesPerView={8}
          slidesPerGroup={8}
          speed={200}
          modules={[Autoplay, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-9/10"
        >
          {selectButtons.map((button) => (
            <SwiperSlide key={button.id}>
              <div
                onClick={() => handleButtonClick(button.id)}
                className={`h-30 w-30 flex flex-col justify-center items-center gap-2 rounded-2xl text-black shadow text-center cursor-pointer p-4 transition-all duration-300 mx-5 ${
                  selectedId === button.id
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
    </div>
  );
}

export default Filter;
