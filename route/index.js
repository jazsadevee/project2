import { Router } from "express";
import mealRoute from "./meals.js";


const router = Router();


router.get('/', (request, response) => {
  response.send("")
});

router.use("/meal", mealRoute);