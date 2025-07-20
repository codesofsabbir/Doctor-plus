"use client";
import DoctorCard from "@/components/DoctorNavTab/DoctorCard";
import Filter from "@/components/pages/Doctors/Filter";
import Pagination from "@/components/pages/Doctors/Pagination";
import React, { useEffect, useState } from "react";

function Page() {
  const [doctors, setDoctors] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [date, setDate] = useState(null);
  // const [selectedTime, setSelectedTime] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 8;

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  // const handleSelectedTime = ({ selectedTime }) => {
  //   setSelectedTime(selectedTime);
  //   // console.log(selectedTime);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/doctors");
        const doctorsData = await response.json();
        console.log("Fetched doctors:", doctorsData); // ✅ LOG HERE
        setDoctors(doctorsData);
      } catch (error) {
        console.error("Error fetching doctors data", error);
      }
    };
    fetchData();
  }, []);

  const currentDay = date ? date.format("dddd").toLowerCase() : null;

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesName = doctor.name
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" ||
      doctor.specialization.toLowerCase() === selectedDepartment.toLowerCase();

    // Apply availability filter only if date is selected
    const matchesAvailability = !date
      ? true
      : doctor.availability.some(
          (availability) => availability.day.toLowerCase() === currentDay
        );

    return matchesName && matchesDepartment && matchesAvailability;
  });

  const currentDoctors = filteredDoctors.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  return (
    <>
      <Filter
        searchName={searchName}
        setSearchName={setSearchName}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        date={date}
        setDate={setDate}
        // handleSelectedTime={handleSelectedTime}
      />
      <div className="container mx-auto grid grid-cols-4 gap-10">
        {currentDoctors?.map((doctor) => (
          <DoctorCard
            key={doctor._id}
            DoctorName={doctor.name}
            DoctorTitle={doctor.specialization}
            DoctorImageURL={doctor.image}
            DoctorId={doctor._id}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default Page;
