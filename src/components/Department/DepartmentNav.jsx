import React from "react";
import Button from "../Button";
import Image from "next/image";

function DepartmentNav({ selectedTab }) {
  if (!selectedTab) return null;
  // console.log(selectedTab);

  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="">
        <span className="text-xl">
          Service ID:- {selectedTab.id} {selectedTab.icon}
        </span>
        <h2 className="text-5xl">{selectedTab.name}</h2>
        <p className="text-gray-600 leading-6 pt-5 pb-3 text-justify">
          {selectedTab.description}
        </p>
        <div>
          {selectedTab.shortList.map((listItem) => (
            <li key={listItem} className="text-lg list-inside list-none italic">
              <span className="mr-2">✔</span>
              {listItem}
            </li>
          ))}
        </div>
        <Button buttonTitle={"View Details"} className="mt-10"></Button>
      </div>
      <div className="rounded-2xl overflow-hidden">
        <Image
          src={selectedTab.image}
          alt={selectedTab.name}
          width={500}
          height={500}
          className="object-contain w-full"
        />
      </div>
    </div>
  );
}

export default DepartmentNav;
