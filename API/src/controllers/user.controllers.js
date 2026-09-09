import userServices from "../services/user.services.js";

const users = async (req, res) => {
  const data = await userServices.users();
  // console.log(data);
  res.send(data);
};

const userById = async (req, res) => {
  const data = await userServices.userById(req.params.userId);
  // console.log(data);

  try {
    if (!data) {
      return res.status(400).send("User not found");
    }
    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
};

const createUser = async (req, res) => {
  try {
    const createdUser = await userServices.createUser(req.body);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export default { users, userById, createUser };
