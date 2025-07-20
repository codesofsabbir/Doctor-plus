import React from "react";
import Title from "../Title";
import TitleDes from "../TitleDes";
import ReviewSlider from "./ReviewSlider";
import Image from "next/image";
import { CiFaceSmile } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import Counter from "../counter";
async function ClientReview() {
  const response = await fetch("http://localhost:5001/testimonial");
  const reviews = await response.json();
  return (
    <div className="w-full">
      <div className="mx-auto container">
        <div className="text-center">
          <Title title={"Testimonial"} />
          <TitleDes
            titleDes={"Experiences Shared By our Exteemed Patients"}
            className="py-7"
          />
          <ReviewSlider reviews={reviews} />
        </div>
      </div>
    </div>
  );
}

export default ClientReview;
