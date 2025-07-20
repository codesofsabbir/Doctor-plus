"use client";
import React, { useState } from "react";
import StepTab from "./StepTab";
import StepNav from "./StepNav";
function StepNavTab({ steps }) {
  const [selectedTab, setSelectedTab] = useState(steps[0]);
  return (
    <div className="container mx-auto">
      <StepTab
        onSelect={(name) =>
          setSelectedTab(steps.find((step) => step.name === name))
        }
        steps={steps}
      />
      <div className="bg-gray-100 rounded-4xl p-20 my-10">
        <StepNav selectedTab={selectedTab} />
      </div>
    </div>
  );
}

export default StepNavTab;
