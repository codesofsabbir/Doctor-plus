"use client";
import Services from "@/components/Services/Services";
import Link from "next/link";
import { usePathname } from "next/navigation";
import pageBg from "@/media/images/banner/pageBg.png";
import React from "react";
function PageHeader({ className = "" }) {
  const pathname = usePathname();
  const title = pathname.substring(1);
  return (
    <div
      className={`w-9/10 mx-auto mt-10 rounded-4xl py-5 md:py-24 flex flex-col justify-center items-center gap-5 bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${pageBg.src || pageBg})` }}
    >
      <h2 className="text-2xl md:text-4xl font-bold text-white capitalize">
        {title}
      </h2>
      <Link href={"/"}>
        <li className="list-none px-10 py-2 md:px-16 md:py-3 rounded-full bg-[#f0da6a] md:text-lg text-blue-950">
          Home
        </li>
      </Link>
    </div>
  );
}

export default PageHeader;
