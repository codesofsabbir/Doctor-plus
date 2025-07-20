import React from "react";
import Title from "../Title";
import TitleDes from "../TitleDes";

import NavTab from "./NavTab";
import DepartmentTab from "./DepartmentTab";
import DepartmentNav from "./DepartmentNav";
async function Department() {
  const response = await fetch("http://localhost:5001/departments");
  const departments = await response.json();
  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center pb-10">
          <Title title={"Our Department"} />
          <TitleDes
            titleDes={
              "Our specialized medical departments, each staffed by expert doctors."
            }
            className="w-7/10"
          />
        </div>
        <NavTab departments={departments} />
      </div>
    </div>
  );
}

export default Department;
