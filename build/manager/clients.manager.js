"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsManager = void 0;
const clients_service_1 = require("../service/clients.service");
class ClientsManager {
    async getClientsList() {
        return await clients_service_1.clientsService.getClientsList();
    }
    async getSingleClient(id) {
        return await clients_service_1.clientsService.getSingleClient(id);
    }
}
exports.clientsManager = new ClientsManager();
