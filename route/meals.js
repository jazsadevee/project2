import { Router } from "express";
import * as controllers from "../controllers/Meal.js"


const router = Router();

router.get("/", controllers.getMeal);
router.get("/meal", controllers.getMeal);

router.post("/", controllers.createMeal);

router.put("/meal", controllers.updateMeal);
router.delete("/meal", controllers.deleteMeal);

export default router;

