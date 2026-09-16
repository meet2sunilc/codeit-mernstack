import multer from "multer";
import express from "express";
import authControllers from "../controllers/auth.controllers.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.route("/login").post(upload.none(), authControllers.login);
router.route("/register").post(upload.none(), authControllers.register);

export default router;
