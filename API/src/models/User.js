import mongoose from "mongoose";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "User name is required."],
      minLength: [3, `User name min length is 3, got {VALUE}`],
      maxLength: [20, "User name max length is 20."],
      lowercase: true,
      unique: [true, "User name already exists."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      lowercase: true,
      minLength: [5, `Email min length is 3, got {VALUE}`],
      maxLength: [25, "Email min length is 12."],
      // match: [emailRegex, "Please provide a valid email address"],
      validate: {
        validator: (value) => {
          return emailRegex.test(value);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
      unique: [true, "email already exists."],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: [true, "Phone nuber is required."],
      unique: [true, "phone number already exists."],
      minLength: [7, `Phone min length is 7, got {VALUE}`],
      maxLength: [15, "Phone max length is 15."],
    },
    role: {
      type: [String],
      default: ["CUSTOMER"],
      enum: ["CUSTOMER", "ADMIN", "MERCHANT", "SUPER_ADMIN"],
    },
    address: {
      city: {
        type: String,
        required: [true, "City is required."],
        trim: true,
      },
      country: {
        type: String,
        default: "Nepal",
        trim: true,
      },
      province: {
        type: String,
        trim: true,
      },
      street: {
        type: String,
        trim: true,
      },
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now(),
    // },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
