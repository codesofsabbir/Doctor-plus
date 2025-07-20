"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Button({ className }) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/doctors");
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-[#fdc417] hover:bg-yellow-500 transition-all duration-150 rounded-lg px-10 py-2 text-white font-bold cursor-pointer ${className}`}
    >
      Appointment
    </button>
  );
}

export default Button;
