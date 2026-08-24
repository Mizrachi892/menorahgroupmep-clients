"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsService = void 0;
const clients_dao_1 = require("../dao/clients.dao");
const common_1 = require("@menorahgroupmep/common");
class ClientsService {
    async getClientsList() {
        return await clients_dao_1.clientsDao.getClientsList();
    }
    async getSingleClient(id) {
        const client = await clients_dao_1.clientsDao.getSingleClient(id);
        if (!client) {
            throw new common_1.ResourceNotFound(id);
        }
        return client;
    }
}
exports.clientsService = new ClientsService();
