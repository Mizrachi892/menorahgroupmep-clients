declare class AppConfig {
    readonly host: string;
    readonly port: number;
    readonly user: string;
    readonly password: string;
    readonly database: string;
    readonly secretKey: string;
    constructor();
}
export declare const appConfig: AppConfig;
export {};
