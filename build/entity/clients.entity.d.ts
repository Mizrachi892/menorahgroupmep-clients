import { Model, Optional } from "sequelize";
interface ClientsAttributes {
    id: number;
    name: string;
    code: string;
    description: string | null;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}
type ClientsCreationAttributes = Optional<ClientsAttributes, "id" | "description" | "is_active" | "created_at" | "updated_at">;
export declare class ClientsEntity extends Model<ClientsAttributes, ClientsCreationAttributes> implements ClientsAttributes {
    id: number;
    name: string;
    code: string;
    description: string | null;
    is_active: boolean;
    readonly created_at: Date;
    readonly updated_at: Date;
}
export {};
