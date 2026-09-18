import authServices from "../services/auth.services.js";
import jwt from "../utils/jwt.js";

const login = async (req, res) => {
  try {
    const data = await authServices.login(req.body);
    // console.log(data);

    // The process of generate and store JWT.
    const token = jwt.generateToken(data);
    // console.log(token);
    res.cookie("loginToken", token, {
      maxAge: 86400 * 1000, //1 day in miliseconds
    });
    // console.log(req.headers.cookie);
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

    // The process of generate and store JWT.
    const token = jwt.generateToken(data);
    // console.log(token);
    res.cookie("registerToken", token, { maxAge: 86400 * 1000 });
    res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error No. 103, ${error.message}` || "Failed to create user",
    });
  }
};

export default { login, register };
