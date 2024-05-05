// src/controllers/animal.controller.ts
import { Request, Response } from "express";
import AnimalModel from "../models/animal.model";

class AnimalController {
  static async getAllAnimals(req: Request, res: Response) {
    try {
      const animals = await AnimalModel.find();
      res.status(200).json({message:"All Dogs",animals});
    } catch (err:any) {
      res.status(500).json({ message: err.message });
    }
  }

  static async addAnimal(req: Request, res: Response) {
    try {
      const newAnimal = new AnimalModel(req.body);
      await newAnimal.save();
      res.status(201).json({message:"Added Successfully !",newAnimal});
    } catch (err:any) {
      res.status(400).json({ message: err.message });
    }
  }

  static async updateAnimal(req: Request, res: Response) {
    try {
      const { id } = req.params;
     const updatedAnimal= await AnimalModel.findByIdAndUpdate(id, req.body);
      res.status(200).send({message:"Animal info. updated successfully !",updatedAnimal});
    } catch (err:any) {
      res.status(400).json({ message: err.message });
    }
  }

  static async removeAnimal(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const removedDog=  await AnimalModel.findByIdAndDelete(id);
      res.status(200).send({message:"Animal info. Deleted Successfully !",removedDog});
    } catch (err:any) {
      res.status(400).json({ message: err.message });
    }
  }
}

export default AnimalController;
