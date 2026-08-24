"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class AppConfig {
    host = process.env.DB_HOST ?? "localhost";
    port = Number(process.env.DB_PORT ?? 3306);
    user = process.env.DB_USER ?? "root";
    password = process.env.DB_PASSWORD ?? "";
    database = process.env.DB_NAME ?? "";
    secretKey = process.env.JWT_SECRET ?? "";
    constructor() {
        if (!this.database) {
            throw new Error("DB_NAME is missing from the .env file");
        }
        if (!this.password) {
            throw new Error("DB_PASSWORD is missing from the .env file");
        }
    }
}
exports.appConfig = new AppConfig();
