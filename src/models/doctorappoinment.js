import mongoose, { Schema } from "mongoose";

const DoctorAppoinmentSchema = new Schema(
  {
    name: String,
    phone: String,
    // date: String,
  },
  { timestamps: true }
);

export default mongoose.models.DoctorAppoinment ||
  mongoose.model("DoctorAppoinment", DoctorAppoinmentSchema);
