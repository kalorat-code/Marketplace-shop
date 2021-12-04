import express from "express";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/errors.js";
import colors from "colors";
import dotenv from "dotenv";
import product from "./routes/products.js";

dotenv.config();
//databse connection
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

//middlewares
app.use("/api/product", product);
//err
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
