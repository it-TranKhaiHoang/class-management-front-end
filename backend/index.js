import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Utils
import connectDB from "./config/db.js";
import { userRouter } from "./routes";
dotenv.config();
const port = process.env.PORT || 8081;

// connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello cu em");
});

// app.use("/api/users", userRouter);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
