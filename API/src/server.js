import express from "express";
import config from "./config/config.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use("/users", userRoutes);

app.listen(config.port, () => {
  console.log(`We are listening at port ${config.port}`);
});
