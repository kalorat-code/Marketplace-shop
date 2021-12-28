import express from "express";
const router = express.Router();
// import { authUser } from '../controllers/users.js'
import {
  authUser,
  registerUser,
  getUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middlewares/generateToken.js.js";

router.route("/").post(registerUser);
router.post("/login", authUser);

router.router("/profile").get(protect, getUserProfile);

export default router;
