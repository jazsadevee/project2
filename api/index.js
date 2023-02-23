import express, { response } from 'express'
import mongoose from 'mongoose'
import lifecycle from './middleware/lifecycle.js'
import recipe from '../models/recipe.js'
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

// app.get('/api', async (req, res) => {
//   // console.log(process.env.DATABASE_URL)
//   const recipes = await recipe.find();
//   console.log(recipes);
//   res.json(recipes);
// })

router.use("/api", mealsRoutes);

export default app