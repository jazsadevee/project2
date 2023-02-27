import meals from '../Seed/Meals.json' assert { type: "json" };

async function fetchData() {
  const baseUrl = `http://localhost:3000/meals`
  try {
  const res = await fetch(`${baseUrl}`)
  const json = await res.json()

  console.log('fetch');
  console.log(json);
    return json
  }
  catch {
  console.log("error");
  }
} 
fetchData()



