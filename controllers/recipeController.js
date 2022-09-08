import express from "express"
import mongoose from "mongoose";
import {recipe} from "../models/recipeModel.js"


//Create a new recipe
export const createRecipe = async(req, res) => {
    try {
        const recip = new recipe(req.body); 

        await recip.save();
        res.send(recip)
    } catch (error) {
        console.error(error.message);
    }
}
//Get all recipes from database
export const getAllRecipes = async(req,res) => {
    try {
        const recip = await recipe.find(); 
        if (recip) {
            res.json(recip);
        } else {
            res.status(404).json({
                message: "No Recipe found"
            })
}
    } catch (error) {
        console.error(error.message);
    }

}
//Get a single recipe
export const getRecipe = async(req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
               return res.status(404).json({ 
                message:"Recipe not found"
            });
            }
            const id = req.params.id;
            const recip = await recipe.findById(id);
            if(recip){
                res.status(200).json({
                    message: "Recipe found successfully",
                    data: recip });
            }
        } catch (error) {
            console.error(error.message);
        }
    }
//Update a recipe

    export const updateRecipe = async(req,res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
               return res.status(404).json({ 
                message:"Recipe not found"
            });
            } 
            const id = req.params.id;
        const recip = await recipe.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        if (recip) {
            res.status(200).json({
                message:"Organization updated successfully",
                data: recip
            });
        }
    } catch (error) {
        console.error(error.message);
    }
}
        //Delete a recipe

export const deleteRecipe = async(req,res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(404).json({message: "Invalid id provided"})
        }
    
    const id =req.params.id;
    const recip = await recipe.findByIdAndDelete(id);
        if(recip){
            res.status(200).json({
                message:"Recipe deleted successfully"
                });
        }
    } catch (error) {
        console.error(error.message);
    }
}