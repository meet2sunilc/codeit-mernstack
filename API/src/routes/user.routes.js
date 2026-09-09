import express from "express";
import userControllers from "../controllers/user.controllers.js";
import multer from "multer";

const router = express.Router();
const upload = multer();

router
  .route("/")
  .get(userControllers.users)
  .post(upload.none(), userControllers.createUser);
router.route("/:userId").get(userControllers.userById);

export default router;
