import React from "react";
import { CiFaceSmile, CiPlay1 } from "react-icons/ci";
import { FaGoogle, FaStar, FaUserDoctor } from "react-icons/fa6";
import Image from "next/image";
import Counter from "@/components/counter";
import Button from "@/components/Button";
import VideoPopup from "./VideoPopup";
function AboutDetails() {
  return (
    <div className="w-full bg-[#fdf3f3] p-20 mt-10">
      <div className="w-9/10 mx-auto ">
        <div className="grid md:grid-cols-2">
          <div className="relative ">
            <Image
              src={
                "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/about4.jpg"
              }
              alt="doctors"
              width={500}
              height={500}
              className="w-[80%] object-contain rounded-4xl"
            />
            <div className="w-3/7 p-5 rounded-4xl absolute top-0 right-10 z-10">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/star2.png"
                  alt="Video Thumbnail"
                  width={500}
                  height={500}
                  className="w-full rounded-2xl spin"
                />
                <div className="absolute inset-0 flex items-center justify-center ">
                  <VideoPopup />
                </div>
              </div>
            </div>
            <div className="absolute left-1/4 bottom-5 z-[2] bg-[#A070A1] rounded-4xl px-16 py-10 flex items-center gap-5">
              <div className="leading-7">
                <span className="text-lg text-white tracking-widest">
                  4.9 Average Rating
                </span>
                <div className="flex text-yellow-500 gap-1 text-lg">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className=" text-blue-950 text-lg ">Review 4.9/5.0</span>
              </div>
            </div>
          </div>

          <div className="h-full">
            <h2 className="text-5xl text-blue-950">
              Welcome to Doctor Plus, your trusted destination for expert care.
            </h2>
            <p className="my-5 text-lg text-justify">
              At Doctor Plus, we are committed to providing high-quality medical
              services with compassion and professionalism. Whether you’re
              seeking routine check-ups, specialized treatments, or expert
              advice, our experienced team of healthcare professionals is here
              to support your journey to better health. With modern facilities
              and a patient-centered approach, Doctor Plus ensures you receive
              the personalized care you deserve—every step of the way.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div className="rounded-4xl h-fit overflow-hidden bg-blue-200 py-5 text-center ">
                <FaUserDoctor className="text-5xl mb-3 mx-auto" />
                <Counter
                  target={40}
                  prefix={""}
                  className="text-3xl text-blue-950 font-bold"
                />
                <span className="text-lg text-blue-950">Quality Doctors</span>
              </div>
              <div className="rounded-4xl h-fit overflow-hidden bg-purple-300 py-5 text-center">
                <CiFaceSmile className="text-5xl mb-3 mx-auto" />
                <Counter
                  target={25}
                  prefix={"K"}
                  className="text-3xl text-blue-950 font-bold"
                />
                <span className="text-lg text-blue-950">Happy Patients</span>
              </div>
            </div>
            <Button buttonTitle={"Schedule Now"} className="mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
