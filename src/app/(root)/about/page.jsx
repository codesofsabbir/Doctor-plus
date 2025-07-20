import Link from "next/link";
import TitleDes from "@/components/TitleDes";
import Button from "@/components/Button";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ClientReview from "@/components/Client_Review/ClientReview";
import Counter from "@/components/counter";
import React from "react";
import AboutDetails from "./AboutDetails";
import AppoinmentVideo from "./AppoinmentVideo";
import AppoinmentBanner from "./AppoinmentBanner";

function page() {
  return (
    <div className="w-full pb-20">
      <PageHeader className="" />
      <AboutDetails />
      <AppoinmentVideo />
      <AppoinmentBanner />
    </div>
  );
}

export default page;
