import express from "express"
import {signUp} from "../controllers/userController.js"
import { verifyToken } from "../middleware/authMiddle.js";


const router = express.Router(); 

router.post("/signup",verifyToken,signUp);

export default router;