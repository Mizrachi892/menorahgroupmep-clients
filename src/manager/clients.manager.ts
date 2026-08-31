import {clientsService} from "../service/clients.service";

class ClientsManager {

    public async getClientsList() {
        return await clientsService.getClientsList();
    }

    public async getSingleClient(id: number) {
        return await clientsService.getSingleClient(id);
    }
}

export const clientsManager = new ClientsManager();