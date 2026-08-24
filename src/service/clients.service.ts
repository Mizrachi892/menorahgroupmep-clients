import { clientsDao } from "../dao/clients.dao";
import { ResourceNotFound } from "@menorahgroupmep/common";

class ClientsService {

    public async getClientsList() {
        return await clientsDao.getClientsList();
    }

    public async getSingleClient(id: number) {
        const client = await clientsDao.getSingleClient(id);
        if (!client) {
            throw new ResourceNotFound(id);
        }
        return client;
    }
}

export const clientsService = new ClientsService();