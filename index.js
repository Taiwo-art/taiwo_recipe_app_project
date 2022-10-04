import express from "express";
import dotenv from "dotenv"
import {connectDB} from "./config/db.js"
import recipeRoutes from "./routes/recipeRoutes.js"
import userRoutes from "./routes/userRoutes.js"


dotenv.config()
connectDB()

const app = express();

app.use(express.json())

const port = process.env.PORT || 8000;


app.get('/', (req,res) => {
    res.send(`Hello world!`)
})

app.use("/recipe", recipeRoutes);
app.use("/user", userRoutes);


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
} )