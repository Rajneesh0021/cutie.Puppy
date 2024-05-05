// src/app.ts
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config();
import connectDB from "./config/database";
import animalRoutes from "./routes/animal.routes";

const app = express();
app.use(cors())
const PORT =process.env.PORT || 9090;

app.use(bodyParser.json());

connectDB();

app.use("/animals", animalRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
