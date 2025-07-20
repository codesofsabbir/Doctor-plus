import { NextResponse } from "next/server";
// import { createUser } from "@/queries/users";
import dbConnect from "@/lib/mongoose";
import bcrypt from "bcryptjs";
import { Patients } from "@/models/user-model";
export const POST = async (request) => {
  const { name, phone, password, image, address } = await request.json();
  console.log(name, phone, password, image, address);
  await dbConnect();

  const existingUser = await Patients.findOne({ phone });
  if (existingUser) {
    return new NextResponse(
      JSON.stringify({
        message: "Phone number already exists.",
      }),
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    name,
    phone: phone || null,
    password: hashedPassword,
    image,
    address: {
      vill: address?.vill || null,
      policeStation: address?.policeStation || null,
      district: address?.district || null,
      division: address?.division || null,
    },
  };
  try {
    await Patients.create(newUser);
    // await createUser(newUser);
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
  return new NextResponse("User has been created", {
    status: 201,
  });
};
