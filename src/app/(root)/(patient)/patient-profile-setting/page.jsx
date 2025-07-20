"use client";
import { useEffect, useRef, useState } from "react";
import { getSession } from "next-auth/react";
import Title from "@/components/Title";
import Image from "next/image";
import { FaCamera } from "react-icons/fa6";
import EditButton from "@/components/EditButton";
export default function Page() {
  const [patient, setPatient] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: {
      vill: "",
      policeStation: "",
      district: "",
      division: "",
    },
  });
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const sessionData = await getSession();
      const response = await fetch(`/api/patients/${sessionData?.user?.id}`, {
        method: "GET",
      });
      const patientData = await response.json();
      setPatient(patientData);
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (patient) {
      setFormData({
        name: patient.name || "",
        phone: patient.phone || "",
        address: {
          vill: patient.address?.vill || "",
          policeStation: patient.address?.policeStation || "",
          district: patient.address?.district || "",
          division: patient.address?.division || "",
        },
      });
    }
  }, [patient]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["vill", "policeStation", "district", "division"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleUpdatePatientData = (e) => {
    e.preventDefault();
    const updateData = async () => {
      const res = await fetch(`/api/patients/${patient?._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Patient updated successfully!");
        setEditMode(false);
      } else {
        alert("Failed to update patient.");
      }
    };
    updateData();
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedImage(file);

    // Show preview
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
  };

  const handleImageUpload = async () => {
    if (!selectedImage) return;

    const formDataToSend = new FormData();
    formDataToSend.append("image", selectedImage);

    const res = await fetch(`/api/upload`, {
      method: "POST",
      body: formDataToSend,
    });

    if (res.ok) {
      const data = await res.json();
      // Now update the patient record in DB
      const updateRes = await fetch(`/api/patients/${patient._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: data.imageUrl }),
      });

      if (updateRes.ok) {
        alert("Image uploaded successfully!");
        setPreviewUrl(null); // Clear preview
        setPatient((prev) => ({ ...prev, image: data.imageUrl })); // Update state
      } else {
        alert("Failed to update patient with new image.");
      }
    } else {
      alert("Image upload failed.");
    }
  };

  return (
    <div className="w-9/10 mx-auto py-20">
      <div>
        <Title title={"Profile Setting"} className="text-blue-950 text-2xl" />
        <div className="mt-10 py-16 px-20 bg-gray-200 rounded-2xl">
          <div className="relative w-fit rounded-full overflow-hidden group ">
            <Image
              src={previewUrl || patient?.image || "/defalut.jpg"}
              alt={patient?.name || "Patient Image"}
              width={300}
              height={300}
              className="object-cover rounded-full w-[250px] h-[250px]"
            />
            <div
              onClick={handleImageClick}
              className="w-full bg-[#000b] h-2/5 absolute bottom-0 translate-y-full left-0 flex justify-center items-center group-hover:translate-y-0 transition-all duration-200 ease-in  group/overlay cursor-pointer"
            >
              <FaCamera className="text-3xl text-white transition-all duration-200 ease-in group-hover/overlay:text-4xl" />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>
          {previewUrl ? (
            <button
              onClick={handleImageUpload}
              className="mt-5 py-2 px-5 rounded bg-blue-950 text-white cursor-pointer"
            >
              Upload Image
            </button>
          ) : (
            ""
          )}

          <form
            onSubmit={handleUpdatePatientData}
            className={`relative flex flex-col w-2/3 ${
              editMode ? "gap-5" : ""
            }`}
          >
            <EditButton
              className="absolute right-0 top-0"
              editMode={editMode}
              setEditMode={setEditMode}
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              readOnly={!editMode}
              className={`text-3xl font-semibold text-blue-950 mt-5 px-2 py-1 rounded ${
                editMode
                  ? "border border-gray-400 bg-white"
                  : "border-none bg-transparent"
              }`}
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              readOnly={!editMode}
              className={`text-xl leading-8 tracking-wide px-2 py-1 rounded ${
                editMode
                  ? "border border-gray-400 bg-white"
                  : "border-none bg-transparent"
              }`}
            />
            <address className="flex gap-5 text-lg text-gray-800 flex-wrap">
              {["vill", "policeStation", "district", "division"].map(
                (field) => (
                  <p key={field}>
                    <span className="capitalize">{field}:</span>{" "}
                    <input
                      type="text"
                      name={field}
                      value={formData.address[field]}
                      onChange={handleChange}
                      readOnly={!editMode}
                      className={`px-2 py-1 rounded ${
                        editMode
                          ? "border border-gray-400 bg-white"
                          : "border-none bg-transparent"
                      }`}
                    />
                  </p>
                )
              )}
            </address>
            {editMode ? (
              <button
                type="submit"
                className="mt-5 py-3 px-5 rounded bg-blue-500 text-white w-fit cursor-pointer"
              >
                Save Change
              </button>
            ) : (
              ""
            )}
          </form>
          <button className="mt-10 px-5 py-3 bg-red-600 text-lg rounded-lg text-white cursor-pointer">
            Delete Account Permanently
          </button>
        </div>
      </div>
    </div>
  );
}
