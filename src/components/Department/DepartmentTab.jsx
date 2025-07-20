"use client";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
function DepartmentTab({ departments, onSelect }) {
  const [activeTab, setActiveTab] = useState(departments[0]?.name || "");

  useEffect(() => {
    onSelect(activeTab);
  }, [activeTab, onSelect]);
  return (
    <div>
      <div className="relative w-fit mx-auto">
        <select
          name=""
          id=""
          onChange={(e) => setActiveTab(e.target.value)}
          className="px-10 py-5 text-blue-950 text-lg border rounded-lg bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
        >
          {departments.map((department) => (
            <option key={department.id} value={department.name}>
              {department.icon} {department.name}
            </option>
          ))}
        </select>
        <FaChevronDown
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={18}
        />
      </div>
    </div>
  );
}

export default DepartmentTab;
