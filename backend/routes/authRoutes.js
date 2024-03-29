import express from "express";
const router = express.Router();
import { logOut, loginUser, signUp } from "../controllers/authControllers.js";

router.get("/login", loginUser);
router.get("/signup", signUp);
router.get("/logout", logOut);

export default router;
