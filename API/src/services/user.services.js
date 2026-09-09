import User from "../models/User.js";

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
  return await User.create(input);
};
export default { users, userById, createUser };
