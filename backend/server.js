// const express =require("express")
// const dotenv=require("dotenv")
import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
const app = express();

const port = process.env.port || 5000;
dotenv.config();

app.use("/auth/", authRouter);

app.get("/", (req, res) => {
  res.send("server uin running on port 5000");
});

app.get("/signup", (req, res) => {
  res.send("sign up route");
});
app.listen(port, () => console.log(`working on ${port}`));
