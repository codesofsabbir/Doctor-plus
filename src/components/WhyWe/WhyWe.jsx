import React from "react";
import TitleDes from "../TitleDes";
import Card from "../card/Card";
import Doctor from "@/svg/doctor";
import Calender from "@/svg/calender";
import Emargency from "@/svg/Emargency";
import Image from "next/image";
function WhyWe() {
  return (
    <div className="w-8/10 mx-auto mb-10 grid grid-cols-2 gap-10">
      <div>
        <TitleDes titleDes={"Why Choose Us"} className="text-start" />
        <p className="text-justify text-gray-600 py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, est
          tempore porro voluptate perspiciatis quidem suscipit et molestias
          adipisci dolorem!
        </p>

        <div className="flex flex-col justify-between gap-7">
          <Card
            color={"#b3c8fc"}
            title={"Find Doctors Near You"}
            description={"Trusted expertise is just a click away"}
            icon={<Doctor color={"#b3c8fc"} />}
          />
          <Card
            color={"#fed3c0"}
            title={"24/7 Emergency Care"}
            description={"Find essential information"}
            icon={<Emargency color={"#fed3c0"} />}
          />
          <Card
            color={"#f2bcfc"}
            title={"Online Appoinment Booking"}
            description={"Easy-to-use online booking system"}
            icon={<Calender color={"#f2bcfc"} />}
          />
        </div>
      </div>
      <div>
        <Image
          src={
            "https://html.imjol.com/physicmed/physicmed/assets/images/about21.png"
          }
          alt="image"
          width={500}
          height={500}
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}

export default WhyWe;

{
  /* <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-2 mx-5 md:mx-0">
  <div className="rounded-4xl group overflow-hidden md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
    <Image
      src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/choose1.jpg"
      alt="image"
      width={500}
      height={900}
      className="object-cover w-full h-full md:aspect-[3/4] group-hover:scale-110 transition-all duration-500"
    />
  </div>
  <div className="rounded-4xl h-fit overflow-hidden bg-purple-300 p-10 text-center md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
    <CiFaceSmile className="text-5xl mb-3 mx-auto" />
    <Counter
      target={25}
      prefix={"K"}
      className="text-3xl text-blue-950 font-bold"
    />
    <span className="text-lg text-blue-950">Happy Patients</span>
  </div>
  
  <div className="rounded-4xl group overflow-hidden md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-4">
    <Image
      src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/choose2.jpg"
      alt="image"
      width={700}
      height={700}
      className="object-cover w-full h-full md:aspect-[3/4] group-hover:scale-110 transition-all duration-500"
    />
  </div>
</div> */
}
