import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";

dotenv.config({
    path:"./.env"
})

const envMode = process.env.NODE_ENV.trim() || "PRODUCTION";

const app = express();

app.use("/user",userRouter);

app.listen(3000,()=>{
    console.log("Server is running on port : 3000");
})

export {envMode,adminSecretKey,userSocketIDs}