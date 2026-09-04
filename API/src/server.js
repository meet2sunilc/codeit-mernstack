import express from "express";
import config from "./config/config.js";
import userRoutes from "./routes/user.routes.js";
import connectDatabase from "./config/database.js";

//creating app using express
const app = express();

//Connection DB using
connectDatabase();

app.use("/users", userRoutes);

app.listen(config.port, () => {
  console.log(`We are listening at port ${config.port}`);
});
