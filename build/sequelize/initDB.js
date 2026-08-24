"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDB = initDB;
const common_1 = require("@menorahgroupmep/common");
const common_2 = require("@menorahgroupmep/common");
const connection_1 = require("./connection");
let relationsDefined = false;
function defineRelations() {
    if (relationsDefined)
        return;
    relationsDefined = true;
}
function initDB() {
    return (0, common_1.initDB)(connection_1.sequelize, common_2.SERVICE_NAMES.clients, defineRelations);
}
