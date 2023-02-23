import { Router } from "express";
import mealsRoutes from "./meals.js";


const router = Router();


router.get('/', (request, response) => {
  response.send("API root")
});

router.use("/meal", mealsRoutes);

export default router; 