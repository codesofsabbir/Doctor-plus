import Image from "next/image";
import React from "react";
import Button from "../Button";

function StepNav({ selectedTab }) {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-10">
      <div className="w-fit rounded-2xl overflow-hidden ">
        <Image
          src={selectedTab.image}
          alt={selectedTab.name}
          width={500}
          height={500}
          className="object-cover h-[450px]"
        />
      </div>
      <div>
        <span className="text-2xl">Step- {selectedTab.id}</span>
        <h2 className="text-4xl font-semibold py-2">{selectedTab.title}</h2>
        <p className="text-justify text-gray-700 pb-5">
          {selectedTab.description}
        </p>
        {selectedTab.bullets.map((bullet, index) => (
          <li key={index} className="list-inside list-none italic">
            <span className="mr-2">✔</span>
            {bullet}
          </li>
        ))}
        <Button buttonTitle={"Book Now"} className="mt-10" />
      </div>
    </div>
  );
}

export default StepNav;
