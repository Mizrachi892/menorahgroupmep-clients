import {Request, Response} from "express";
import {StatusCode, ServiceHealth, SERVICE_NAMES} from "@menorahgroupmep/common";

import {clientsManager} from "../manager/clients.manager";
import {serviceStartTime} from "../config/serviceStartTime";

class ClientsController {

    public async getServiceHealth(request: Request, response: Response): Promise<void> {

        const health: ServiceHealth = {
            service: SERVICE_NAMES.clients,
            status: "UP",
            timestamp: new Date().toISOString(),
            version: "1.0.0",
            startedAt: serviceStartTime.toISOString(),
        };
        response.status(StatusCode.OK).json(health);
    }

    public async getClientsList(request: Request, response: Response): Promise<void> {
        const clients = await clientsManager.getClientsList();
        response.status(StatusCode.OK).json(clients);
    }


    public async getSingleClient(request: Request, response: Response): Promise<void> {
        const id = Number(request.params.id);
        const client = await clientsManager.getSingleClient(id);
        response.status(StatusCode.OK).json(client);
    }

}

export const clientsController = new ClientsController();