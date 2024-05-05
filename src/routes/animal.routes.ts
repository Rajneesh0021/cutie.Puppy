// src/routes/animal.routes.ts
import express from "express";
import AnimalController from "../controllers/animal.controller";

const router = express.Router();

router.get("/", AnimalController.getAllAnimals);
router.post("/", AnimalController.addAnimal);
router.put("/:id", AnimalController.updateAnimal);
router.delete("/:id", AnimalController.removeAnimal);

export default router;
