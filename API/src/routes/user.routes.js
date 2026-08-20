import express from "express";
import {getUsers, getUserById} from "../controllers/user.controllers.js";
const router = express.Router();


//Router for display all users:
router.get("/users", getUsers);

//Creating dynamic routes params:
router.get("/users/:userId", getUserById);
export default router;