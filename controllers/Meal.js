import { request, response } from "express";
import Recipe1 from "../models/recipe.js";



export const getMeal = async (request, response) => {
  try {
    const recipe = await Recipe1.find();
    response.json(recipe);
    console.log("running");
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};


export const getMeals = async (request, response) => {
  try {
    const meal = request.params.id;
    const recipe = await Recipe1.find({ meal: request.params.id });

    if (recipe) {
      return response.json(recipe);
    }

    response.status(404).json({ message: "Recipe not found!" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};


export const createMeal = async (request, response) => {
  try {
    // const recipes = new Recipe1(request.body);
    const meal = await Recipe1.create(request.body);
    console.log(request);
    response.status(201).json(meal);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};


export const updateMealById = async (request, response) => {
  try {
    const id = request.params.id;
    const recipes = await Recipe1.findOneAndUpdate(id, request.body);
    response.status(201).json(recipes)
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};


export const deleteMeal = async (request, response) => {
  try {
    const id = request.params.id;
    const deleted = await Recipe1.findByIdAndDelete(id);
    console.log(deleted);
    if (deleted) {
      return response.status(200).send("Recipe deleted!")
    }
    // throw new Error("Recipe not found");
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};
