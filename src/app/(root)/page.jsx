import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Blog from "@/components/Blog/Blog";
import ClientReview from "@/components/Client_Review/ClientReview";
import DoctorNavTab from "@/components/DoctorNavTab/DoctorNavTab";
import Footer from "@/components/Footer/Footer";
import Partners from "@/components/Partners/Partners";
import Services from "@/components/Services/Services";
import React from "react";

import {
  FaUserDoctor,
  FaHeadphonesSimple,
  FaRegCalendarPlus,
} from "react-icons/fa6";

import WhyWe from "@/components/WhyWe/WhyWe";
import Emargency from "@/components/Emargency/Emargency";
import Department from "@/components/Department/Department";
import Steps from "@/components/Steps/Steps";
function page() {
  return (
    <div>
      <Banner />
      <WhyWe />
      <Services />
      <Department />
      {/* <About /> */}
      <Emargency />
      <Steps />
      <ClientReview />
      <Partners />
      <Blog />
    </div>
  );
}

export default page;
