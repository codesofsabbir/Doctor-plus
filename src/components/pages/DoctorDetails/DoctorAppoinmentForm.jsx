import React from "react";
import { TextField } from "@mui/material";
// import PatientDatePicker from "./DatePicker";

function DoctorAppoinmentForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const response = await fetch("/api/doctorAppoinment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, phone }),
    });
    const result = await response.json();
    console.log(result);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col gap-5 bg-gray-100 p-10 rounded-2xl"
    >
      <div className="grid grid-cols-3 gap-5">
        <TextField label="Patient Name" variant="outlined" name="name" />
        <TextField label="Phone" variant="outlined" name="phone" />
        {/* <PatientDatePicker /> */}
      </div>
      <button
        type="submit"
        className="bg-blue-950 py-3 text-white w-fit px-10 rounded-xl cursor-pointer"
      >
        Book Appoinment
      </button>
    </form>
  );
}

export default DoctorAppoinmentForm;
