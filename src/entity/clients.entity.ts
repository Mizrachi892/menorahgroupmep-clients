import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize/connection";
import dotenv from "dotenv";

dotenv.config();

const clientsTableName = process.env.DB_TABLE_NAME_CLIENTS;

if (!clientsTableName) {
    throw new Error("Missing environment variable: DB_TABLE_NAME_CLIENTS");
}

interface ClientsAttributes {
    id: number;
    name: string;
    code: string;
    description: string | null;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}

type ClientsCreationAttributes = Optional<
    ClientsAttributes,
    | "id"
    | "description"
    | "is_active"
    | "created_at"
    | "updated_at"
>;

export class ClientsEntity
    extends Model<ClientsAttributes, ClientsCreationAttributes>
    implements ClientsAttributes
{
    public id!: number;
    public name!: string;
    public code!: string;
    public description!: string | null;
    public is_active!: boolean;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

ClientsEntity.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },

        code: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: "uq_client_code",
        },

        description: {
            type: DataTypes.STRING(255),
            allowNull: true,
            defaultValue: null,
        },

        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },

        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },

        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,

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
    }
);