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
    const Recipe = await recipe.findById(meal);

    if (Recipe) {
      return response.json(Recipe);
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
    const { meal } = response.params;
    const Recipes = await recipe.findByIdAndUpdate(meal, request.body);
    response.status(201).json(Recipes)
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};


export const deleteMeal = async (request, response) => {
  try {
    const { meal } = request.params;
    const deleted = await recipe.findByIdAndDelete(meal);

    if (deleted) {
      return response.status(200).send("Recipe deleted!")
    }
    throw new Error("Recipe not found");
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};
