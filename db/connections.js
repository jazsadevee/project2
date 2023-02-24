import mongoose from "mongoose";



mongoose.set("returnOriginal", false);
mongoose.set('strictQuery', true);

// mongoose.connect("mongodb://127.0.0.1:27017/meals")
mongoose.connect(process.env.DATABASE_URL)
.catch((err) => {
  console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

export default mongoose.connection;
