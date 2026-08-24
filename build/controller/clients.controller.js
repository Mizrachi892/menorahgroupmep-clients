"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsController = void 0;
const common_1 = require("@menorahgroupmep/common");
const clients_manager_1 = require("../manager/clients.manager");
const serviceStartTime_1 = require("../config/serviceStartTime");
class ClientsController {
    async getServiceHealth(request, response) {
        const health = {
            service: common_1.SERVICE_NAMES.clients,
            status: "UP",
            timestamp: new Date().toISOString(),
            version: "1.0.0",
            startedAt: serviceStartTime_1.serviceStartTime.toISOString(),
        };
        response.status(common_1.StatusCode.OK).json(health);
    }
    async getClientsList(request, response) {
        const clients = await clients_manager_1.clientsManager.getClientsList();
        response.status(common_1.StatusCode.OK).json(clients);
    }
    async getSingleClient(request, response) {
        const id = Number(request.params.id);
        const client = await clients_manager_1.clientsManager.getSingleClient(id);
        response.status(common_1.StatusCode.OK).json(client);
    }
}
exports.clientsController = new ClientsController();
