//This file is for my practice purpose
//without applying layered architechure.
//delete server.js file to use this file.
//rename this file with server.js and run it.

import express from "express";
import fs from "fs/promises";
import config from "./config/config.js";

const app = express();

//Creating routes
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h2>About page</h2>");
});

//an example of readig data from file using filesystem
app.get("/users", async (req, res) => {
  const users = await fs.readFile("data/users.json", "utf-8");
  res.json(JSON.parse(users)); //returns json format to javaScript
});

//Dynamic routs params
app.get("/users/:userId", async (req, res) => {
  const id = req.params.userId;
  const users = await fs.readFile("data/users.json", "utf-8");
  const user = JSON.parse(users).find((users) => users.Id == id);
  res.send(user);
});

//Creating backend server, at port 3000
app.listen(config.port, () => {
  console.log(`server is running at port ${config.port}`);
});
