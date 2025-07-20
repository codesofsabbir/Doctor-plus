import React from "react";
import Image from "next/image";
import shape from "@/media/images/banner/shape.png";
import Link from "next/link";
function Card({ color, icon, title, description }) {
  const ColorText = `text-[${color}]`;
  const fullHover = `hover:text-white`;
  return (
    <Link
      href={""}
      className={`box w-full p-10 rounded-xl relative overflow-hidden group transition-all before:content-[''] before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-500 before:h-[2px] before:bg-yellow-500 before:bottom-0 before:left-0`}
      style={{ backgroundColor: color }}
    >
      <div className="relative z-10 flex gap-5 items-center">
        <i
          className={`icon text-4xl bg-white ColorText w-20 h-20 flex items-center justify-center rounded-full transition-all duration-300 group-hover:text-white`}
        >
          {icon}
        </i>
        <div>
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <span className="text-lg">{description}</span>
        </div>
      </div>
      <Image
        src={shape}
        width={600}
        height={600}
        alt="Shape"
        className="absolute top-0 right-0 -z-1 w-full"
      />
    </Link>
  );
}

export default Card;
