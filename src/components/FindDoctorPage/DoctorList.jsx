"use client";
import { useEffect, useState } from "react";
import DoctorCard from "@/components/DoctorNavTab/DoctorCard";
import Filter from "./Filter";
import Pagination from "./Pagination";

export default function DoctorsList() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [selectedButtonId, setSelectedButtonId] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 8;

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const response = await fetch("http://localhost:5001/doctors");
        const data = await response.json();
        setDoctorsData(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      }
    }

    fetchDoctors();
  }, []);

  const filteredDoctors = doctorsData.filter((doctor) => {
    const matchName = doctor.name
      .toLowerCase()
      .includes(searchName.toLowerCase());

    const matchSpecialization = selectedButtonId
      ? doctor.specialization.toLowerCase() === selectedButtonId.toLowerCase()
      : true;

    return matchName && matchSpecialization;
  });

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );

  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  return (
    <div className="mt-20">
      <Filter
        onSearchChange={setSearchName}
        onSpecializationChange={setSelectedButtonId}
      />
      <div className="container mx-auto py-20">
        <ul className="grid grid-cols-4 gap-10">
          {currentDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              DoctorName={doctor.name}
              DoctorTitle={doctor.specialization}
              DoctorImageURL={doctor.photo}
              DoctorId={doctor.id}
            />
          ))}
        </ul>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
