"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database_1 = __importDefault(require("./config/database"));
const animal_routes_1 = __importDefault(require("./routes/animal.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 9090;
app.use(body_parser_1.default.json());
(0, database_1.default)();
app.use("/animals", animal_routes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
