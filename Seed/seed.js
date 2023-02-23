import db from "../db/connections.js";
import Meals from "./Meals.json" assert { type: "json" }
// import Ingredient from "../models/ingredient.js" 
import Recipe from "../models/recipe.js"


const insertData = async () => {
  await db.dropDatabase();

  
  await Recipe.insertMany(Meals);

  // await Ingredient.create(Ingredient);

  await db.close();
};

insertData();


