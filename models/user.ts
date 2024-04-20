import mongoose from "mongoose";

const userPermissions = new mongoose.Schema({
  role: { type: String, required: true },
  entity: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "Business",
  },
});

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
  },
  isActive: { type: Boolean, default: true },
  username: { type: String, required: true, unique: true },
  password: { type: Number, required: true, match: /^[0-9]{4}$/ },
  permissions: [userPermissions],
  image: {
    data: { type: Buffer, default: "" },
    contentType: { type: String, default: "" },
    url: { type: Boolean, default: true },
    link: {
      type: String,
      default: "/defaultProfile.jpg",
    },
  },
  creationDate: { type: Date, default: Date.now },
  updateDate: { type: Date, default: Date.now },
});

export default userSchema;
