import fs from "fs/promises";

const users = async () => {
  const data = await fs.readFile("./data/users.json", "utf-8");
  return data;
};

const userById = async (id) => {
  const users = await fs.readFile("./data/users.json", "utf-8");
  // console.log(users);
  console.log(id);

  const data = JSON.parse(users).filter((users) => users.Id == id);
  console.log(data);

  return data;
};

export default { users, userById };
