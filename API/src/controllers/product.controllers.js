import productServices from "../services/product.services.js";

const createProduct = async (req, res, next) => {
  try {
    const data = await productServices.createProduct(req.body);
    res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error No. 102, ${error.message}` || "Failed to create product",
    });
  }
};

const getAllProducts = async (req, res) => {
  const data = await productServices.getAllProducts();
  res.json(data);
};
export default { createProduct, getAllProducts };
