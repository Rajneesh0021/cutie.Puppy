"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/animal.model.ts
const mongoose_1 = require("mongoose");
const animalSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    species: { type: String, required: true },
    age: { type: Number, required: true },
});
exports.default = (0, mongoose_1.model)("Animal", animalSchema);
