import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

const PORT = process.env.PORT || 3000;

//Create a database connection
mongoose
  .connect("mongodb://localhost:27017/ecommerce-yt-sangam")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-control",
      "expires",
      "pragma",
      ],
    credentials: true,
  })
);
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
