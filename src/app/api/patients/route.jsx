import dbConnect from "@/lib/mongoose";
import patient from "@/models/patient";
export async function GET(request) {
  try {
    await dbConnect();
    const patients = await patient.find();
    return Response.json(patients);
  } catch (e) {
    return Response.json(
      { message: "Error fetching doctors" },
      { status: 500 }
    );
  }
}
