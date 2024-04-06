import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const scheduleSchema = new mongoose.Schema({
  schedule: [
    {
      day: {
        type: String,
        required: true,
        enum: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      openingTime: {
        type: String,
        required: true,
        match: [
          /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
          "Please fill a valid opening time",
        ],
      },
      closingTime: {
        type: String,
        required: true,
        match: [
          /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
          "Please fill a valid closing time",
        ],
      },
    },
  ],
});

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "client", required: true },
  text: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  date: { type: Date, default: Date.now },
});

const imageSchema = new mongoose.Schema({
  data: { type: Buffer, default: "" },
  contentType: { type: String, default: "" },
  url: { type: Boolean, default: true },
  link: {
    type: String,
    default: "/defaultProfile.jpg",
  },
});

const businessSchema = new mongoose.Schema({
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  delegatedOperators: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  ],
  name: { type: String, required: true, unique: true },
  description: { type: String },
  category: { type: String, required: true },
  location: { type: locationSchema, required: true },
  schedules: [{ type: scheduleSchema, required: true }],
  menu: [{ type: imageSchema }],
  logo: { type: imageSchema },
  rating: { type: Number, min: 1, max: 5 },
  reviews: [{ type: reviewSchema }],
  website: { type: String },
  phone: { type: String },
  email: { type: String },
});

export default businessSchema;
