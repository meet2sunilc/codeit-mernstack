//dotenv veriable configation
import dotenv from "dotenv";

dotenv.config(); //configuring dotenv module

const config = {
    port : process.env.PORT||3000,
    mongodbUrl: process.env.MONGODBURL || "",
};

export default config;