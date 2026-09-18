import bcrypt from "bcrypt";
import User from "../models/User.js";

const login = async (input) => {
  const user = await User.findOne({
    $or: [{ email: input?.email }, { phoneNumber: input?.phoneNumber }],
  });
  if (!user) {
    throw { success: false, message: "User not found." };
  }
  const isPasswordMatched = await bcrypt.compare(input.password, user.password);
  // console.log(data);
  if (!isPasswordMatched) {
    throw { success: false, message: "Invalid credentials" };
    return;
  }
  const data = {
    _id: user._id,
    userName: user.userName,
    address: user.address,
    email: user.email,
    phoneNumber: user.phoneNumber,
    role: user.role,
  };
  return data;
};

const register = async (input) => {
  const hashedPassword = await bcrypt.hash(input.password, 10);
  const user = await User.create({
    userName: input.userName,
    email: input.email,
    password: hashedPassword,
    phoneNumber: input.phoneNumber,
    address: {
      city: input.city,
    },
  });
  const data = {
    _id: user._id,
    userName: user.userName,
    address: user.address,
    email: user.email,
    phoneNumber: user.phoneNumber,
    role: user.role,
  };
  return data;
};

export default { login, register };
