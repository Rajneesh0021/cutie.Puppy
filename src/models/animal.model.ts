// src/models/animal.model.ts
import { Schema, model } from "mongoose";

interface Animal {
  name: string;
  species: string;
  age: number;
}

const animalSchema = new Schema<Animal>({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: true },
});

export default model<Animal>("Animal", animalSchema);
