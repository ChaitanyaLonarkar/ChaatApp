// const express =require("express")
// const dotenv=require("dotenv")
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";


import authRouter from "./routes/authRoutes.js";
import messageRouter from "./routes/messagRoute.js";
import usersRouter from "./routes/usersRoute.js";


import connectDb from "./DB/connection.js";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())

app.use("/auth/", authRouter);
app.use("/api/message/", messageRouter);
app.use("/api/users/", usersRouter);


app.get("/", (req, res) => {
  res.send(`server running on port 5000`);
});

app.listen(port, () => {
  connectDb();
  console.log(`working on ${port}`);
});
