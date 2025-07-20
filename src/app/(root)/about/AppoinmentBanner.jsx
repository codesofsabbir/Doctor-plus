import Button from "@/components/Button";
import React from "react";

function AppoinmentBanner() {
  return (
    <div className="bg-[url(https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/cs-overview.jpg)] md:w-8/10 h-fit bg-cover bg-center no-bg-no-repeat mx-auto md:rounded-[70px] md:py-40 py-20 flex justify-center md:justify-end">
      <div className="md:w-2/3">
        <h2 className="md:text-7xl text-white">
          Schedule Your Consultation Today!
        </h2>
        <Button
          buttonTitle={"Book Appoinment"}
          className="md:mt-20 mt-10"
          bgcolor="#ffffff"
        />
      </div>
    </div>
  );
}

export default AppoinmentBanner;
