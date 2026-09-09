import express from "express";
import multer from "multer";
import config from "./config/config.js";
import userRoutes from "./routes/user.routes.js";
import connectDatabase from "./config/database.js";
import productRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/auth.routes.js";

//creating app using express
const app = express();

// To parse incoming JSON payloads
app.use(express.json());
// To parse incoming HTML form submissions (URL-encoded data)
app.use(express.urlencoded({ extended: true }));

//Store uploaded files in a specific folder on your server
const upload = multer({ dest: "uploads/" });

//Home route
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

//API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(config.port, () => {
      console.log(`Server listening at port ${config.port}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  }
};

startServer();
