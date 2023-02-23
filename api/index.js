import express, { json, response } from 'express'
import mongoose from 'mongoose'
import lifecycle from './middleware/lifecycle.js'
import Recipe1 from '../models/recipe.js'
import { Router } from "express";
import mealsRoutes from "../route/meals.js";

const app = express()

const router = Router();

app.use(lifecycle({
  async setup() {
    console.log('Before handler')
    // Put your database connection here. e.g.
    // @ts-ignore
    await mongoose.connect(process.env.DATABASE_URL)
  },
  async cleanup() {
    console.log('After handler')
    // Put your database disconnection here. e.g.
    await mongoose.disconnect()
  }
}))
app.use(express.json())
app.use('/api', mealsRoutes)
  

app.post('/meal/:id', async (request, response) => {
  const id = tryCastId(request.params.id)
  
 }) 
  
  
//   async (req, res) => {
//   // console.log(process.env.DATABASE_URL)
//   const recipes = await Recipe1.find();
//   console.log(recipes);
//   res.json(recipes);
// })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
//  });

// app.get('/api/:id')
// mealsRoutes.use("/api", mealsRoutes);

export default app