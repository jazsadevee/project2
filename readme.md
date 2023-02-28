> [Template Used](https://github.com/metruzanca/ga-vercel-demo)
# Simple Chef

### Description:

Simple Chef is a recipe-sharing app that allows users to upload and browse recipes based on their main ingredient. Users can select from a variety of main ingredients such as seafood, chicken, beef/steak, vegetarian, turkey, or pork. Users can upload their recipe which contains the meal name, list of ingredients and instructions. Other users can then search for recipes based on their desired ingredient and browse through the available options. Overall, Simple Chef is an ideal app for anyone looking for inspiration in the kitchen or wanting to share their favorite recipes with others.

### API References: 
- Pinterest.com
- allrecipes.com
- tasty.co
### MVP 

- Choose and API or build a database with viable information for the application 
- Create route & controller then ensure seeding this information: Recipe title, Description, Category, Ingredients, and Instruction on how to prepare the dish
- Create models for receipes & new recipes 

### Post MVP 

- frontend design 
- Animation for the page 
- Create a Dessert section to database

## Weekly Goals

- Tuesday: complete planning for the app & make sure APIs is properly working 
- Wednesday: create Schema for each data JSON that'll be used 
- Thurday: complete nessesary code so the app is functional 
- Friday: debug any imprefections from the code 


| Route  |  HTTP Method | DB Action  | Description  |
|---|---|---|---|
| /api/Recipe  | GET  | INDEX  | Indexes all the Recipe  |
| /api/Recipe  | POST | CREATE  | Create a Recipe  |
| /api/Recipe/:meal  | GET  | SHOW  | Show a single Recipe by the name  |
| /api/Recipe/:meal  | PUT  | UPDATE  | Update a Recipe  |
| /api/Recipe/:meal  | DELETE  | DELETE  | Delete a Recipe  |

### Data Model

```javascript

const recipeSchema = new mongoose.Schema({
  category: String,
  meal: String,
  instructions: String,
  video: String
})

const Recipe = mongoose.model('Recipe', recipeSchema)


const ingredientSchema = new mongoose.Schema({
  ingredientList: [
    items1: String,
    items2: String,
    items3: String
  ],
  measurement: [
    sizes1: String,
    sizes2: String,
    sizes3: String
  ]
})

const Amount = mongoose.model('Amount', ingredientSchema)


const newRecipeSchema = new mongoose.Schema({
  category: String,
  meal: String,
  vegetarian: Boolean,
  instructions: String,
  userName: String,
})

const NewRecipe = mongoose.model('NewRecipe', newRecipeSchema)

```