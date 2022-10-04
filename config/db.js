import mongoose from "mongoose" 

export const connectDB = async() => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log(`Connected to MongoDB Successfully`);
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
};
