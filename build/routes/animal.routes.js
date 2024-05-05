"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/animal.routes.ts
const express_1 = __importDefault(require("express"));
const animal_controller_1 = __importDefault(require("../controllers/animal.controller"));
const router = express_1.default.Router();
router.get("/", animal_controller_1.default.getAllAnimals);
router.post("/", animal_controller_1.default.addAnimal);
router.put("/:id", animal_controller_1.default.updateAnimal);
router.delete("/:id", animal_controller_1.default.removeAnimal);
exports.default = router;
