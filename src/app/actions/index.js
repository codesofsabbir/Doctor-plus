"use server";
import { signOut } from "@/auth";
import dbConnect from "@/lib/mongoose";
import { Patients } from "@/models/user-model";
import bcrypt from "bcryptjs";
import doctor from "@/models/doctor";

export async function doLogout() {
  await signOut({ redirectTo: "/login" });
}

export async function doDoctorLogin(formData) {
  const phone = formData.get("phone");
  const password = formData.get("password");
  if (!phone || !password) {
    throw new Error("Phone and password are required.");
  }
  await dbConnect();
  const loginDoctor = await doctor.findOne({ phone });

  if (!loginDoctor) {
    throw new Error("No patient found with this phone number.");
  }
  if (loginDoctor.password !== password) {
    throw new Error("Incorrect Password.");
  }
  return {
    id: loginDoctor._id.toString(),
    name: loginDoctor.name,
    phone: loginDoctor.phone,
    role: "doctor",
  };
}

export async function doPatientLogin(formData) {
  const phone = formData.get("phone");
  const password = formData.get("password");
  // const hashedPassword = await bcrypt.hash(password, 10);
  if (!phone || !password) {
    throw new Error("Phone and password are required.");
  }
  await dbConnect();
  const patient = await Patients.findOne({ phone });

  if (!patient) {
    throw new Error("No patient found with this phone number.");
  }
  const isMatch = await bcrypt.compare(password, patient.password);

  if (!isMatch) {
    throw new Error("Incorrect Password.");
  }
  return {
    id: patient._id.toString(),
    name: patient.name,
    phone: patient.phone,
    role: "patient",
  };
}
