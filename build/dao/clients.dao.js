"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsDao = void 0;
const clients_entity_1 = require("../entity/clients.entity");
class ClientsDao {
    async getClientsList() {
        return await clients_entity_1.ClientsEntity.findAll({
            order: [["id", "ASC"]]
        });
    }
    async getSingleClient(id) {
        return await clients_entity_1.ClientsEntity.findByPk(id);
    }
}
exports.clientsDao = new ClientsDao();
