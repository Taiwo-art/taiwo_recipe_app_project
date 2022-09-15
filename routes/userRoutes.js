import express from "express"
import {getAllUsers, getUser,updateUser, signUp, signIn, deleteUser} from "../controllers/userController.js"


const router = express.Router(); 

router.post("/signup",signUp);
router.post("/signin",signIn);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id",deleteUser );

export default router;