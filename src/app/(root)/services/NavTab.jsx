"use client";
import React, { useState } from "react";

import ServicesNav from "./ServicesNav";
import ServiceTab from "./ServiceTab";
function NavTab() {
  const [selectedTab, setSelectedTab] = useState("Facial Procedures");
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <ServiceTab onSelect={setSelectedTab} />
      <ServicesNav selectedTab={selectedTab} />
    </div>
  );
}

export default NavTab;
