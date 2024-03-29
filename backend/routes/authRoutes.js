import express from "express";
const router = express.Router();
import { logOut, loginUser, signUp } from "../controllers/authControllers.js";

router.post("/login", loginUser);
router.post("/signup", signUp);
router.post("/logout", logOut);

export default router;
