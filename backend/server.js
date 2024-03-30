// const express =require("express")
// const dotenv=require("dotenv")
import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
import connectDb from "./DB/connection.js";
import messageRouter from "./routes/messagRoute.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/auth/", authRouter);
app.use("/message/", messageRouter);

app.get("/", (req, res) => {
  res.send(`server uin running on port 5000`);
});

app.listen(port, () => {
  connectDb();
  console.log(`working on ${port}`);
});
