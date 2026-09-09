import express from "express";
import productControllers from "../controllers/product.controllers.js";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router
  .route("/")
  .post(upload.none(), productControllers.createProduct)
  .get(productControllers.getAllProducts);

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
