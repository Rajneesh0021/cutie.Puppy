"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animal_model_1 = __importDefault(require("../models/animal.model"));
class AnimalController {
    static getAllAnimals(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const animals = yield animal_model_1.default.find();
                res.status(200).json({ message: "All Dogs", animals });
            }
            catch (err) {
                res.status(500).json({ message: err.message });
            }
        });
    }
    static addAnimal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newAnimal = new animal_model_1.default(req.body);
                yield newAnimal.save();
                res.status(201).json({ message: "Added Successfully !", newAnimal });
            }
            catch (err) {
                res.status(400).json({ message: err.message });
            }
        });
    }
    static updateAnimal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const updatedAnimal = yield animal_model_1.default.findByIdAndUpdate(id, req.body);
                res.status(200).send({ message: "Animal info. updated successfully !", updatedAnimal });
            }
            catch (err) {
                res.status(400).json({ message: err.message });
            }
        });
    }
    static removeAnimal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const removedDog = yield animal_model_1.default.findByIdAndDelete(id);
                res.status(200).send({ message: "Animal info. Deleted Successfully !", removedDog });
            }
            catch (err) {
                res.status(400).json({ message: err.message });
            }
        });
    }
}
exports.default = AnimalController;
