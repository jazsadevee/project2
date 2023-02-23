import { request, response } from "express";
import recipe from "../models/recipe.js";



export const getMeal = async (request, response) => {
  try {
    const Recipe = await recipe.find();
    response.json(Recipe);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const getMeals = async (request, response) => {
  try {
    const { meal } = request.params;
    const meals = await recipe.findById(meal);

    if (meals) {
      return response.json(meals);
    }

    response.status(404).json({ message: "Recipe not found!" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const createMeal = async (request, response) => {
  try {
    const Recipes = new recipe(request.body);
    await Recipes.save();
    response.status(201).json(Recipes);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const updateMeal = async (request, response) => {
  try {
    const { meal } = response.params
  }
}

// export const updateCharacter = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const character = await Character.findByIdAndUpdate(id, req.body);
//     res.status(201).json(character);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const deleteCharacter = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await Character.findByIdAndDelete(id);

//     if (deleted) {
//       return res.status(200).send("Character deleted!");
//     }

//     throw new Error("Character not found");
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// };
