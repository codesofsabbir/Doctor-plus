"use client";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import pageBg from "@/media/images/banner/pageBg.png";
import BackButton from "@/components/BackButton";
import Image from "next/image";
import Title from "@/components/Title";
import {
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import { FaFacebookF, FaCamera } from "react-icons/fa6";
function Page() {
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const sessionData = await getSession();
      if (!sessionData?.user?.id) {
        console.error("Session or user ID not found");
        setLoading(false);
        return;
      }
      const id = sessionData.user.id;
      console.log("doctor id:", id);
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

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full pb-20">
      <div className="w-9/10 mx-auto mt-16">
        <Title
          title={"Profile Settings"}
          className={`text-blue-950 text-2xl`}
        />
      </div>
      <div className="w-9/10 mx-auto grid grid-cols-3 gap-10 pt-20">
        <div className="col-span-1">
          <div className="text-center mb-10 pb-10 rounded-2xl">
            <div className="relative w-fit rounded-full overflow-hidden group mx-auto">
              <Image
                src={doctorDetails.image}
                alt={doctorDetails.name}
                width={350}
                height={350}
                className="object-cover object-left-top bg-black rounded-full h-[400px] w-full"
              />
              <div className="w-full bg-[#000b] h-2/5 absolute bottom-0 translate-y-full left-0 flex justify-center items-center group-hover:translate-y-0 transition-all duration-200 ease-in  group/overlay cursor-pointer">
                <FaCamera className="text-3xl text-white transition-all duration-200 ease-in group-hover/overlay:text-4xl" />
              </div>
            </div>
            <h2 className="text-4xl font-semibold text-blue-950 mt-5">
              {doctorDetails.name}
            </h2>
            <h3 className="text-blue-950">{doctorDetails.education.title}</h3>
            <span className="text-lg text-blue-950 capitalize">
              {doctorDetails.specialization}
            </span>
          </div>
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
          </div>

          <div className="text-center bg-gray-100 p-5 rounded-2xl overflow-hidden text-blue-950 flex flex-col justify-center items-center">
            <h3 className="text-2xl mt-3">Social Media</h3>
            <div className="flex flex-col gap-5 mt-3 justify-start w-full">
              <div className="flex gap-5 items-center">
                <Link
                  href={doctorDetails.socialMedia.facebook}
                  className="h-10 w-10 rounded-full bg-blue-950 flex justify-center items-center"
                >
                  <FaFacebookF className="text-white" />
                </Link>
                <span>
                  {doctorDetails.socialMedia.facebook ||
                    "facebook link not available right now"}
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <Link
                  href={doctorDetails.socialMedia.instagram}
                  className="h-10 w-10 rounded-full bg-blue-950 flex justify-center items-center"
                >
                  <FaInstagram className="text-white" />
                </Link>
                <span>
                  {doctorDetails.socialMedia.instagram ||
                    "instagram link not available right now"}
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <Link
                  href={doctorDetails.socialMedia.twitter}
                  className="h-10 w-10 rounded-full bg-blue-950 flex justify-center items-center"
                >
                  <FaTwitter className="text-white" />
                </Link>
                <span>
                  {doctorDetails.socialMedia.twitter ||
                    "twitter link not available right now"}
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <Link
                  href={doctorDetails.socialMedia.linkedIn}
                  className="h-10 w-10 rounded-full bg-blue-950 flex justify-center items-center"
                >
                  <FaLinkedinIn className="text-white" />
                </Link>
                <span>
                  {doctorDetails.socialMedia.linkedIn ||
                    "linkedIn link not available right now"}
                </span>
              </div>
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
          <h2 className="px-5 py-3 rounded bg-green-800 text-2xl text-white w-fit">
            Appoinment Fee: <span>{doctorDetails?.appointmentFee}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Page;
