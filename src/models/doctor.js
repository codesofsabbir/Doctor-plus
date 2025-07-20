import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
  startTime: String,
  endTime: String,
});

const availabilitySchema = new mongoose.Schema({
  day: String,
  slots: [slotSchema],
});

const educationSchema = new mongoose.Schema({
  title: String,
  passingYear: String,
  department: String,
  instituteName: String,
});

const experienceSchema = new mongoose.Schema({
  years: Number,
});

const positionSchema = new mongoose.Schema({}, { strict: false });

const addressSchema = new mongoose.Schema({
  clinic: String,
  city: String,
  area: String,
  country: String,
});

const ratingsSchema = new mongoose.Schema({
  average: Number,
  totalReviews: Number,
});

const statsSchema = new mongoose.Schema({
  totalAppointments: Number,
  completedAppointments: Number,
  cancelledAppointments: Number,
  noShows: Number,
});

const socialMediaSchema = new mongoose.Schema({
  facebook: String,
  instagram: String,
  twitter: String,
  linkedIn: String,
});

const doctorSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    email: String,
    password: String,
    phone: String,
    gender: String,
    photo: String,
    specialization: String,
    education: educationSchema,
    experience: experienceSchema,
    positions: [positionSchema],
    bio: String,
    address: addressSchema,
    availability: [availabilitySchema],
    appointmentFee: Number,
    isVerified: Boolean,
    ratings: ratingsSchema,
    stats: statsSchema,
    role: String,
    isActive: Boolean,
    socialMedia: socialMediaSchema,
  },
  { timestamps: true }
);

export default mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);
