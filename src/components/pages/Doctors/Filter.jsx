import React from "react";
import { FaSearch } from "react-icons/fa";
import DepartmentButtons from "./DepartmentButtons";
import MyDatePicker from "./MyDatePicker";
import dayjs from "dayjs";
function Filter({
  setSearchName,
  selectedDepartment,
  setSelectedDepartment,
  date,
  setDate,
}) {
  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div className="py-12">
      <div className="relative w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Search by Name"
          className="border py-2 pl-10 pr-5 rounded-full w-full focus:outline focus:outline-amber-500"
          onChange={handleSearchChange}
        />
        <FaSearch className="absolute top-1/2 left-3 text-xl text-blue-950 -translate-y-1/2" />
      </div>
      <div className="my-12 flex gap-5 justify-center">
        <MyDatePicker
          date={date}
          setDate={setDate}
          minDate={dayjs().startOf("day")}
        />
        {/* <MyTimePicker handleSelectedTime={handleSelectedTime} /> */}
        <button
          onClick={() => setDate(null)}
          className="bg-gray-200 px-4 py-2 rounded cursor-pointer"
        >
          Clear Date
        </button>
      </div>
      <div>
        <DepartmentButtons
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
        />
      </div>
    </div>
  );
}

export default Filter;
