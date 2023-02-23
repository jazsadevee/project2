import { Router } from "express";
import * as controllers from "../controllers/Meal.js"


const router = Router();

router.get("/", controllers.getMeal);

router.post("/", controllers.createMeal);

router.put("/", controllers.updateMeal);

router.delete("/", controllers.deleteMeal);

export default Router;

