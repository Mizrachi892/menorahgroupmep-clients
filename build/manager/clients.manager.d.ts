declare class ClientsManager {
    getClientsList(): Promise<import("../entity/clients.entity").ClientsEntity[]>;
    getSingleClient(id: number): Promise<import("../entity/clients.entity").ClientsEntity>;
}
export declare const clientsManager: ClientsManager;
export {};
