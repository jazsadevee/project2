import { Router } from "express";
import * as controllers from "../controllers/Meal.js"


const mealsRoutes = Router();

mealsRoutes.get("/", controllers.getAllMeal);
mealsRoutes.get("/meal/:id", controllers.getMeals);

mealsRoutes.post("/meal", controllers.createMeal);

mealsRoutes.patch("/meal/:id", controllers.updateMealById);
mealsRoutes.delete("/meal/:id", controllers.deleteMeal);

export default mealsRoutes;

