import Jwt from "jsonwebtoken";
import User from "../models/userModel.js";


 const protectRoute = async (req, res, next) => {
  try {

    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ error: "Unauthorize - no token provided" });
    }

    const decoded = Jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorize - invalid token " });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
    req.user = user;
    // console.log(req.user,"from protect")
    next();


  } catch (error) {
    console.log("Error in protectRoute controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute;