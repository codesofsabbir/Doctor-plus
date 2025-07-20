"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/media/images/login/google.png";
import banner from "@/media/images/banner/banner.png";
// import banner from "@/media/images/banner/bg-img.png";
import Bg from "@/media/images/banner/bg.png";
import shape from "@/media/images/banner/shape.png";
import { FaPhoneAlt, FaStar, FaUserAlt } from "react-icons/fa";
import Title from "../Title";
import Button from "../Button";
import { FaChevronDown } from "react-icons/fa6";
function Banner() {
  const [specializations, setSpecializations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const specializationsRes = await fetch(
          "http://localhost:5001/specializations"
        );
        const specializationsData = await specializationsRes.json();
        setSpecializations(specializationsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="w-full mt-10 mb-40 relative">
      <div className="container mx-auto">
        <div
          className="rounded-3xl px-5  md:pt-0 lg:flex lg:justify-between lg:pt-5 lg:px-20 gap-20 relative overflow-hidden"
          style={{
            backgroundImage: `url(${Bg.src || Bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="lg:w-1/2 pt-20">
            <Title title={"Your Health, Our Priority"} bg="#E1F3CA" />
            <h2 className="text-4xl lg:text-7xl text-white font-bold py-5">
              Doctor Plus Dedication to Excellence
            </h2>
            <Button buttonTitle={"Discover More"} className="mt-5" />
            <div className="md:mt-10 my-5">
              <span className="text-white md:font-semibold">
                Patients Feedback
              </span>
              <div className="flex items-center gap-3 mt-3">
                <Image
                  src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/google.png"
                  width={300}
                  height={300}
                  alt="Logo"
                  className="w-8 lg:w-12 lg:h-12"
                />
                <div className="">
                  <div className="flex md:gap-2 md:text-xl text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-white md:text-xl font-semibold">
                    Review 4.9/5.0
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex lg:justify-end">
            <Image
              src={banner}
              width={500}
              height={500}
              alt="Banner"
              className="relative z-10 w-full md:w-1/2 lg:w-full"
            />
          </div>
          {/* <Image
            src={shape}
            width={600}
            height={600}
            alt="Shape"
            className="absolute top-0 right-0 w-[80%] lg:w-1/2 hidden lg:inline-block"
          /> */}
        </div>
      </div>

      <div className="w-8/10 mx-auto py-16 flex flex-wrap justify-center items-center gap-4 bg-white p-5 shadow-lg rounded-lg absolute z-[200] left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
        {/* Full Name Input */}
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full sm:w-64 py-3 pl-10 pr-4 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaUserAlt
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={18}
          />
        </div>

        {/* Phone Number Input */}
        <div className="relative w-full sm:w-auto">
          <input
            type="tel"
            placeholder="Phone No"
            className="w-full sm:w-64 py-3 pl-10 pr-4 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaPhoneAlt
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={18}
          />
        </div>

        {/* Service Selection */}
        <div className="relative w-full sm:w-auto">
          <select
            className="w-full sm:w-64 py-3 pl-4 pr-10 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Specializations</option>
            {specializations.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>

          <FaChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={18}
          />
        </div>

        {/* Booking Button */}
        <button className="bg-[#ff6e9d] cursor-pointer text-white py-3 px-6 rounded-lg hover:bg-yellow-00 transition-all">
          BOOKING NOW
        </button>
      </div>
    </div>
  );
}

export default Banner;
