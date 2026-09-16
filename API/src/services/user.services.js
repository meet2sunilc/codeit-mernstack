import User from "../models/User.js";
import bcrypt from "bcryptjs";

const users = async () => {
  return await User.find();
};

const userById = async (id) => {
  return await User.findById(id);
  // const user = await User.findById(id);
  // console.log(user);
  // return user;
};

const createUser = async (input) => {
  const hashedPassword = await bcrypt.hash(input.password, 10);

  return await User.create({ ...input, password: hashedPassword });
};

const deleteUserById = async (input) => {
  console.log(input);
  try {
    const user = await User.findOne({ _id: input });
    if (!user) {
      return { message: "User not found." };
    }
    const result = await User.deleteOne({ _id: input });
    console.log(result);

    if (result.deletedCount === 0) {
      return { message: "Failed to delete user" };
    }
    return { message: "User deleted successfully", id: input };
  } catch (err) {
    return err.message;
  }
};
export default { users, userById, createUser, deleteUserById };
