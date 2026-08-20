import userService from "../services/user.services.js";

//getUserById function for user.routes.js => getUserById
const getUsers = async (req, res)=>{
  const users =  await userService.getUsers();
  res.json(JSON.parse(users));
}
//findUser function for user.routes.js => findUser 
const getUserById = async (req, res)=>{
  const id = req.params.userId;
  const user = await userService.getUserById(id);
  
  try 
  {
    if(!user){
      return res.status(404).send("User not found");
    }
    res.status(200).json(user);

  } 
  
  catch (error)
  {
    return res.status(500).send("Internal Server Error No.1")
  }
}

export  
{
  getUsers, 
  getUserById
};