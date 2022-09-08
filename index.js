import express from "express";
import dotenv from "dotenv"
import {connectDB} from "./config/db.js"
import createRecipe from "./routes/recipeRoutes.js"


dotenv.config()
connectDB()

const app = express();

app.use(express.json())

const port = 8000;


app.get('/', (req,res) => {
    res.send(`Hello world!`)
})

app.use("/recipe", createRecipe);


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
} )