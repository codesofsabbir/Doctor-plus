import dbConnect from "@/lib/mongoose";
import Doctor from "@/models/doctor";
export async function GET(request) {
  try {
    await dbConnect();
    const doctors = await Doctor.find();
    return Response.json(doctors);
  } catch (e) {
    return Response.json(
      { message: "Error fetching doctors" },
      { status: 500 }
    );
  }
}
