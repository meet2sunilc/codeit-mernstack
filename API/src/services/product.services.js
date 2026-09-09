import Product from "../models/Product.js";

const createProduct = async (input) => {
  console.log(input);

  const createdProduct = await Product.create({
    name: input.name,
    brand: input.brand,
    category: input.category,
    price: input.price,
  });
  return createdProduct;
};

const getAllProducts = async () => {
  return await Product.find().limit(3);
};
export default { createProduct, getAllProducts };
