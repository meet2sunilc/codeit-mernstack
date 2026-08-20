import express from "express";
import fs from "fs/promises";
import config from "./config/config.js"
import userRout from "./routes/user.routes.js"

const app = express();


app.use("/", userRout);
//Creating our backend server, running at port 3000
//config.port is importing from confit/config.js
app.listen(config.port, ()=>{
    console.log(`server is running at port ${config.port}`);
    
});
