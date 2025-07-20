"use client";
import React, { useState } from "react";
import DepartmentTab from "./DepartmentTab";
import DepartmentNav from "./DepartmentNav";

function NavTab({ departments }) {
  const [selectedTab, setSelectedTab] = useState(departments[0]);

  return (
    <div className="container mx-auto">
      <DepartmentTab
        onSelect={(name) =>
          setSelectedTab(departments.find((dept) => dept.name === name))
        }
        departments={departments}
      />
      <div className="bg-gray-100 rounded-4xl p-20 my-10">
        <DepartmentNav selectedTab={selectedTab} />
      </div>
    </div>
  );
}

export default NavTab;
