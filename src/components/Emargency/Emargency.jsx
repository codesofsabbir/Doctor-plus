import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Doctor from "@/svg/doctor";
import EmargencyIcon from "@/svg/Emargency";
import WomenCare from "@/svg/women-care";
import UrgentCare from "@/svg/urgent-care";
import MentalHealth from "@/svg/mental-health";
import HeartBeat from "@/svg/heart-beat";
function Emargency() {
  return (
    <div className="flex flex-col gap-7 justify-center items-center py-32 bg-red-100 relative">
      <Image
        src={
          "https://html.imjol.com/physicmed/physicmed/assets/images/emergemcy_vec3.png"
        }
        alt="24/7"
        width={150}
        height={150}
        className="object-contain w-20"
      />
      <h2 className="text-6xl font-black text-blue-950">
        Need An Emergency Help
      </h2>
      <button className="flex justify-center items-center text-white font-semibold gap-2 text-lg px-16 py-5 rounded-2xl bg-[#ff6e9d] group cursor-pointer">
        <FaPhoneAlt />{" "}
        <span className="group-hover:underline">+ 01303-142498</span>
      </button>
      <div className="absolute left-20">
        <EmargencyIcon color={"#ff6e9d"} />
      </div>
      <div className="absolute right-20">
        <Doctor color={"#ff6e9d"} />
      </div>
      <div className="absolute left-48 top-20">
        <WomenCare color={"#ff6e9d"} />
      </div>
      <div className="absolute right-48 top-20">
        <UrgentCare color={"#ff6e9d"} />
      </div>
      <div className="absolute left-48 bottom-20">
        <MentalHealth color={"#ff6e9d"} />
      </div>
      <div className="absolute right-48 bottom-20">
        <HeartBeat color={"#ff6e9d"} />
      </div>
    </div>
  );
}

export default Emargency;
