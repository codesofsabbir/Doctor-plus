import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      require: true,
      type: String,
    },
    phone: {
      require: true,
      type: String,
    },
    email: {
      require: true,
      type: String,
      default: null,
    },
    password: {
      require: true,
      type: String,
    },
    image: {
      type: String,
      default: "https://i.ibb.co.com/f0tg7c3/user.png",
    },
    address: {
      vill: { type: String, default: null },
      policeStation: { type: String, default: null },
      district: { type: String, default: null },
      division: { type: String, default: null },
    },
  },
  { timestamps: true }
);

export const Patients =
  mongoose.models.Patients ?? mongoose.model("Patients", userSchema);
