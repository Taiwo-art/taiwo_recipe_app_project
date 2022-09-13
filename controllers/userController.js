import {User} from "../models/userModel.js"
import { generateToken } from "../utils/util.js"


export const signUp = async(res, req) => {

    const {fullName,email,password,role} = req.body;

    const userExist = await User.findOne({email});

    if (userExist){
        throw new Error("User already exist");
    }
    const newUser = await User.create({
        fullName,
        email,
        password,
        role
    })

    if(newUser) {
        res.status(200).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            role: newUser.role,
            token: generateToken(newUser._id)
        })
    }

}


