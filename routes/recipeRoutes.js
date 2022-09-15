import express from 'express';
import { createRecipe, deleteRecipe, getAllRecipes, getRecipe, updateRecipe } from "../controllers/recipeController.js";
import { verifyToken, profUser, adminUser } from '../middleware/authMiddle.js';

const router = express.Router();


router.post('/create', verifyToken, profUser,createRecipe);
router.get('/', getAllRecipes);
router.get('/:id', verifyToken,getRecipe);
router.put('/update/:id',verifyToken, adminUser, updateRecipe);
router.delete('/delete/:id', verifyToken,adminUser,deleteRecipe)

export default router;