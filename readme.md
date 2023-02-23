> [Template Used](https://github.com/metruzanca/ga-vercel-demo)
# Simple Chief

### Description:

Simple Chief is an app that will provide the user with a list of recipes based on the main ingredients.. i.e seafood, chicken, beef/steak, vegetarian, turkey or pork. It will provide a list of ingredients and instructions of the chosen meal. 

### API: https://www.themealdb.com/api

### MVP 

- Choose an API with viable information for the app (build database to be used) 
- Create route & controller for the backend.. ingredients, description, instructions and the recipe name 
- Create models for ingredients, description, instructions and the recipe names 

### Post MVP 

- frontend design 
- drop down menu/navigational bar to choose or create recipes 
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
| /api/Recipe/:meal  | GET  | SHOW  | Show a single Recipe  |
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
    items: String
  ],
  measurement: [
    sizes: String
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