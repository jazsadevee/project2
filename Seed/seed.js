import mongoose from "mongoose"
import db from "../db/connections.js";
import Meals from "./Meals.json" assert { type: "json" }
// import Ingredient from "../models/ingredient.js" 
import Recipe from "../models/recipe.js"


const insertData = async () => {
  await db.dropDatabase();

  await Recipe.create(Recipe);
  // await Ingredient.create(Ingredient);

  await db.close();
};

insertData();


