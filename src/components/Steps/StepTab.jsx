"use client";
import { useState, useEffect } from "react";

function StepTab({ steps, onSelect }) {
  const [activeTab, setActiveTab] = useState(steps[0]?.name || "");

  useEffect(() => {
    onSelect(activeTab);
  }, [activeTab, onSelect]);

  return (
    <div className="w-full flex justify-center gap-6 flex-wrap">
      {steps.map((step) => (
        <button
          key={step.id}
          onClick={() => setActiveTab(step.name)}
          className={`cursor-pointer px-6 py-3 rounded-2xl border transition-all duration-300 ${
            activeTab === step.name
              ? "bg-yellow-500 text-white border-yellow-500"
              : "border-yellow-500 text-yellow-500 hover:bg-yellow-100"
          }`}
        >
          {step.name}
        </button>
      ))}
    </div>
  );
}

export default StepTab;
