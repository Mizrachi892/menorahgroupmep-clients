import {Router} from "express";
import type {Router as ExpressRouter} from "express";

import {Role} from "@menorahgroupmep/common";
import {secureService} from "@menorahgroupmep/auth";
import {clientsController} from "../controller/clients.controller";

const clientsRouter: ExpressRouter = Router();

/* ------------------------------------------------------------------
 * Internal API - Microservice to Microservice
 * ------------------------------------------------------------------ */



/* ------------------------------------------------------------------
 * Public API - Through Gateway
 * ------------------------------------------------------------------ */

clientsRouter.get("/getServiceHealth", clientsController.getServiceHealth);
clientsRouter.get("/getClientsList", secureService.verifyRole(Role.Administrator, Role.Manager, Role.Operator, Role.Viewer), clientsController.getClientsList);
clientsRouter.get("/getSingleClient/:id", secureService.verifyRole(Role.Administrator, Role.Manager, Role.Operator, Role.Viewer), clientsController.getSingleClient);

export {clientsRouter};