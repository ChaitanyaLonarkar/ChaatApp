import express  from "express";
import protectRoute from "../middleware/protectRoute.js";
import  {getUsersForSidebar} from "../controllers/authControllers.js";

const router=express.Router();


router.post("/",getUsersForSidebar)
export default router;