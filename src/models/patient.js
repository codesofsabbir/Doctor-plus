import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  vill: String,
  policeStation: String,
  district: String,
  division: String,
});

const doctorSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    email: String,
    phone: String,
    image: String,
    address: addressSchema,
  },
  { timestamps: true }
);

export default mongoose.models.Patient ||
  mongoose.model("Patient", doctorSchema);
