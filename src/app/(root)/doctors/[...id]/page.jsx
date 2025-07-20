"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import pageBg from "@/media/images/banner/pageBg.png";
import BackButton from "@/components/BackButton";
import Image from "next/image";
import Title from "@/components/Title";

import {
  FaHeadphones,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import DoctorAppoinmentForm from "@/components/pages/DoctorDetails/DoctorAppoinmentForm";
function page() {
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await fetch(`/api/doctors/${id}`);
        const data = await res.json();
        setDoctorDetails(data);
      } catch (error) {
        console.error("Error fetching doctor:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchDoctor();
  }, [id]);
  if (loading) return <div>Loading...</div>;
  if (!doctorDetails) return <div>Doctor not found</div>;
  return (
    <div className="w-full pb-20">
      <div
        className={`w-9/10 mx-auto mt-10 rounded-4xl py-5 md:py-24 flex flex-col justify-center items-center gap-5 bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${pageBg.src || pageBg})` }}
      >
        <span className="text-white text-lg">Meet Our Specialist</span>
        <h2 className="text-2xl md:text-4xl font-bold text-white capitalize">
          {doctorDetails.name}
        </h2>
        <BackButton />
      </div>

      <div className="w-9/10 mx-auto grid grid-cols-3 gap-10 my-10 py-20">
        <div className="col-span-1">
          <div className="text-center mb-10 bg-gray-100 pb-10 rounded-2xl overflow-hidden">
            <Image
              src={doctorDetails.image}
              alt={doctorDetails.name}
              width={500}
              height={500}
              className="w-full object-left-top object-cover h-[450px]"
            />
            <h2 className="text-4xl font-semibold text-blue-950 mt-5">
              {doctorDetails.name}
            </h2>
            <h3 className="text-blue-950">{doctorDetails.education.title}</h3>
            <span className="text-lg text-blue-950 capitalize">
              {doctorDetails.specialization}
            </span>
          </div>
          <h2 className="px-5 py-3 rounded bg-[#1ac167] text-2xl text-white  my-10">
            Appoinment Fee: <span>{doctorDetails?.appointmentFee}</span>
          </h2>
          <div className="text-center mb-10 bg-gray-100 pb-10 rounded-2xl overflow-hidden text-blue-950 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold text-blue-950 my-5">
              Contact Info
            </h2>
            <li className="flex gap-5 justify-center items-center">
              <FaPhoneAlt /> <span>{doctorDetails.phone}</span>
            </li>
            <li className="flex gap-5 justify-center items-center">
              <FaMailBulk /> <span>{doctorDetails.email}</span>
            </li>
            <h3 className="text-2xl mt-3">Social Media</h3>
            <div className="flex gap-5 mt-3">
              <Link
                href={doctorDetails.socialMedia.facebook}
                className="h-10 w-10 rounded-full bg-blue-950 flex justify-center items-center"
              >
                <FaFacebookF className="text-white" />
              </Link>
              <Link
                href={doctorDetails.socialMedia.instagram}
                className="h-10 w-10 rounded-full bg-blue-950 flex justify-center items-center"
              >
                <FaInstagram className="text-white" />
              </Link>
              <Link
                href={doctorDetails.socialMedia.twitter}
                className="h-10 w-10 rounded-full bg-blue-950 flex justify-center items-center"
              >
                <FaTwitter className="text-white" />
              </Link>
              <Link
                href={doctorDetails.socialMedia.linkedIn}
                className="h-10 w-10 rounded-full bg-blue-950 flex justify-center items-center"
              >
                <FaLinkedinIn className="text-white" />
              </Link>
            </div>
          </div>

          <div className="bg-[#1ac167] flex gap-5 items-center text-white py-12 justify-center rounded-2xl">
            <FaHeadphones className="text-7xl" />
            <div>
              <h2 className="text-3xl">Emargency Case</h2>
              <h3 className="text-lg italic">{doctorDetails.address.clinic}</h3>
              <span className="text-sm italic">
                {doctorDetails.address.city}, {doctorDetails.address.area}
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div>
            <Title title={"About Me"} />
            <p className="mt-5 p-8 bg-gray-100 rounded-2xl text-justify text-blue-950">
              {doctorDetails.bio}
            </p>
          </div>
          <div className="my-10">
            <Title title={"Education"} />

            <table className="table-auto border border-gray-300 w-full mt-5">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Title</th>
                  <th className="border px-4 py-2">Passing Year</th>
                  <th className="border px-4 py-2">Department</th>
                  <th className="border px-4 py-2">Institute Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    {doctorDetails.education.title}
                  </td>
                  <td className="border px-4 py-2">
                    {doctorDetails.education.passingYear}
                  </td>
                  <td className="border px-4 py-2">
                    {doctorDetails.education.department}
                  </td>
                  <td className="border px-4 py-2">
                    {doctorDetails.education.instituteName}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-10">
            <Title title={"Experience"} />

            <table className="table-auto border border-gray-300 w-full mt-5">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Passing Year</th>
                  <th className="border px-4 py-2">Department</th>
                  <th className="border px-4 py-2">Institute Name</th>
                </tr>
              </thead>
              <tbody>
                {doctorDetails.experience.positions.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{item.year}</td>
                    <td className="border px-4 py-2">{item.position}</td>
                    <td className="border px-4 py-2">{item.instituteName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="my-10">
            <Title title={"Availability"} />

            <table className="table-auto border border-gray-300 w-full mt-5">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Day</th>
                  <th className="border px-4 py-2">Starting Time</th>
                  <th className="border px-4 py-2">End Time</th>
                </tr>
              </thead>
              <tbody>
                {doctorDetails.availability.map((available, index) =>
                  available.slots.map((slot) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{available.day}</td>
                      <td className="border px-4 py-2">{slot.startTime}</td>
                      <td className="border px-4 py-2">{slot.endTime}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div>
            <Title title={"Book An Appoinment"} />
            <DoctorAppoinmentForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
