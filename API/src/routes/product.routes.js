import multer from "multer";
import express from "express";
import { auth } from "../middlewares/auth.middlewares.js";
import productControllers from "../controllers/product.controllers.js";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router
  .route("/")
  .get(productControllers.getAllProducts)
  .post(upload.none(), auth, productControllers.createProduct);

export default router;

/*
// Base collection routes (/api/products)
router
  .route("/")
  .post(productControllers.createProduct)
  .get(productControllers.getAllProducts);

// Single item routes (/api/products/:id)
router
  .route("/:id")
  .get(productControllers.getProductById)
  .put(productControllers.updateProduct)
  .delete(productControllers.deleteProduct);
*/
