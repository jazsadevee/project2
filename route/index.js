import { Router } from "express";
import * as controller from "../controllers/Meal.js";


const router = Router();


router.get('/', (request, response) => {
  response.send("API root")
});

router.use("/meal", mealRoute);

export default router; 