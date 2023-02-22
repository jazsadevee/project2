import mongoose from 'mongoose'

const newRecipeSchema = new mongoose.Schema({
  category: String,
  meal: String,
  vegetarian: Boolean,
  instructions: String,
  userName: String,
})


// @ts-ignore
// eslint-disable-next-line no-unused-vars
const NewRecipe = mongoose.model('NewRecipe', newRecipeSchema)
