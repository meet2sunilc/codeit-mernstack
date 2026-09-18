import mongoose from "mongoose";
import User from "./User.js";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, `Product's name at least 3 character, got {VALUE}`],
      maxLength: [50, "Product's name max character is 50."],
      required: [true, "Product name is required."],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, "Brand name is required."],
      trim: true,
      index: true,
    },
    category: {
      type: String,
      required: [true, "Catagory is required."],
      trim: true,
      index: true,
    },
    price: {
      type: Number,
      min: [1, "Price must be greater than 0"],
      max: [9999999, "Price must be less than 10000000"],
      required: [true, "Price is required."],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    stock: {
      type: Number,
      min: [0, "Price must be gretar than 0"],
      default: 0,
    },
    description: {
      type: String,
      trim: true,
    },
    imageUrls: [
      {
        type: String,
        trim: true,
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: [true, "Created By field is necessary"],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Product", productSchema);
