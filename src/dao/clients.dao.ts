import { ClientsEntity } from "../entity/clients.entity";

class ClientsDao {

    public async getClientsList() {
        return await ClientsEntity.findAll({
            order: [["id", "ASC"]]
        });
    }

    public async getSingleClient(id: number) {
        return await ClientsEntity.findByPk(id);
    }
}

export const clientsDao = new ClientsDao();