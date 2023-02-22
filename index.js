import express, { response } from 'express'
import mongoose from 'mongoose'
import lifecycle from './api/middleware/lifecycle.js'


const app = express()

// const recipeSchema = new mongoose.Schema({
//   category: String,
//   meal: String,
//   instructions: String,
// })

// const Recipes = mongoose.model('Recipes', recipeSchema)

// const ingredientSchema = new mongoose.Schema({
//   ingredientList: [
//     {
//       items1: String,
//       items2: String,
//       items3: String,
//       items4: String,
//       items5: String,
//       items6: String,
//       items7: String,
//       items8: String,
//       items9: String,
//       items10: String,
//       items11: String,
//       items12: String,
//       items13: String,
//       items14: String, 
//       items15: String, 
//       items16: String, 
//       items17: String, 
//       items18: String, 
//       items19: String, 
//       items20: String, 
//       items21: String, 
//     }
//   ],
//   measurement: [
//     {
//       size1: String,
//       size2: String,
//       size3: String,
//       size4: String,
//       size5: String,
//       size6: String,
//       size7: String,
//       size8: String,
//       size9: String,
//       size10: String,
//       size11: String,
//       size12: String,
//       size13: String,
//       size14: String,
//       size15: String,
//       size16: String,
//       size17: String,
//       size18: String,
//       size19: String,
//       size20: String,
//       size21: String,
//     }
//   ]
// })

// const Ingredient = mongoose.model('Ingredient', ingredientSchema)

// const newRecipeSchema = new mongoose.Schema({
//   category: String,
//   meal: String,
//   vegetarian: Boolean,
//   instructions: String,
//   userName: String,
// })

// const NewRecipe = mongoose.model('NewRecipe', newRecipeSchema)




// const todoSchema = new mongoose.Schema({
//   text: String
// })

// const Todo = mongoose.model('Todo', todoSchema)

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

// Feel free to use a router and move this elsewhere.

// app.get('/api', async (request, response) => {
//   const category = request.query
//   response.json(category)
// })

// app.get('/', async (request, response) => {
//   const 
// })

// app.get('/api', async (req, res) => {
//   await Todo.insertMany([{ text: (new Date()).toISOString() }])
//   const todos = await Todo.find()

//   console.log(process.env.DATABASE_URL)
//   res.json({ message: 'Hello World', todos })
// })

// Don't use app.listen. Instead export app.
export default app