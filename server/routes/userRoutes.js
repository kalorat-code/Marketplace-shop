import express from "express";
const router = express.Router();
// import { authUser } from '../controllers/users.js'
import { authUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middlewares/generateToken.js.js";

router.post("/login", authUser);
// router.route("/profile").get(protect, getUserProfile);
router.router("/profile").get(protect, getUserProfile);

export default router;
