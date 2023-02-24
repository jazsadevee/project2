import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let meal = new Schema({
  category: String,
  meal: String,
  instructions: String,
  ingredientList: [
    {
      items1: String,
      items2: String,
      items3: String,
      items4: String,
      items5: String,
      items6: String,
      items7: String,
      items8: String,
      items9: String,
      items10: String,
      items11: String,
      items12: String,
      items13: String,
      items14: String,
      items15: String,
      items16: String,
      items17: String,
      items18: String,
      items19: String,
      items20: String,
      items21: String,
    }
  ],
  measurement: [
    {
      size1: String,
      size2: String,
      size3: String,
      size4: String,
      size5: String,
      size6: String,
      size7: String,
      size8: String,
      size9: String,
      size10: String,
      size11: String,
      size12: String,
      size13: String,
      size14: String,
      size15: String,
      size16: String,
      size17: String,
      size18: String,
      size19: String,
      size20: String,
      size21: String,
    }
  ]
});


export default mongoose.model("Recipe1", meal);