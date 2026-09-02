import userServices from "../services/user.services.js";

const users = async (req, res) => {
  const data = await userServices.users();
  res.json(JSON.parse(data));
};

const userById = async (req, res) => {
  const id = req.params.userId;
  const data = await userServices.userById(id);
  try {
    if (data.length) {
      res.send(data);
    }
    return res.status(400).send("User not found");
  } catch (err) {
    res.status(400).send(err);
  }
};
export default { users, userById };
