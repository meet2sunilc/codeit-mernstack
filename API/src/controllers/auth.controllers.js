import authServices from "../services/auth.services.js";

const login = (req, res) => {
  res.json(authServices.login());
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
