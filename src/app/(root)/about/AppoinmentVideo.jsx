import Button from "@/components/Button";
import ClientReview from "@/components/Client_Review/ClientReview";
import TitleDes from "@/components/TitleDes";
import Image from "next/image";
import React from "react";

function AppoinmentVideo() {
  return (
    <div className="bg-[#F0DA69] rounded-4xl md:mb-80 mb-10">
      <div className="w-full bg-gray-200 md:py-20 pb-28 rounded-b-[70px] md:rounded-b-[200px]">
        <div className="container mx-auto">
          <ClientReview />
        </div>
      </div>
      <div className="relative h-auto md:pb-96 pb-10">
        <div className="relative mx-auto flex flex-col justify-center items-center md:w-7/10 text-center md:h-screen mt-10 md:mt-0 px-5 md:px-0">
          <h3 className="text-xl font-semibold text-blue-950">
            Join our Dental Family
          </h3>
          <TitleDes
            titleDes={"Schedule Your Dental Exam with us!"}
            className="md:text-7xl md:leading-32"
          />
          <span className="text-xl text-blue-950 md:w-8/10 my-5 text-justify md:text-center">
            Take the first step towards a healthier smile: schedule your
            personalized consultation with our expert dental team today.
          </span>
          <Button
            buttonTitle={"Book Appointment"}
            className="my-10 text-white"
            bgcolor={"#20265B"}
          />
          <Image
            src={
              "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/cta-shape1.png"
            }
            alt="dental"
            width={400}
            height={400}
            className="object-contain w-40 absolute -left-20 top-3/4 hidden md:block"
          />
          <Image
            src={
              "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/cta-shape2.png"
            }
            alt="dental"
            width={400}
            height={400}
            className="object-contain w-20 absolute -right-20 top-3/4 hidden md:block"
          />
        </div>

        <div className="md:w-[80%] md:rounded-[100px] overflow-hidden md:absolute md:left-1/2 md:-translate-x-1/2 mt-5 md:mt-0 px-5 md:px-0">
          <video
            loop
            muted
            autoPlay
            poster="your-image.jpg"
            className="w-full h-2xl"
          >
            <source
              src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/video1-1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default AppoinmentVideo;
