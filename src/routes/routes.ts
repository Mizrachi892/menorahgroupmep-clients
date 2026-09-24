import {Router} from "express";
import type {Router as ExpressRouter} from "express";

import {Role} from "@menorahgroupmep/common";
import {secureService} from "@menorahgroupmep/auth";
import {CLIENTS_ROUTES} from "@menorahgroupmep/routes";

import {clientsController} from "../controller/clients.controller";

const clientsRouter: ExpressRouter = Router();

/* ------------------------------------------------------------------
 * Internal API - Microservice to Microservice
 * ------------------------------------------------------------------ */


/* ------------------------------------------------------------------
 * Public API - Through Gateway
 * ------------------------------------------------------------------ */

clientsRouter.get(
    CLIENTS_ROUTES.health,
    clientsController.getServiceHealth,
);

clientsRouter.get(
    CLIENTS_ROUTES.list,
    secureService.verifyRole(
        Role.Administrator,
        Role.Manager,
        Role.Operator,
        Role.Viewer,
    ),
    clientsController.getClientsList,
);

clientsRouter.get(
    CLIENTS_ROUTES.byId,
    secureService.verifyRole(
        Role.Administrator,
        Role.Manager,
        Role.Operator,
        Role.Viewer,
    ),
    clientsController.getSingleClient,
);

export {clientsRouter};