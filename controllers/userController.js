import mongoose from "mongoose";
import {User} from "../models/userModel.js";
import {generateToken} from "../utils/util.js";


//Create New User
export const signUp = async (req, res) => {
            try{
    const {username,email,password,role} = req.body;

    const userExist = await User.findOne({email});

    if (userExist){
        res.send(400);
        throw new Error(`Message: User already exist!`);
    }
    const newUser = await User.create({
        username,
        email,
        password,
        role
    });

    if(newUser) {
        res.status(200).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role,
            token: generateToken(newUser._id),
        })
    } 
} catch (error){
    console.error(error.message)
}
    }
    //Log in User

export const signIn = async(req,res) => {
        try{
    const {email, password} = req.body;

    const userIn =await User.findOne({email});

    if (!userIn) {

        res.send(401);

        throw new Error(`Message: Authentication failed. Invalid email or Password`);
}
return  res.status(200).json({

    _id: userIn._id,
    name: userIn.name,
    email: userIn.email,
    token:generateToken(userIn._id),
});
} 
catch (error){
    console.error(error.message)
}
} 

//Get all users from database
export const getAllUsers = async(req,res) => {
    try {
        const allUsers = await User.find(); 
        if (allUsers) {
            res.status(200).json({
                Message:"All Users Found!",
                data: allUsers});
        } else {
            res.status(404).json({
                message: "No User found!"
            })
}
    } catch (error) {
        console.error(error.message);
    }

}
//Get a single User
export const getUser = async(req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
               return res.status(404).json({ 
                message:"User not found!"
            });
            }
            const id = req.params.id;
            const singleUser= await User.findById(id);
            if(singleUser){
                res.status(200).json({
                    message: "User found successfully!",
                    data: singleUser });
            }
        } catch (error) {
            console.error(error.message);
        }
    }
//Update a User

    export const updateUser = async(req,res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
               return res.status(404).json({ 
                message:"User not found!"
            });
            } 
            const id = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        if (updatedUser) {
            res.status(200).json({
                message:"User updated successfully!",
                data: updatedUser
            });
        }
    } catch (error) {
        console.error(error.message);
    }
}
        //Delete a User

export const deleteUser = async(req,res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(404).json({message: "Invalid id provided!"})
        }
    
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
        if(deletedUser){
            res.status(200).json({
                message:"User deleted successfully"
                });
        }
    } catch (error) {
        console.error(error.message);
    }
}

