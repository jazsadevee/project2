import 'dotenv/config'
import Meals from "./Meals.json" assert { type: "json" }
import Recipe1 from "../models/recipe.js"
import mongoose from 'mongoose';

console.log(process.env.DATABASE_URL);

const insertData = async () => {

  await Recipe1.deleteMany();
  await Recipe1.insertMany(Meals);
};

// @ts-ignore
mongoose.connect(process.env.DATABASE_URL);
mongoose.set('strictQuery', true);

await seed();
await insertData();
await mongoose.disconnect();

async function seed() {

}
