import authServices from "../services/auth.services.js";

const login = async (req, res) => {
  try {
    const data = await authServices.login(req.body);
    // console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Invalid login credentials.",
    });
  }
};

const register = async (req, res) => {
  try {
    const data = await authServices.register(req.body);
    res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error No. 103, ${error.message}` || "Failed to create user",
    });
  }
};

export default { login, register };
