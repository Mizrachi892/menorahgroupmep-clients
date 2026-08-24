"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const common_1 = require("@menorahgroupmep/common");
const routes_1 = require("./routes/routes");
const initDB_1 = require("./sequelize/initDB");
class App {
    server;
    httpServer;
    constructor() {
        this.server = (0, express_1.default)();
        this.setupCors();
        this.setupMiddlewares();
        this.setupRoutes();
        this.setupErrorHandlers();
    }
    setupCors() {
        this.server.use((0, cors_1.default)({
            origin: [
                "http://localhost:3000",
                "http://10.0.0.139:3000",
            ],
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            allowedHeaders: ["Content-Type", "Authorization"],
        }));
        this.server.options(/.*/, (0, cors_1.default)());
    }
    setupMiddlewares() {
        const middlewares = [
            express_1.default.json(),
            common_1.loggerMiddleware.consoleLog,
        ];
        middlewares.forEach((middleware) => {
            this.server.use(middleware);
        });
    }
    setupRoutes() {
        this.server.use(routes_1.clientsRouter);
    }
    setupErrorHandlers() {
        const errorHandlers = [
            common_1.errorMiddleware.routeNotFound,
            common_1.errorMiddleware.catchAll,
        ];
        errorHandlers.forEach((handler) => {
            this.server.use(handler);
        });
    }
    async start(port) {
        try {
            await (0, initDB_1.initDB)();
            this.httpServer = this.server.listen(port, () => {
                console.log(`🚀 ${common_1.SERVICE_NAMES.clients} service is running on port ${port}`);
            });
        }
        catch (error) {
            console.error("Failed to start server:", error);
            process.exit(1);
        }
    }
    stop() {
        if (!this.httpServer) {
            console.log("Server is not running.");
            return;
        }
        this.httpServer.close(() => {
            console.log("Server stopped successfully.");
        });
    }
}
const app = new App();
app.start(common_1.BASE_PORTS.clients);
