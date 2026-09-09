import User from "../models/User.js";

const login = () => {
  return "This is login function.";
};

const register = async (input) => {
  return await User.create({
    userName: input.userName,
    email: input.email,
    password: input.password,
    phoneNumber: input.phoneNumber,
    address: {
      city: input.city,
    },
  });
};

export default { login, register };
