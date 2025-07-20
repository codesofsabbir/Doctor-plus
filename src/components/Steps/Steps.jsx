import React from "react";
import Title from "../Title";
import TitleDes from "../TitleDes";
import StepNavTab from "./StepNavTab";

async function Steps() {
  const response = await fetch("http://localhost:5001/taskStep");
  const steps = await response.json();
  return (
    <div className="w-full py-20">
      <div className="flex flex-col items-center pb-10">
        <Title title={"How It Works"} />
        <TitleDes titleDes={"Easy 3 Step to Task."} className="w-7/10" />
      </div>
      <StepNavTab steps={steps} />
    </div>
  );
}

export default Steps;
