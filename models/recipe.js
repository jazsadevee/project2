import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema({
  category: String,
  meal: String,
  instructions: String,
})


// @ts-ignore
// eslint-disable-next-line no-unused-vars
const Recipes = mongoose.model('Recipes', recipeSchema)