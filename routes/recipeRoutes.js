import express from 'express';
import { createRecipe, deleteRecipe, getAllRecipes, getRecipe, updateRecipe } from "../controllers/recipeController.js";

const router = express.Router();


router.post('/create',createRecipe);
router.get('/', getAllRecipes);
router.get('/:id', getRecipe);
router.put('/update/:id', updateRecipe);
router.delete('/delete/:id', deleteRecipe)

export default router;