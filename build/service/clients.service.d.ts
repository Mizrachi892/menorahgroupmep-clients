declare class ClientsService {
    getClientsList(): Promise<import("../entity/clients.entity").ClientsEntity[]>;
    getSingleClient(id: number): Promise<import("../entity/clients.entity").ClientsEntity>;
}
export declare const clientsService: ClientsService;
export {};
