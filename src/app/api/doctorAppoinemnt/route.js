import { NextResponse } from "next/server";
import Appoinment from "@/models/doctorappoinment";
import dbConnect from "@/lib/mongoose";

export const POST = async (request) => {
  const { name, phone } = await request.json();

  await dbConnect();

  const newAppoinement = {
    name,
    phone,
    date,
  };
  try {
    await Appoinment.create(newAppoinement);
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
  return new NextResponse("Appoinment taken successfully", {
    status: 201,
  });
};
