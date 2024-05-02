import mongoose from "mongoose";
import Image, { IImage } from "./imageCommon";


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

const businessSchema = new mongoose.Schema({
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  invitedUser: [
    {
      email: {
        type: String,
        required: true,
        index: true,
        unique: true,
        match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      },
      role: { type: String, required: true },
    },
  ],
  name: { type: String, required: true, unique: true },
  description: { type: String },
  category: { type: String, required: true },
  location: { type: locationSchema, required: true },
  schedules: [{ type: scheduleSchema, required: true }],
  menu: [{ type: Image }],
  logo: { type: Image },
  rating: { type: Number, min: 1, max: 5 },
  reviews: [{ type: reviewSchema }],
  website: { type: String },
  phone: { type: String },
  email: { type: String },
});

export default businessSchema;
