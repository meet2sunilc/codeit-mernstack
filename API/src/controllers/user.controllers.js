import userServices from "../services/user.services.js";

const users = async (req, res) => {
  const data = await userServices.users();
  // console.log(data);
  res.send(data);
};

const userById = async (req, res) => {
  const data = await userServices.userById(req.params.userId);
  // console.log(data);
  res.status(200).json(data);
};

const createUser = async (req, res) => {
  try {
    const createdUser = await userServices.createUser(req.body);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUserById = async (req, res) => {
  const data = await userServices.deleteUserById(req.params.userId);
  res.json(data);
};
export default { users, userById, createUser, deleteUserById };
