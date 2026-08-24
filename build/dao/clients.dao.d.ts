import { ClientsEntity } from "../entity/clients.entity";
declare class ClientsDao {
    getClientsList(): Promise<ClientsEntity[]>;
    getSingleClient(id: number): Promise<ClientsEntity | null>;
}
export declare const clientsDao: ClientsDao;
export {};
