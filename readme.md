> [Template Used](https://github.com/metruzanca/ga-vercel-demo)

# Simple Cook

### Description:

Simple Cook is an app that will provide the user with a list of recipes based on the main ingredients.. i.e seafood, chicken, beef/steak, vegetarian, turkey or pork. It will provide a list of ingredients and instructions of the chosen meal. 

### API: https://www.themealdb.com/api

### MVP 

- Choose an API with viable information for the app (build database to be used) 
- Create routes for the backend.. ingredients, description, instructions and the name 
- Create a drop down menu or navigational bar to choose between different recipes 

### Post MVP 

- frontend CSS design 
- drop down menu/navigational bar
- Animation for the page 
- Create a Dessert section 

## Weekly Goals

- Tuesday: complete planning for the app & make sure APIs is properly working 
- Wednesday: create Schema for each data JSON that'll be used 
- Thurday: complete nessesary code so the app is functional 
- Friday: debug any imprefections from the code 

### Data Model

```javascript

const recipeSchema = new mongoose.Schema({
  category: String,
  meal: String,
  ingredients: [],
  instructions: String,
  video: String
})

const Recipe = mongoose.model('Recipe', recipeSchema)

```
