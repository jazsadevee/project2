import { Router } from "express";
import * as controllers from "../controllers/Meal.js"


const mealsRoutes = Router();

mealsRoutes.get("/", controllers.getMeal);
mealsRoutes.get("/meal/:id", controllers.getMeals);

mealsRoutes.post("/meal", controllers.createMeal);

mealsRoutes.put("/meal/:id", controllers.updateMeal);
mealsRoutes.delete("/meal/:id", controllers.deleteMeal);

export default mealsRoutes;

