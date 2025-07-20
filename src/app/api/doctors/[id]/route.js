import dbConnect from "@/lib/mongoose";
import Doctor from "@/models/doctor";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  await dbConnect();
  const { id } = params;

  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return NextResponse.json({ error: "Doctor not found" }, { status: 404 });
    }
    return NextResponse.json(doctor);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching doctor" },
      { status: 500 }
    );
  }
}
