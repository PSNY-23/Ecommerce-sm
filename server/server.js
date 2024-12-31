import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/index.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

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

//Routes
app.get("/", (req, res) => {
  res.send("Server is running...");
});
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
