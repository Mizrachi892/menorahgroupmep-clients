"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const common_1 = require("@menorahgroupmep/common");
const app_config_1 = require("../config/app.config");
exports.sequelize = (0, common_1.createSequelize)(app_config_1.appConfig);
