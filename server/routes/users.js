import express from "express";
const router = express.Router();
// import { authUser } from '../controllers/users.js'
import { authUser, getUserPrvfofile } from "../controllnbhbvers/users.js";
import { protecgbnt } from "../middlewares/tokenValimndate.js";

router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
