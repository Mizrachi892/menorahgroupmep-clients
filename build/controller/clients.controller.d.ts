import { Request, Response } from "express";
declare class ClientsController {
    getServiceHealth(request: Request, response: Response): Promise<void>;
    getClientsList(request: Request, response: Response): Promise<void>;
    getSingleClient(request: Request, response: Response): Promise<void>;
}
export declare const clientsController: ClientsController;
export {};
