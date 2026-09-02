import express from "express";
import userControllers from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/", userControllers.users);
router.get("/:userId", userControllers.userById);

export default router;
