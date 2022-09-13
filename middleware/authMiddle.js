import {User} from "../models/userModel.js"
import jwt from "jsonwebtoken"


export const verifyToken = async(req,res, next) => {

    let token;

    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer ")
    ){
        try {
            token = req.headers.authorization.split(" ")[1];

            const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

            req.user = await User.findById(decode.id).select("-password");

            next();
        } catch (error) {
            console.error(error);
        }
    }

    if (!token){
        res.status(401);
        throw new Error(`Message: Not Authorized`);
    }
}