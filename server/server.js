import express from "express";

import colors from "colors";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middlewares/errors.js";
import connectDB from "./config/db.js";

import product from "./routes/productRoutes.js";
import { authUser } from "./controllers/userController.js";

dotenv.config();
//databse connection
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

//middlewares
app.use("/api/products", product);
app.use("/api/users", authUser);

//err
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
