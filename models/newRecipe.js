import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let newRecipe = new Schema({
  category: String,
  meal: String,
  vegetarian: Boolean,
  instructions: String,
  userName: String,
});


export default mongoose.model("userCreated", newRecipe);
