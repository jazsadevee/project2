// import meals from '../Seed/Meals.json' assert { type: "json" };

// import recipe from "../models/recipe";

async function fetchData() {
  const baseUrl = `https://project2-sooty.vercel.app/api`
  try {
    const res = await fetch(`${baseUrl}`)
    const json = await res.json()
    console.log('fetch');
    console.log(json);
    json.map(meal => {
      console.log(meal.category)
      // console.log(meal.category);
    })
    return json
  }
  catch {
    console.log("error");
  }
}
fetchData()



