"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsEntity = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../sequelize/connection");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const clientsTableName = process.env.DB_TABLE_NAME_CLIENTS;
if (!clientsTableName) {
    throw new Error("Missing environment variable: DB_TABLE_NAME_CLIENTS");
}
class ClientsEntity extends sequelize_1.Model {
    id;
    name;
    code;
    description;
    is_active;
    created_at;
    updated_at;
}
exports.ClientsEntity = ClientsEntity;
ClientsEntity.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
    },
    code: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: "uq_client_code",
    },
    description: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    is_active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: connection_1.sequelize,
    tableName: clientsTableName,
    modelName: "ClientsEntity",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    indexes: [
        {
            name: "uq_client_code",
            unique: true,
            fields: ["code"],
        },
    ],
});
